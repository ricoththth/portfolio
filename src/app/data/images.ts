// ═══════════════════════════════════════════════════════════════════
// TODAS LAS FOTOS DEL SITIO — un solo lugar para cambiarlas
// ═══════════════════════════════════════════════════════════════════
//
// ¿Cómo reemplazo una foto?
//   1. Deja tu archivo nuevo en  src/assets/uploads/  (cualquier nombre).
//   2. Arriba, en el bloque de imports de esta misma sección, agrega:
//        import miFotoNueva from '../../assets/uploads/mi-archivo.jpg';
//   3. Más abajo, en el objeto de esa sección, reemplaza el valor por
//      `miFotoNueva`.
//
// No hay que tocar Home.tsx, Work.tsx, About.tsx, Play.tsx ni
// projects.ts — todos leen las fotos desde aquí.

// ───────────────────────────────────────────────────────────────────
// Archivos originales del proyecto (fotos ya existentes)
// ───────────────────────────────────────────────────────────────────
import fotoPerfilHome from '../../imports/Desktop1/409cbe047aa72758d77c7abb09796a7ec4faf03f.png';

import fotoTallerAbrazo from '../../imports/Desktop3/48f0e4f9ea8f9d18488373f4f94e4a0f738cfe94.png'; // dos chicas abrazadas, foto rotada (taller)
import fotoRetratoAbrazo from '../../imports/Desktop3/de1915ac263bb0d641e7b17b76609c8d0c6836c8.png'; // mismo par, versión derecha (retrato)
import fotoDesfileTrio from '../../imports/Desktop3/d6b83829ec4f021a428062642136e2d51c682ab2.png'; // 3 modelos, evento/feria
import fotoDesfilePasarela from '../../imports/Desktop3/fe29603c489dcec5e917b0a270f2ae2dfdccf164.png'; // 3 personas bailando en tarima, luces turquesa
import fotoPosterTaller from '../../imports/Desktop3/70c0b3d97ab60923b919b1ee9b1c90b3b09b45be.png'; // póster "Taller Genérame Esta"
import fotoCollageHalloween from '../../imports/Desktop3/12777d0292107c4af8e01b8dacef28afb348c064.png'; // collage de fotos del taller (máscaras, Pac-Man)
import fotoTexturaRosa from '../../imports/Desktop3/df869e1615c57ee0774db69b610db62ce72c7873.png'; // textura rosa (mesa de corte), abstracta

// Las 4 fotos "about-p*" son EXCLUSIVAS del slider de About — no se
// reutilizan en ningún otro lado del sitio (Work, Play, etc.)
import fotoRetratoHalftone from '../../imports/Desktop3/about-p1.png'; // retrato en halftone con estrellas dibujadas a mano
import fotoCafe from '../../imports/Desktop3/about-p2.png'; // tomando café, viaje
import fotoOnSet from '../../imports/Desktop3/about-p4.png'; // con cámara Canon, "en set"
import fotoTiendaSelfie from '../../imports/Desktop3/about-p5.png'; // selfie en espejo dentro de una tienda

import fotoCollageMoodboard from '../../imports/image-3.png'; // moodboard propio sobre la mesa de corte rosa
// fotoProductoUI (image-1.png, capturas de Polymarket/Koino) quedó sin
// usar al reemplazar MAKERSVILLE por MOODY — sigue disponible en
// src/imports/image-1.png si la quieres para otro proyecto.

import fotoTableroPlay from '../../imports/image-4.png'; // corcho de fondo para el tablero de "Play"

// ⚠️ Placeholder intencional: espacios de galería de Work que antes
// usaban las fotos "about-p*" (ya no, ver arriba) y todavía no tienen
// una foto real del proyecto. Se ve como imagen rota a propósito —
// cuando me pases las fotos de cada proyecto, reemplaza esto por tus
// imports reales.
const fotoPendiente = '/FOTO-PENDIENTE-DEL-PROYECTO.jpg';

// ⚠️ image-2.png y image-5.png NO se usan: son capturas de referencia de
// sitios de OTRAS personas (el portafolio "Eileen Yang" y la tienda
// "Omma"), no trabajo real de Lizeth — las dejamos fuera para no
// mostrarlas como si fueran proyectos propios.

