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
  /** Optional: a custom two-column block that replaces the normal grid
   *  for a run of gallery slots — each column is a stack of items
   *  rendered top to bottom at natural height (no cropping). An item
   *  is either a gallery index (within gallery.slice(1)) or the
   *  literal 'text', which renders textKey in a bordered panel. Used
   *  to balance two screenshots of very different lengths. */
  stackedColumns?: { left: (number | 'text')[]; right: (number | 'text')[]; textKey?: string };
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
    id: 4,
    slug: 'forja',
    cover: WORK_IMAGES.proj4.cover,
    gallery: WORK_IMAGES.proj4.gallery,
    year: '2023',
    titleKey: 'proj4Title',
    catKey: 'proj4Cat',
    descKey: 'proj4Desc',
    tagKeys: ['proj4Tag1', 'proj4Tag2', 'proj4Tag3'],
    // gallery.slice(1) = [antes (0, cuadrada), servicioCliente (1), homepage (2)]
    // Columna izquierda: cuadrada → texto → servicio al cliente (apiladas)
    // Columna derecha: homepage sola (la más larga)
    stackedColumns: { left: [0, 'text', 1], right: [2], textKey: 'proj4SideText' },
  },
  {
    id: 5,
    slug: 'bettercampus',
    cover: WORK_IMAGES.proj5.cover,
    gallery: WORK_IMAGES.proj5.gallery,
    year: '2023',
    titleKey: 'proj5Title',
    catKey: 'proj5Cat',
    descKey: 'proj5Desc',
    tagKeys: ['proj5Tag1', 'proj5Tag2', 'proj5Tag3'],
    externalUrl: 'https://www.bettercampus.com.co/',
    externalPromptKey: 'proj5ExternalPrompt',
    externalButtonKey: 'proj5ExternalButton',
  },
];

export function getProjectById(id: number) {
  return projects.find((p) => p.id === id);
}
