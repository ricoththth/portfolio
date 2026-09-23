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

import fotoRetratoHalftone from '../../imports/Desktop3/about-p1.png'; // retrato en halftone con estrellas dibujadas a mano
import fotoCafe from '../../imports/Desktop3/about-p2.png'; // tomando café, viaje
import fotoOnSet from '../../imports/Desktop3/about-p4.png'; // con cámara Canon, "en set"
import fotoTiendaSelfie from '../../imports/Desktop3/about-p5.png'; // selfie en espejo dentro de una tienda

import fotoAboutHalftone from '../../imports/Desktop4/df70452dbca136a2b61c68a126938f310aafc7bd.png'; // retrato en halftone blanco y negro
// ⚠️ este archivo original venía completamente en blanco (roto) — lo reemplazamos por fotoCollageMoodboard más abajo
// import fotoAboutBlanco from '../../imports/Desktop4/b846cac68644cc134ff6df02c312aa0f977535c7.png';

import fotoProductoUI from '../../imports/image-1.png'; // capturas de producto propias (Polymarket, Koino) + logos de marcas
import fotoCollageMoodboard from '../../imports/image-3.png'; // moodboard propio sobre la mesa de corte rosa
import fotoGalapagos from '../../imports/image-7.png'; // foto personal, Galápagos

import fotoTableroPlay from '../../imports/image-4.png'; // corcho de fondo para el tablero de "Play"

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
// El orden aquí es el orden inicial del mazo; cada entrada usa una
// clave de traducción (cap1..cap7) definida en LanguageContext.tsx
// ───────────────────────────────────────────────────────────────────
export const ABOUT_DECK = [
  { img: fotoGalapagos,        captionKey: 'cap1' }, // galápagos, 2024
  { img: fotoAboutHalftone,    captionKey: 'cap2' }, // retrato, 2024
  { img: fotoPosterTaller,     captionKey: 'cap3' }, // taller, 2024
  { img: fotoDesfileTrio,      captionKey: 'cap4' }, // comunidad, 2022
  { img: fotoOnSet,            captionKey: 'cap5' }, // en set, 2023
  { img: fotoTallerAbrazo,     captionKey: 'cap6' }, // generame idea, 2024
  { img: fotoCollageMoodboard, captionKey: 'cap7' }, // construyendo en público
];

// ───────────────────────────────────────────────────────────────────
// WORK — portada de cada proyecto + galería de su página de detalle
// (usado por src/app/data/projects.ts — no lo edites ahí, edítalo aquí)
// ───────────────────────────────────────────────────────────────────
export const WORK_IMAGES = {
  proj1: { cover: fotoTallerAbrazo,      gallery: [fotoTallerAbrazo,      fotoPosterTaller,      fotoRetratoHalftone, fotoCollageMoodboard] },
  proj2: { cover: fotoRetratoAbrazo,     gallery: [fotoRetratoAbrazo,     fotoCafe,              fotoOnSet,           fotoTallerAbrazo] },
  proj3: { cover: fotoProductoUI,        gallery: [fotoProductoUI,        fotoPosterTaller,      fotoOnSet,           fotoTiendaSelfie] },
  proj4: { cover: fotoDesfileTrio,       gallery: [fotoDesfileTrio,       fotoTiendaSelfie,      fotoCollageMoodboard,fotoCafe] },
  proj5: { cover: fotoDesfilePasarela,   gallery: [fotoDesfilePasarela,   fotoCollageMoodboard,  fotoOnSet,           fotoRetratoHalftone] },
  proj6: { cover: fotoCollageHalloween,  gallery: [fotoCollageHalloween,  fotoRetratoHalftone,   fotoCafe,            fotoTiendaSelfie] },
  proj7: { cover: fotoTexturaRosa,       gallery: [fotoTexturaRosa,       fotoOnSet,             fotoCollageMoodboard,fotoCafe] },
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
