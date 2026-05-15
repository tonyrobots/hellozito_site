/**
 * Drawings manifest — typed array of all ink drawings.
 * Images flow through Astro's asset pipeline for srcset/AVIF/lazy.
 *
 * Titles come from the DrawingsGallery.jsx prototype (verbatim) plus
 * filenames for drawings 10 and 25 which were not in the original prototype.
 *
 * Numbering is non-contiguous in the prototype (missing 10, 25 originally)
 * but the GitHub source has all 42. n values match the filename prefix.
 */

import type { ImageMetadata } from 'astro';

export interface Drawing {
  n: number;
  slug: string;
  title: string;
  image: ImageMetadata;
}

// Eager glob — all drawings go through Astro's image optimization pipeline
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/drawings/*.jpg',
  { eager: true }
);

// Helper: resolve an image by filename
function img(filename: string): ImageMetadata {
  const key = `/src/assets/drawings/${filename}`;
  const mod = imageModules[key];
  if (!mod) throw new Error(`Drawing image not found: ${filename}`);
  return mod.default;
}

export const drawings: Drawing[] = [
  { n: 1,  slug: 'wfh',                          title: 'WFH',                                  image: img('1_WFH_1200px.jpg') },
  { n: 2,  slug: 'grab-the-ring',                title: 'grab the ring',                        image: img('2_grab the ring_X_1200px.jpg') },
  { n: 3,  slug: 'falling-behind',               title: 'falling behind',                       image: img('3_falling behind_1200px.jpg') },
  { n: 4,  slug: 'certain',                      title: 'certain',                              image: img('4_certain_1200px.jpg') },
  { n: 5,  slug: 'not-this-way',                 title: 'not this way',                         image: img('5_not this way_1200px.jpg') },
  { n: 6,  slug: 'pick-a-hand',                  title: 'pick a hand',                          image: img('6_pick a hand_1200px.jpg') },
  { n: 7,  slug: 'gold-and-diamonds',            title: 'gold and diamonds',                    image: img('7_gold and diamonds_1200px.jpg') },
  { n: 8,  slug: 'pharaoh',                      title: 'pharaoh',                              image: img('8_pharaoh_1200px.jpg') },
  { n: 9,  slug: 'beautiful-we-love-it',         title: 'beautiful, we love it',                image: img('9_beautiful we love it_1200px.jpg') },
  { n: 10, slug: 'fearless-leader',              title: 'fearless leader',                      image: img('10_fearless leader_1200px.jpg') },
  { n: 11, slug: 'child-child',                  title: 'child child',                          image: img('11_child child_1200px.jpg') },
  { n: 12, slug: 'go-team',                      title: 'go team',                              image: img('12_go team_1200px.jpg') },
  { n: 13, slug: 'arrow-of-time',                title: 'the arrow of time',                    image: img('13_arrow of time_1200px.jpg') },
  { n: 14, slug: 'get-your-steps',               title: 'get your steps',                       image: img('14_get your steps_1200px.jpg') },
  { n: 15, slug: 'okay-okay',                    title: 'okay, okay',                           image: img('15_okay okay_1200px.jpg') },
  { n: 16, slug: 'free',                         title: 'free',                                 image: img('16_free_1200px.jpg') },
  { n: 17, slug: 'moving-day',                   title: 'moving day',                           image: img('17_moving day_1200px.jpg') },
  { n: 18, slug: 'your-problems',                title: 'your problems',                        image: img('18_your problems_1200px.jpg') },
  { n: 19, slug: 'little-brown-bird',            title: 'little brown bird',                    image: img('19_little brown bird_1200px.jpg') },
  { n: 20, slug: 'bad-fork',                     title: 'bad fork',                             image: img('20_bad fork_1200px.jpg') },
  { n: 21, slug: 'welcome',                      title: 'welcome',                              image: img('21_welcome_1200px.jpg') },
  { n: 22, slug: 'moon-eels',                    title: 'look the moon eels are leaving',       image: img('22_moon eels_1200px.jpg') },
  { n: 23, slug: 'hamburguesa',                  title: 'hamburguesa',                          image: img('23_hamburguesa_1200px.jpg') },
  { n: 24, slug: 'forgot-my-phone',              title: 'forgot my phone',                      image: img('24_forgot my phone_1200px.jpg') },
  { n: 25, slug: 'doesnt-do-anything',           title: "doesn't do anything",                  image: img('25_doesnt do anything_1200px.jpg') },
  { n: 26, slug: 'earth-is-plummeting',          title: 'the earth is plummeting',              image: img('26_earth is plummeting_1200px.jpg') },
  { n: 27, slug: 'hang-loose',                   title: 'hang loose',                           image: img('27_hang loose_1200px.jpg') },
  { n: 28, slug: 'free-part-2',                  title: 'free, part 2',                         image: img('28_free part 2_1200px.jpg') },
  { n: 29, slug: 'four-basic-head-shapes',       title: 'the four basic head shapes',           image: img('29_four basic head shapes_1200px.jpg') },
  { n: 30, slug: 'supermarket-sushi',            title: 'supermarket sushi',                    image: img('30_supermarket sushi_1200px.jpg') },
  { n: 31, slug: 'a-wonderful-time',             title: 'a wonderful time',                     image: img('31_a wonderful time_1200px.jpg') },
  { n: 32, slug: 'come-with-us',                 title: 'come with us',                         image: img('32_come with us_1200px.jpg') },
  { n: 33, slug: 'drawing-of-a-cactus',          title: 'drawing of a cactus',                  image: img('33_drawing of a cactus_1200px.jpg') },
  { n: 34, slug: 'spin-again',                   title: 'spin again',                           image: img('34_spin again_1200px.jpg') },
  { n: 35, slug: 'you-will-never-be',            title: 'you will never be',                    image: img('35_you will never be_1200px.jpg') },
  { n: 36, slug: 'poot',                         title: 'poot',                                 image: img('36_poot_1200px.jpg') },
  { n: 37, slug: 'i-took-care-of-it',            title: 'i took care of it',                    image: img('37_I took care of it_1200px.jpg') },
  { n: 38, slug: 'damn-you-leonard-cohen',       title: 'damn you, leonard cohen',              image: img('38_damn you leonard cohen_1200px.jpg') },
  { n: 39, slug: 'may-your-aim-be-cosmic',       title: 'may your aim be cosmic and true',      image: img('39_may your aim be cosmic and true_1200px.jpg') },
  { n: 40, slug: 'computers-are-made-of-rocks',  title: 'computers are made of rocks',          image: img('40_computers are made of rocks_1200px.jpg') },
  { n: 41, slug: 'save-me',                      title: 'save me',                              image: img('41_save me_1200px.jpg') },
  { n: 42, slug: 'hairy-ghosts',                 title: 'hairy ghosts',                         image: img('42_hairy ghosts_1200px.jpg') },
];
