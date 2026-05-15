# Deploy runbook — hellozito.com

Manual steps to deploy the site to Vercel and cut over DNS. Do these after the PR is merged to main.

---

## 1. Link the repo to a Vercel project

```bash
npx vercel link
```

- Choose your personal account or the Productist org.
- When prompted for "Set up and deploy," say yes.
- Framework preset: **Astro** (Vercel auto-detects from `vercel.json`).
- Root directory: `.` (repo root).
- Build command: `npm run build` (pre-set in `vercel.json`).
- Output directory: `dist` (pre-set in `vercel.json`).

---

## 2. Set environment variables in Vercel

In the Vercel dashboard, go to your project → **Settings** → **Environment Variables**.

Add:

| Name | Value | Environments |
|------|-------|-------------|
| `PUBLIC_GA_ID` | `G-NZTRS0RCJJ` | Production (Preview optional) |

The Measurement ID was pulled from GA4 Admin → Data Streams → Web stream. (The `421579228` value seen elsewhere is the GA4 Property ID — a different identifier; the tag needs the `G-...` Measurement ID to fire.)

Skip the Development scope — the snippet is gated on `import.meta.env.PROD`, so `npm run dev` will never fire GA regardless. Preview is optional; enable it if you want analytics on PR preview URLs.

After saving the variable, redeploy so the new env is baked into the build.

---

## 3. Connect GitHub repo and deploy

1. In Vercel dashboard → **Git** → connect to GitHub → select `hellozito_site` (or whatever the repo is named).
2. Vercel will automatically deploy every push to `main` as production, and every PR branch as a preview URL.
3. Verify the first preview deploy (preview URL looks like `hellozito-site-xyz.vercel.app`):
   - Home loads, all nav links work.
   - View source: `<meta name="description">` present, `og:title` and `og:image` present.
   - GA snippet present in source (it's a prod build; preview URLs are `PROD=true` in Vercel).
   - `https://<preview>.vercel.app/sitemap-index.xml` returns XML with page URLs.
   - `https://<preview>.vercel.app/robots.txt` returns the correct content.

---

## 4. Promote to production (custom domain)

After confirming preview is healthy:

1. Vercel dashboard → **Domains** → add `hellozito.com` and `www.hellozito.com`.
2. Vercel will show you DNS records to set. See DNS cutover section below.
3. Once DNS propagates, Vercel auto-provisions SSL via Let's Encrypt.

---

## 5. DNS cutover

**Do this carefully** — the domain currently has MX records (email). A wrong move orphans email.

### Pre-cutover: audit current DNS

Before touching anything, export every current record. Your DNS host should have an export or "advanced DNS" view. Document:

- `A` records (root domain, currently pointing at GitHub Pages IPs: `185.199.108.153` etc.)
- `AAAA` records (if any)
- `CNAME` records (e.g., `www`)
- `MX` records — **do not touch these**
- `TXT` records — includes SPF (`v=spf1 ...`), DKIM, DMARC, any domain verification records — **do not touch these**

### Records to change

| Record | Type | Old value | New value |
|--------|------|-----------|-----------|
| `@` (root) | A | GitHub Pages IPs | `76.76.21.21` (Vercel) |
| `www` | CNAME | GitHub Pages | `cname.vercel-dns.com` |

**Do NOT:**
- Transfer nameservers to Vercel — that would wipe MX and TXT records.
- Remove MX records.
- Remove TXT/SPF/DKIM/DMARC records.
- Touch any record not listed above.

### Adding Vercel records alongside existing ones

1. At your DNS host, add the new A record for `@` pointing to `76.76.21.21`.
2. Update the `www` CNAME to `cname.vercel-dns.com` (or add it if it doesn't exist).
3. Remove the old GitHub Pages A records for `@` (the four `185.199.x.x` IPs).
4. Leave MX and TXT records untouched.

TTL: if your TTL is currently high (e.g., 86400), lower it to 300 a day before cutover so propagation is fast. Restore after.

---

## 6. Post-cutover smoke tests

Run these after DNS propagates (usually 5–30 minutes, up to a few hours for high TTLs):

```bash
# Confirm Vercel IP
dig hellozito.com A
# Should return 76.76.21.21

# Confirm MX records are intact
dig hellozito.com MX
# Should return same MX records as before cutover

# Confirm www resolves
dig www.hellozito.com CNAME
# Should return cname.vercel-dns.com or Vercel's IP

# HTTPS smoke test
curl -sI https://hellozito.com | head -5
# Should return HTTP/2 200 with Vercel headers

# Sitemap
curl -s https://hellozito.com/sitemap-index.xml | head -20

# Robots
curl -s https://hellozito.com/robots.txt
```

**Email test** — send a test email to/from the domain's email address. Confirm send and receive work before declaring cutover complete.

---

## Old site (tonyrobots.github.io)

The old GitHub Pages site at `tonyrobots.github.io` is out of scope for this deploy. Decide separately:
- Leave it up as an archive.
- Add a banner pointing to hellozito.com.
- Set up a GitHub Pages redirect (requires a `_redirects` or custom 404).

Do not touch it during this DNS cutover.