// ───────────────────────────────────────────────────────────────────
// Archivos subidos por ti (src/assets/uploads/)
// ───────────────────────────────────────────────────────────────────
import webpBannerPlay from '../../assets/uploads/banner_play.webp'; // banner "Coming up PHOTOBOOTH" (versión webp, reemplaza al svg)
import svgLogoPag from '../../assets/uploads/logo-pag.svg'; // logo tipo estrella/sparkle (azul)
import svgHoverProjects from '../../assets/uploads/hover-projects.svg'; // ícono decorativo (azul) que aparece encima de las fotos de Work al hacer hover
import imgMoodyLogo from '../../assets/uploads/moody-logo.png'; // logo/mascota del proyecto Moody (3 "blobs" con cara)

// ───────────────────────────────────────────────────────────────────
// HOME — página de inicio
// ───────────────────────────────────────────────────────────────────
export const HOME_IMAGES = {
  perfil: fotoPerfilHome, // foto grande junto a "hi! i'm lizeth"
};

// ───────────────────────────────────────────────────────────────────
// MARCA — logo usado en la pestaña del navegador (favicon, ver
// index.html) y disponible por si luego lo quieres poner también
// dentro del sitio (nav, footer, etc.)
// ───────────────────────────────────────────────────────────────────
export const BRAND_IMAGES = {
  logo: svgLogoPag,
};

// ───────────────────────────────────────────────────────────────────
// ABOUT — mazo de fotos que se puede barajar ("click to shuffle")
// Son EXACTAMENTE las 4 fotos "about-p*" de Desktop3 — no se mezclan
// con otras fotos del sitio. El orden aquí es el orden inicial del
// mazo; cada entrada usa una clave de traducción (cap1..cap4)
// definida en LanguageContext.tsx
// ───────────────────────────────────────────────────────────────────
export const ABOUT_DECK = [
  { img: fotoRetratoHalftone, captionKey: 'cap1' }, // retrato, 2024
  { img: fotoCafe,            captionKey: 'cap2' }, // café, 2023
  { img: fotoOnSet,           captionKey: 'cap3' }, // en set, 2023
  { img: fotoTiendaSelfie,    captionKey: 'cap4' }, // de compras, 2024
];

// ───────────────────────────────────────────────────────────────────
// WORK — portada de cada proyecto + galería de su página de detalle
// (usado por src/app/data/projects.ts — no lo edites ahí, edítalo aquí)
// ───────────────────────────────────────────────────────────────────
export const WORK_IMAGES = {
  proj1: { cover: fotoTallerAbrazo,      gallery: [fotoTallerAbrazo,      fotoPosterTaller,      fotoPendiente,        fotoCollageMoodboard] },
  proj2: { cover: fotoRetratoAbrazo,     gallery: [fotoRetratoAbrazo,     fotoPendiente,          fotoPendiente,        fotoTallerAbrazo] },
  proj3: { cover: imgMoodyLogo,          gallery: [imgMoodyLogo,          fotoPendiente,         fotoPendiente,        fotoPendiente] }, // MOODY — foto real, faltan más
  proj4: { cover: fotoDesfileTrio,       gallery: [fotoDesfileTrio,       fotoPendiente,          fotoCollageMoodboard,fotoPendiente] },
  proj5: { cover: fotoDesfilePasarela,   gallery: [fotoDesfilePasarela,   fotoCollageMoodboard,  fotoPendiente,        fotoPendiente] },
  proj6: { cover: fotoCollageHalloween,  gallery: [fotoCollageHalloween,  fotoPendiente,          fotoPendiente,        fotoPendiente] },
  proj7: { cover: fotoTexturaRosa,       gallery: [fotoTexturaRosa,       fotoPendiente,          fotoCollageMoodboard,fotoPendiente] },
  // ícono que aparece encima de la portada al pasar el mouse (solo en Work)
  hoverIcon: svgHoverProjects,
};

// ───────────────────────────────────────────────────────────────────
// PLAY — tablero de fotos que se pueden arrastrar
// ───────────────────────────────────────────────────────────────────
export const PLAY_IMAGES = {
  tablero: fotoTableroPlay,
  banner: webpBannerPlay, // se muestra debajo del tablero de fotos
  fotos: [
    { img: fotoPosterTaller,    titleKey: 'photo1Title' },
    { img: fotoRetratoAbrazo,   titleKey: 'photo2Title' },
    { img: fotoTallerAbrazo,    titleKey: 'photo3Title' },
    { img: fotoDesfilePasarela, titleKey: 'photo4Title' },
    { img: fotoDesfileTrio,     titleKey: 'photo5Title' },
    { img: fotoCollageHalloween,titleKey: 'photo6Title' },
  ],
};
