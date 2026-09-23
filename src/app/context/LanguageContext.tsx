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
    email: 'Email',
    linkedin: 'LinkedIn',

    // ── HOME ─────────────────────────────────────────────────────
    hi: 'hi!',
    iAm: "i'm lizeth.",
    profileCaption: 'lizeth rico — designer',

    role1Label: 'creative',
    role1Item1: 'Mixed media',
    role1Item2: 'Motion graphics',
    role1Item3: 'ui/ux for products + platforms',

    role2Label: 'product designer & strategist',
    role2Item1: 'prd writing, scoping, user research',
    role2Item2: 'cross-functional team coordination',

    role3Label: 'AI-design student',
    role3Item1: 'leveraging ai workflows in daily practice',
    role3Item2: 'vibe code (figma→claude→shipped)',
    role3Item3: 'interdisciplinary experimentation',

    role4Label: 'lifelong student',
    role4Item1: 'failing forward in public',
    role4Item2: 'design thinking meets technical execution',
    role4Item3: 'building things that actually matter',

    notableLabel: 'notable',
    stat1Value: 'DESIGN',
    stat1Label: 'for connecting people',
    stat2Value: 'ART',
    stat2Label: 'through feelings',
    stat3Value: 'STEM',
    stat3Label: 'technology to build',

    currentlyLabel: 'currently',
    current1: '⦿ studying Web3',
    current2: '⦿ seventh semester of digital design',

    separator: 'design · strategy · product · brand · ai · ux research · content · campaigns · web3 · 0→1',
    viewAllWork: 'View all work',

    // ── ABOUT ────────────────────────────────────────────────────
    aboutLabel: 'about',
    myStory: 'MY STORY',
    bio1: "hi! i'm lizeth — a creative content (D2C+) designer, builder, and strategist. i like working at the intersection of brand, product, and people. i've built a one-woman content studio, led brand strategy for web3 platforms with 200k+ users, designed campaigns with $250k+ in revenue, and shipped 0→1 products from idea to launch.",
    bio2: 'i believe that a deep understanding of human needs is what makes anything worth building — whether media, technology, or community. my mission is to inspire people to explore, create, & experience life boldly.',
    bio3: 'outside work, i love lifting, running, traveling, EDM music, deep conversations, & eating literally everything in sight!! ●',
    bio4: 'see a bit of my story below :)',

    cap1: 'galapagos, 2024',
    cap2: 'portrait, 2024',
    cap3: 'workshop, 2024',
    cap4: 'community, 2022',
    cap5: 'on set, 2023',
    cap6: 'generame idea, 2024',
    cap7: 'building in public',
    clickToShuffle: 'click to shuffle',

    experienceLabel: '[ experience ]',
    year2025: '2025',
    exp2025_1: 'interning @ seek by sara blakely ventures (finance, operations, marketing)',
    exp2025_2: 'studying UX/design — switched mains',
    exp2025_3: 'product design @ polymarket (internal marketing tool contract)',
    exp2025_4: 'started building an app for creators: Kairo',
    year2324: '2023–24',
    exp2324_1: 'built one-woman content studio — $250k in campaigns',
    exp2324_2: 'ui/ux for web3 products & platforms',
    exp2324_3: 'building in public w/ figma make',
    year2122: '2021–22',
    exp2122_1: 'led brand strategy for web3 platform (200k users)',
    exp2122_2: 'designed campaigns w/ 3M+ impressions',
    exp2122_3: 'co-led community & events production',

    skillsLabel: '[ tools & skills ]',
    contactEmail: 'EMAIL',
    contactResume: 'RESUME',
    contactLinkedin: 'LINKEDIN',

    // ── WORK ─────────────────────────────────────────────────────
    workTitle: 'Work',
    proj1Title: 'GENERAME IDEA',       proj1Cat: 'Workshop / Brand',           proj1Tag1: 'UI/UX',          proj1Tag2: 'Brand Strategy',
    proj2Title: 'PORTRAIT SERIES',     proj2Cat: 'Photography / Editorial',    proj2Tag1: 'Photography',    proj2Tag2: 'Editorial',
    proj3Title: 'MAKERSVILLE',         proj3Cat: 'Product Design',             proj3Tag1: 'Product',        proj3Tag2: 'Web3',
    proj4Title: 'COMMUNITY EVENT',     proj4Cat: 'Campaign / Social',          proj4Tag1: 'Campaign',       proj4Tag2: 'Social Media',
    proj5Title: 'CREATIVE EXPLORATION',proj5Cat: 'Experimental / Motion',      proj5Tag1: 'Experimental',   proj5Tag2: 'Motion',
    proj6Title: 'COLLAGE WORK',        proj6Cat: 'Art Direction',              proj6Tag1: 'Art Direction',  proj6Tag2: 'Visual',
    proj7Title: 'BRAND SYSTEM',        proj7Cat: 'Brand / Identity',           proj7Tag1: 'Branding',       proj7Tag2: 'Identity',

    viewProject: 'View project',
    backToWork: 'Back to work',
    prevProject: 'Prev',
    nextProject: 'Next',

    proj1Desc: "GENERAME IDEA started as a two-day brand-strategy workshop and grew into a live UI/UX generation tool. Teams would arrive with nothing but a rough idea — a name, a feeling, a scribbled sketch — and leave with a coherent visual identity: a moodboard, a type pairing, a color system, and a first pass at a UI, all decided and prototyped in the same session.\n\nMy role covered the full arc: designing the workshop structure and facilitation prompts, building the rapid-prototyping toolkit participants used live, and shaping the resulting brand guidelines so non-designers could keep the system consistent after the workshop ended. The biggest challenge was speed without sacrifice — compressing weeks of brand strategy into hours meant every exercise had to double as a real design decision, not just an icebreaker.\n\nThe format has since run with founders, student teams, and internal product squads, and the toolkit is still evolving based on what breaks (or clicks) in each new room.",
    proj1ExtraText: "PROCESS NOTES\n\nEach session opens with a 15-minute prompt round: three questions designed to surface a feeling before a format — what should someone feel in the first 3 seconds, what should they never feel, and what's the one word this has to earn. Everything downstream (palette, type, layout density) gets checked against those three answers instead of personal taste, which is what keeps a two-hour workshop from turning into bikeshedding.\n\nThe toolkit itself is a stripped-down Figma file with locked components — teams drag, don't draw — so a non-designer can produce something structurally sound in the time it takes to argue about a font.",
    proj2Desc: 'An editorial portrait series exploring light, texture, and expression — shot, directed, and retouched end to end for a personal photography study.',
    proj3Desc: 'Product design for a web3 platform: mapping the core user flows, defining the component system, and shipping a clean, trustworthy interface from 0 to 1.',
    proj4Desc: 'Campaign and social design for a community event — from key art to on-the-ground signage — built to travel across formats without losing its voice.',
    proj5Desc: 'A motion-led experimental study: loose sketches turned into short animated pieces exploring rhythm, color, and unexpected transitions.',
    proj6Desc: 'An art-direction collage project layering photography, texture, and type to build a visual language that feels handmade but intentional.',
    proj7Desc: 'A full brand identity system — logo, type, color, and usage guidelines — designed to hold up across web, print, and social touchpoints.',

    // ── PLAY ─────────────────────────────────────────────────────
    playInstruction: 'drag & drop · hover to reveal title',
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
    email: 'Correo',
    linkedin: 'LinkedIn',

    // ── HOME ─────────────────────────────────────────────────────
    hi: '¡hola!',
    iAm: 'soy lizeth.',
    profileCaption: 'lizeth rico — diseñadora',

    role1Label: 'creativa',
    role1Item1: 'Multimedia',
    role1Item2: 'Motion graphics',
    role1Item3: 'ui/ux para productos + plataformas',

    role2Label: 'diseñadora de producto & estratega',
    role2Item1: 'prd, alcance, investigación de usuarios',
    role2Item2: 'coordinación de equipos cross-funcionales',

    role3Label: 'estudiante de diseño + IA',
    role3Item1: 'flujos de trabajo con IA en práctica diaria',
    role3Item2: 'vibe code (figma→claude→shipped)',
    role3Item3: 'experimentación interdisciplinaria',

    role4Label: 'estudiante de por vida',
    role4Item1: 'aprendiendo en público',
    role4Item2: 'design thinking + ejecución técnica',
    role4Item3: 'construyendo cosas que realmente importan',

    notableLabel: 'destacado',
    stat1Value: 'DISEÑO',
    stat1Label: 'para conectar personas',
    stat2Value: 'ARTE',
    stat2Label: 'a través de sentimientos',
    stat3Value: 'STEM',
    stat3Label: 'tecnología para construir',

    currentlyLabel: 'actualmente',
    current1: '⦿ estudiando Web3',
    current2: '⦿ séptimo semestre de diseño digital',

    separator: 'diseño · estrategia · producto · marca · ia · investigación ux · contenido · campañas · web3 · 0→1',
    viewAllWork: 'Ver todo el trabajo',

    // ── ABOUT ────────────────────────────────────────────────────
    aboutLabel: 'sobre mí',
    myStory: 'MI HISTORIA',
    bio1: '¡hola! soy lizeth — diseñadora creativa de contenido (D2C+), constructora y estratega. me gusta trabajar en la intersección de marca, producto y personas. construí un estudio de contenido unipersonal, lideré la estrategia de marca para plataformas web3 con +200k usuarios, diseñé campañas con +$250k en ingresos y lancé productos 0→1 de la idea al mercado.',
    bio2: 'creo que entender profundamente las necesidades humanas es lo que hace que algo valga la pena construir — ya sea medios, tecnología o comunidad. mi misión es inspirar a las personas a explorar, crear y vivir con valentía.',
    bio3: 'fuera del trabajo, me encanta el ejercicio, correr, viajar, la música EDM, las conversaciones profundas y comer literalmente todo lo que encuentro!! ●',
    bio4: 'aquí un poco de mi historia :)',

    cap1: 'galápagos, 2024',
    cap2: 'retrato, 2024',
    cap3: 'taller, 2024',
    cap4: 'comunidad, 2022',
    cap5: 'en set, 2023',
    cap6: 'generame idea, 2024',
    cap7: 'construyendo en público',
    clickToShuffle: 'clic para barajar',

    experienceLabel: '[ experiencia ]',
    year2025: '2025',
    exp2025_1: 'pasantía @ seek by sara blakely ventures (finanzas, operaciones, marketing)',
    exp2025_2: 'estudiando UX/diseño — cambié de énfasis',
    exp2025_3: 'diseño de producto @ polymarket (contrato herramienta de marketing interno)',
    exp2025_4: 'comencé a construir una app para creadores: Kairo',
    year2324: '2023–24',
    exp2324_1: 'construí estudio de contenido unipersonal — $250k en campañas',
    exp2324_2: 'ui/ux para productos & plataformas web3',
    exp2324_3: 'construyendo en público con figma make',
    year2122: '2021–22',
    exp2122_1: 'lideré estrategia de marca para plataforma web3 (200k usuarios)',
    exp2122_2: 'diseñé campañas con +3M impresiones',
    exp2122_3: 'co-lideré comunidad y producción de eventos',

    skillsLabel: '[ herramientas & habilidades ]',
    contactEmail: 'EMAIL',
    contactResume: 'CV',
    contactLinkedin: 'LINKEDIN',

    // ── WORK ─────────────────────────────────────────────────────
    workTitle: 'Trabajo',
    proj1Title: 'GENERAME IDEA',        proj1Cat: 'Taller / Marca',            proj1Tag1: 'UI/UX',              proj1Tag2: 'Estrategia de Marca',
    proj2Title: 'SERIE DE RETRATOS',    proj2Cat: 'Fotografía / Editorial',    proj2Tag1: 'Fotografía',         proj2Tag2: 'Editorial',
    proj3Title: 'MAKERSVILLE',          proj3Cat: 'Diseño de Producto',        proj3Tag1: 'Producto',           proj3Tag2: 'Web3',
    proj4Title: 'EVENTO COMUNITARIO',   proj4Cat: 'Campaña / Redes',           proj4Tag1: 'Campaña',            proj4Tag2: 'Redes Sociales',
    proj5Title: 'EXPLORACIÓN CREATIVA', proj5Cat: 'Experimental / Motion',     proj5Tag1: 'Experimental',       proj5Tag2: 'Motion',
    proj6Title: 'COLLAGE',              proj6Cat: 'Dirección de Arte',         proj6Tag1: 'Dirección de Arte',  proj6Tag2: 'Visual',
    proj7Title: 'SISTEMA DE MARCA',     proj7Cat: 'Marca / Identidad',         proj7Tag1: 'Branding',           proj7Tag2: 'Identidad',

    viewProject: 'Ver proyecto',
    backToWork: 'Volver al trabajo',
    prevProject: 'Anterior',
    nextProject: 'Siguiente',

    proj1Desc: "GENERAME IDEA nació como un taller de estrategia de marca de dos días y creció hasta convertirse en una herramienta de generación de UI/UX en vivo. Los equipos llegaban solo con una idea vaga — un nombre, una sensación, un boceto en una servilleta — y salían con una identidad visual coherente: moodboard, pareja tipográfica, sistema de color y un primer acercamiento a la interfaz, todo decidido y prototipado en la misma sesión.\n\nMi rol cubrió todo el proceso: diseñar la estructura del taller y las dinámicas de facilitación, construir el kit de prototipado rápido que los participantes usaban en vivo, y dar forma a los lineamientos de marca resultantes para que personas sin experiencia en diseño pudieran mantener el sistema consistente después del taller. El mayor reto fue la velocidad sin sacrificar calidad — comprimir semanas de estrategia de marca en horas significaba que cada ejercicio debía funcionar como una decisión de diseño real, no solo como un rompehielos.\n\nEl formato se ha repetido con fundadores, equipos de estudiantes y squads internos de producto, y el kit sigue evolucionando según lo que se rompe (o funciona) en cada nueva sala.",
    proj1ExtraText: "NOTAS DEL PROCESO\n\nCada sesión arranca con una ronda de 15 minutos: tres preguntas diseñadas para sacar a la luz una sensación antes que un formato — qué debería sentir alguien en los primeros 3 segundos, qué nunca debería sentir, y cuál es la única palabra que esto tiene que ganarse. Todo lo que viene después (paleta, tipografía, densidad de layout) se valida contra esas tres respuestas en vez del gusto personal, y eso es lo que evita que un taller de dos horas se convierta en discutir por discutir.\n\nEl kit en sí es un archivo de Figma reducido con componentes bloqueados — los equipos arrastran, no dibujan — así que alguien sin experiencia en diseño puede producir algo estructuralmente sólido en el tiempo que tomaría discutir sobre una tipografía.",
    proj2Desc: 'Una serie de retratos editoriales explorando luz, textura y expresión — dirigida, fotografiada y retocada de principio a fin como estudio personal.',
    proj3Desc: 'Diseño de producto para una plataforma web3: mapeo de los flujos clave, definición del sistema de componentes y lanzamiento de una interfaz limpia y confiable de 0 a 1.',
    proj4Desc: 'Diseño de campaña y redes para un evento comunitario — desde la pieza clave hasta la señalización en el lugar — pensado para viajar entre formatos sin perder su voz.',
    proj5Desc: 'Una exploración experimental basada en motion: bocetos sueltos convertidos en piezas animadas cortas que exploran ritmo, color y transiciones inesperadas.',
    proj6Desc: 'Un proyecto de dirección de arte en collage que combina fotografía, textura y tipografía para construir un lenguaje visual artesanal pero intencional.',
    proj7Desc: 'Un sistema de identidad de marca completo — logo, tipografía, color y lineamientos de uso — diseñado para sostenerse en web, impreso y redes sociales.',

    // ── PLAY ─────────────────────────────────────────────────────
    playInstruction: 'arrastra · hover para revelar título',
    photo1Title: 'PÓSTER TALLER',
    photo2Title: 'RETOQUE DIGITAL',
    photo3Title: 'FOTOGRAFÍA',
    photo4Title: 'EVENTO FOTOGRÁFICO',
    photo5Title: 'COMUNIDAD FOTOGRÁFICA',
    photo6Title: 'COLOR · REDES SOCIALES',
    playCap1: 'galápagos, 2024',
    playCap2: 'retrato, 2023',
    playCap3: 'taller, 2024',
    playCap4: 'comunidad, 2022',
    playCap5: 'creativa, 2023',
    playCap6: 'collage, 2024',
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
