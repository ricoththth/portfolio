import { WORK_IMAGES } from './images';

export interface ProjectData {
  id: number;
  slug: string;
  cover: string;
  gallery: string[];
  year: string;
  titleKey: string;
  catKey: string;
  descKey: string;
  tagKeys: string[];
  /** Optional: when set, the last gallery photo is swapped for a text
   *  panel showing this copy instead — for projects that need more
   *  room to explain than a caption allows. */
  extraTextKey?: string;
  /** Optional: indices (within gallery.slice(1)) that render full-width
   *  with object-contain instead of the small 4:3 object-cover grid —
   *  for dense screenshots/infographics that shouldn't get cropped.
   *  Defaults to [0] (just the first slot) when not set. */
  wideSlots?: number[];
  /** Optional: shows a "want to read more / try it?" prompt + round
   *  button below the gallery, linking out (e.g. to a Behance case
   *  study). All three must be set together. */
  externalUrl?: string;
  externalPromptKey?: string;
  externalButtonKey?: string;
}

// Central source of truth for every case study — used by the Work grid
// and the project detail page so both stay in sync. To change WHICH
// photos a project uses, edit WORK_IMAGES in src/app/data/images.ts —
// this file only decides titles, tags, and copy.
export const projects: ProjectData[] = [
  {
    id: 3,
    slug: 'moody',
    cover: WORK_IMAGES.proj3.cover,
    gallery: WORK_IMAGES.proj3.gallery,
    year: '2022',
    titleKey: 'proj3Title',
    catKey: 'proj3Cat',
    descKey: 'proj3Desc',
    tagKeys: ['proj3Tag1', 'proj3Tag2', 'proj3Tag3'],
    wideSlots: [0, 1, 2],
    externalUrl: 'https://www.behance.net/gallery/175823079/Moody-Ux-Research?tracking_source=search_projects|ricoththth&l=1',
    externalPromptKey: 'proj3ExternalPrompt',
    externalButtonKey: 'proj3ExternalButton',
  },
  {
    id: 1,
    slug: 'genrame-idea',
    cover: WORK_IMAGES.proj1.cover,
    gallery: WORK_IMAGES.proj1.gallery,
    year: '2024',
    titleKey: 'proj1Title',
    catKey: 'proj1Cat',
    descKey: 'proj1Desc',
    tagKeys: ['proj1Tag1', 'proj1Tag2'],
    extraTextKey: 'proj1ExtraText',
  },
  {
    id: 2,
    slug: 'portrait-series',
    cover: WORK_IMAGES.proj2.cover,
    gallery: WORK_IMAGES.proj2.gallery,
    year: '2023',
    titleKey: 'proj2Title',
    catKey: 'proj2Cat',
    descKey: 'proj2Desc',
    tagKeys: ['proj2Tag1', 'proj2Tag2'],
  },
  {
    id: 4,
    slug: 'community-event',
    cover: WORK_IMAGES.proj4.cover,
    gallery: WORK_IMAGES.proj4.gallery,
    year: '2022',
    titleKey: 'proj4Title',
    catKey: 'proj4Cat',
    descKey: 'proj4Desc',
    tagKeys: ['proj4Tag1', 'proj4Tag2'],
  },
  {
    id: 5,
    slug: 'creative-exploration',
    cover: WORK_IMAGES.proj5.cover,
    gallery: WORK_IMAGES.proj5.gallery,
    year: '2023',
    titleKey: 'proj5Title',
    catKey: 'proj5Cat',
    descKey: 'proj5Desc',
    tagKeys: ['proj5Tag1', 'proj5Tag2'],
  },
  {
    id: 6,
    slug: 'collage-work',
    cover: WORK_IMAGES.proj6.cover,
    gallery: WORK_IMAGES.proj6.gallery,
    year: '2024',
    titleKey: 'proj6Title',
    catKey: 'proj6Cat',
    descKey: 'proj6Desc',
    tagKeys: ['proj6Tag1', 'proj6Tag2'],
  },
  {
    id: 7,
    slug: 'brand-system',
    cover: WORK_IMAGES.proj7.cover,
    gallery: WORK_IMAGES.proj7.gallery,
    year: '2023',
    titleKey: 'proj7Title',
    catKey: 'proj7Cat',
    descKey: 'proj7Desc',
    tagKeys: ['proj7Tag1', 'proj7Tag2'],
  },
];

export function getProjectById(id: number) {
  return projects.find((p) => p.id === id);
}
