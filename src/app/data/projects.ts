import imgPhoto1 from '../../imports/Desktop3/48f0e4f9ea8f9d18488373f4f94e4a0f738cfe94.png';
import imgPhoto2 from '../../imports/Desktop3/d6b83829ec4f021a428062642136e2d51c682ab2.png';
import imgPhoto3 from '../../imports/Desktop3/fe29603c489dcec5e917b0a270f2ae2dfdccf164.png';
import imgPhoto4 from '../../imports/Desktop3/de1915ac263bb0d641e7b17b76609c8d0c6836c8.png';
import imgPhoto5 from '../../imports/Desktop3/70c0b3d97ab60923b919b1ee9b1c90b3b09b45be.png';
import imgPhoto6 from '../../imports/Desktop3/12777d0292107c4af8e01b8dacef28afb348c064.png';
import imgPhoto7 from '../../imports/Desktop3/df869e1615c57ee0774db69b610db62ce72c7873.png';
import imgGallery1 from '../../imports/image-1.png';
import imgGallery2 from '../../imports/image-2.png';
import imgGallery3 from '../../imports/image-3.png';
import imgGallery5 from '../../imports/image-5.png';
import imgGallery6 from '../../imports/image-6.png';
import imgAboutP1 from '../../imports/Desktop3/about-p1.png';
import imgAboutP2 from '../../imports/Desktop3/about-p2.png';
import imgAboutP4 from '../../imports/Desktop3/about-p4.png';
import imgAboutP5 from '../../imports/Desktop3/about-p5.png';

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
}

// Central source of truth for every case study — used by the Work grid
// and the project detail page so both stay in sync.
export const projects: ProjectData[] = [
  {
    id: 1,
    slug: 'genrame-idea',
    cover: imgPhoto1,
    gallery: [imgPhoto1, imgGallery1, imgAboutP1, imgGallery2],
    year: '2024',
    titleKey: 'proj1Title',
    catKey: 'proj1Cat',
    descKey: 'proj1Desc',
    tagKeys: ['proj1Tag1', 'proj1Tag2'],
  },
  {
    id: 2,
    slug: 'portrait-series',
    cover: imgPhoto4,
    gallery: [imgPhoto4, imgGallery3, imgAboutP2, imgGallery5],
    year: '2023',
    titleKey: 'proj2Title',
    catKey: 'proj2Cat',
    descKey: 'proj2Desc',
    tagKeys: ['proj2Tag1', 'proj2Tag2'],
  },
  {
    id: 3,
    slug: 'makersville',
    cover: imgPhoto5,
    gallery: [imgPhoto5, imgGallery6, imgAboutP4, imgGallery1],
    year: '2022',
    titleKey: 'proj3Title',
    catKey: 'proj3Cat',
    descKey: 'proj3Desc',
    tagKeys: ['proj3Tag1', 'proj3Tag2'],
  },
  {
    id: 4,
    slug: 'community-event',
    cover: imgPhoto2,
    gallery: [imgPhoto2, imgAboutP5, imgGallery2, imgGallery3],
    year: '2022',
    titleKey: 'proj4Title',
    catKey: 'proj4Cat',
    descKey: 'proj4Desc',
    tagKeys: ['proj4Tag1', 'proj4Tag2'],
  },
  {
    id: 5,
    slug: 'creative-exploration',
    cover: imgPhoto3,
    gallery: [imgPhoto3, imgGallery5, imgGallery6, imgAboutP1],
    year: '2023',
    titleKey: 'proj5Title',
    catKey: 'proj5Cat',
    descKey: 'proj5Desc',
    tagKeys: ['proj5Tag1', 'proj5Tag2'],
  },
  {
    id: 6,
    slug: 'collage-work',
    cover: imgPhoto6,
    gallery: [imgPhoto6, imgAboutP2, imgGallery1, imgGallery5],
    year: '2024',
    titleKey: 'proj6Title',
    catKey: 'proj6Cat',
    descKey: 'proj6Desc',
    tagKeys: ['proj6Tag1', 'proj6Tag2'],
  },
  {
    id: 7,
    slug: 'brand-system',
    cover: imgPhoto7,
    gallery: [imgPhoto7, imgGallery2, imgGallery6, imgAboutP4],
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
