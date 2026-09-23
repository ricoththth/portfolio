import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // ── NAV ──────────────────────────────────────────────────────
    work: 'Work',
    play: 'Play',
    about: 'About',
    resume: 'Resume',

    // ── FOOTER ───────────────────────────────────────────────────
    footerCopy: '© 2026 LIZETH RICO',
    linkedin: 'LinkedIn',

    // ── HOME ─────────────────────────────────────────────────────
    hi: 'hi!',
    iAm: "i'm lizeth.",
    profileCaption: 'lizeth rico — designer',

    role1Label: 'Creative',
    role1Item1: 'Mixed media',
    role1Item2: 'Motion graphics',
    role1Item3: 'ux/ui',

    role2Label: 'product designer',
    role2Item1: 'prd writing, scoping, user research',
    role2Item2: 'cross-functional team coordination',

    role3Label: 'design student',
    role3Item1: 'leveraging ai workflows in daily practice',
    role3Item2: 'vibe code',
    role3Item3: 'interdisciplinary experimentation',


    notableLabel: 'notable',
    stat1Value: 'DESIGN',
    stat1Label: 'for connecting people',
    stat2Value: 'ART',
    stat2Label: 'through feelings',
    stat3Value: 'STEM',
    stat3Label: 'technology to build',

    currentlyLabel: 'currently',
    current1: '⦿ studying Web3',
    current2: '⦿ eighth semester of digital design',

    separator: 'design · strategy · product · brand · ai · ux research · content · web3 ·',
    viewAllWork: 'View all work',

    // ── ABOUT ────────────────────────────────────────────────────
    aboutLabel: 'about',
    myStory: 'MY STORY',
    bio1: "hi! i'm lizeth, i'm a creative person. i like working at the intersection of brand, product, and people.",
    bio2: 'i believe that deeply understanding human needs is what makes anything worth building — whether through visual media, technology, or community. my mission is to inspire people to explore, create, & live boldly.',
    bio3: 'outside work, i love working out, running, traveling, and screen printing ●',
    bio4: "here's a bit of my life :)",

    cap1: 'portrait, 2024',
    cap2: 'coffee, 2023',
    cap3: 'on set, 2023',
    cap4: 'shopping, 2024',
    clickToShuffle: 'click to shuffle',

    experienceLabel: '[ studies ]',
    year2025: '2023 – Present',
    exp2025_1: 'Professional degree in Digital Design & Multimedia — Universidad Colegio Mayor de Cundinamarca',
    year2324: '2024',
    exp2324_1: 'Diploma in UX/UI Design — Universidad Nacional de Colombia',
    year2122: '2022',
    exp2122_1: 'Professional Technician in Data Processing — Universidad Kuepa',
    yearCourse: '2026',
    expCourse_1: 'UX/UI Course — Pieri Studio',

    skillsLabel: '[ tools & skills ]',
    contactResume: 'RESUME',
    contactLinkedin: 'LINKEDIN',

    // ── WORK ─────────────────────────────────────────────────────
    workTitle: 'Work',
    proj3Title: 'MOODY',               proj3Cat: 'App / Emotional Wellness',   proj3Tag1: 'UX/UI',          proj3Tag2: 'Research',      proj3Tag3: 'Branding',
    proj4Title: 'FORJA',               proj4Cat: 'Web Redesign',              proj4Tag1: 'UX/UI',          proj4Tag2: 'Research',      proj4Tag3: 'Redesign',
    proj5Title: 'BETTER CAMPUS',       proj5Cat: 'UX Research',                proj5Tag1: 'UX/UI',          proj5Tag2: 'Research',      proj5Tag3: 'Heuristic Analysis',

    viewProject: 'View project',
    backToWork: 'Back to work',
    prevProject: 'Prev',
    nextProject: 'Next',

    proj3Desc: "Moody started as a diploma project and I keep iterating on it as I learn more at university. It's an app for emotion tracking and emotional support. My role on the project was full ownership — I created it end to end.",
    proj3ExternalPrompt: 'Want to read more and try it?',
    proj3ExternalButton: 'Click here',
    proj4Desc: 'Forja was another diploma project — a full redesign that started with a heuristic evaluation of the existing site and carried through to a high-fidelity prototype.',
    proj4SideText: "The heuristic evaluation surfaced several visual and navigation inconsistencies — each page felt like it belonged to a different site. On the Customer Service page, I unified the visual hierarchy, simplified the FAQ accordion, and aligned the color palette with the rest of the site so the experience reads as one coherent brand from start to finish.",
    proj5Desc: "Better Campus was a heuristic analysis I did as part of a research group (Semillero) at Universidad Nacional (DIN'T). It's a student-to-student platform that helps you build your class schedule and connects with UNAL's academic system (SIA).\n\nMy role was the heuristic evaluation, reviewing the navigation flows, and testing the features. That work went to the BetterCampus team as feedback, and they implemented it. Afterwards, on the UI side, we worked as a team and used atomic design to implement a more comfortable style for the user.",
    proj5ExternalPrompt: 'Want to read more and try it?',
    proj5ExternalButton: 'Click here',

    // ── PLAY ─────────────────────────────────────────────────────
    playInstruction: 'drag some of my work <3',
    photo1Title: 'WORKSHOP POSTER',
    photo2Title: 'DIGITAL RETOUCH',
    photo3Title: 'PHOTO',
    photo4Title: 'PHOTOGRAPHY EVENT',
    photo5Title: 'COMMUNITY PHOTOGRAPHY',
    photo6Title: 'COLOR · SOCIAL MEDIA',
    playCap1: 'galapagos, 2024',
    playCap2: 'portrait, 2023',
    playCap3: 'workshop, 2024',
    playCap4: 'community, 2022',
    playCap5: 'creative, 2023',
    playCap6: 'collage, 2024',
  },

  es: {
    // ── NAV ──────────────────────────────────────────────────────
    work: 'Trabajo',
    play: 'Play',
    about: 'Sobre mí',
    resume: 'CV',

    // ── FOOTER ───────────────────────────────────────────────────
    footerCopy: '© 2026 LIZETH RICO',
    linkedin: 'LinkedIn',

    // ── HOME ─────────────────────────────────────────────────────
    hi: '¡hola!',
    iAm: 'soy lizeth.',
    profileCaption: 'lizeth rico — diseñadora',

    role1Label: 'Creativa',
    role1Item1: 'Multimedia',
    role1Item2: 'Motion graphics',
    role1Item3: 'Ux/Ui',

    role2Label: 'diseñadora de producto',
    role2Item1: 'prd, alcance, investigación de usuarios',
    role2Item2: 'coordinación de equipos cross-funcionales',

    role3Label: 'estudiante de diseño',
    role3Item1: 'flujos de trabajo con IA en práctica diaria',
    role3Item2: 'vibe code',
    role3Item3: 'experimentación interdisciplinaria',


    notableLabel: 'Mis pilares',
    stat1Value: 'DISEÑO',
    stat1Label: 'para conectar y comunicar',
    stat2Value: 'ARTE',
    stat2Label: 'para mostrar mis sentimientos',
    stat3Value: 'STEM',
    stat3Label: 'para construir',

    currentlyLabel: 'actualmente',
    current1: '⦿ estudiando Web3',
    current2: '⦿ Octavo semestre de diseño digital',

    separator: 'diseño · estrategia · producto · marca · ia · investigación ux · contenido · web3 ·',
    viewAllWork: 'Ver todo el trabajo',

    // ── ABOUT ────────────────────────────────────────────────────
    aboutLabel: 'sobre mí',
    myStory: 'MI HISTORIA',
    bio1: '¡hola! soy lizeth soy una persona creativa. Me gusta trabajar en la intersección de marca, producto y personas.',
    bio2: 'Me gusta comprender profundamente las necesidades humanas es lo que hace que algo valga la pena construir ya sea desde medios visuales, tecnología o comunidad. mi misión es inspirar a las personas a explorar, crear y vivir con valentía.',
    bio3: 'fuera del trabajo, me encanta el ejercicio, correr, viajar y hacer serigrafia ●',
    bio4: 'aquí un poco de mi vida :)',

    cap1: 'retrato, 2024',
    cap2: 'café, 2023',
    cap3: 'en set, 2023',
    cap4: 'de compras, 2024',
    clickToShuffle: 'dale clic para chismosear',

    experienceLabel: '[ estudios ]',
    year2025: '2023 - Actualmente',
    exp2025_1: 'Carrera profesional en Diseño Digital y Multimedia - Universidad Colegio Mayor de Cundinamarca',
    year2324: '2024',
    exp2324_1: 'Diplomado en Diseño Ux-Ui - Universidad Nacional De Colombia',
    year2122: '2022',
    exp2122_1: 'Técnico Profesional en Procesamiento de Datos - Universidad Kuepa',
    yearCourse: '2026',
    expCourse_1: 'Curso Ux / Ui - Pieri Studio',

    skillsLabel: '[ herramientas & habilidades ]',
    contactResume: 'CV',
    contactLinkedin: 'LINKEDIN',

    // ── WORK ─────────────────────────────────────────────────────
    workTitle: 'Trabajo',
    proj3Title: 'MOODY',                 proj3Cat: 'App / Bienestar Emocional', proj3Tag1: 'UX/UI',              proj3Tag2: 'Research',      proj3Tag3: 'Marca',
    proj4Title: 'FORJA',                 proj4Cat: 'Rediseño Web',              proj4Tag1: 'UX/UI',              proj4Tag2: 'Research',      proj4Tag3: 'Rediseño',
    proj5Title: 'BETTER CAMPUS',         proj5Cat: 'Investigación UX',          proj5Tag1: 'UX/UI',              proj5Tag2: 'Research',      proj5Tag3: 'Análisis Heurístico',

    viewProject: 'Ver proyecto',
    backToWork: 'Volver al trabajo',
    prevProject: 'Anterior',
    nextProject: 'Siguiente',

    proj3Desc: 'Moody fue un proyecto del diplomado que, mientras voy aprendiendo en la universidad, sigo iterando. Es una aplicación para el tracking de emociones y apoyo emocional. Mi rol en el proyecto fue la creación total de este.',
    proj3ExternalPrompt: '¿Quieres leer más y probarlo?',
    proj3ExternalButton: 'Click aquí',
    proj4Desc: 'Forja fue otro proyecto del diplomado: un rediseño completo que arrancó con una evaluación heurística del sitio existente y llegó hasta el desarrollo de un prototipo de alta fidelidad.',
    proj4SideText: 'La evaluación heurística reveló varias inconsistencias visuales y de navegación entre secciones cada página parecía pertenecer a un sitio distinto.',
    proj5Desc: "Better Campus fue un análisis heurístico realizado en el Semillero de la Universidad Nacional (DIN'T). Es una plataforma de estudiantes para estudiantes que brinda apoyo para armar el horario de clases y se vincula con el SIA de la UNAL.\n\nMi rol fue la evaluación heurística, la revisión de los flujos de navegación y el testeo de las funcionalidades. Ese trabajo se le enviaba como feedback al equipo de BetterCampus, y ellos lo implementaban. Después, en la parte de UI, trabajamos en equipo e implementamos, a través del diseño atómico, un estilo más cómodo para el usuario.",
    proj5ExternalPrompt: '¿Quieres leer más y probarlo?',
    proj5ExternalButton: 'Click aquí',

    // ── PLAY ─────────────────────────────────────────────────────
    playInstruction: 'arrastra algunos de mis trabajos <3',
    photo1Title: 'PÓSTER TALLER',
    photo2Title: 'RETOQUE DIGITAL',
    photo3Title: 'FOTOGRAFÍA',
    photo4Title: 'EVENTO FOTOGRÁFICO',
    photo5Title: 'COMUNIDAD FOTOGRÁFICA',
    photo6Title: 'COLOR · REDES SOCIALES',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const t = (key: string): string =>
    translations[language][key as keyof typeof translations.en] || key;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
