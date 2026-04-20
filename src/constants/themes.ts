export type ThemeColors = {
  bg: string;
  navBg: string;
  text: string;
  accent: string;
  cardBg: string;
  heroBg: string;
  btnText: string;
};

export const THEME_COLORS: Record<string, ThemeColors> = {
  // ── Fashion-specific templates ──────────────────────────────────────────
  aura:      { bg:'#111111', navBg:'#ffffff',  text:'#ffffff',  accent:'#ffffff', cardBg:'#1a1a1a', heroBg:'#111111',  btnText:'#111111' },
  elegancia: { bg:'#0d1e30', navBg:'#0d1e30',  text:'#d4bfa0',  accent:'#b89060', cardBg:'#0a1828', heroBg:'#0d1e30',  btnText:'#ffffff' },
  simetria:  { bg:'#ffffff', navBg:'#ffffff',  text:'#1a1a1a',  accent:'#1a1a1a', cardBg:'#f5f0e8', heroBg:'#ffffff',  btnText:'#1a1a1a' },
  // ── Generic themes ──────────────────────────────────────────────────────
  elegance: { bg:'#0f0f0b', navBg:'#0f0f0b',  text:'#f5f0e8', accent:'#d4af37', cardBg:'#1a1a15', heroBg:'#0f0f0b',  btnText:'#0f0f0b' },
  minimal:  { bg:'#ffffff', navBg:'#ffffff',  text:'#111111', accent:'#0066ff', cardBg:'#f3f4f6', heroBg:'#f9fafb',  btnText:'#ffffff' },
  bold:     { bg:'#18181b', navBg:'#111111',  text:'#fafafa',  accent:'#f59e0b', cardBg:'#27272a', heroBg:'#27272a',  btnText:'#18181b' },
  nordic:   { bg:'#fdf8f3', navBg:'#fdf8f3',  text:'#3d3530', accent:'#c9a688', cardBg:'#ede4db', heroBg:'#f5ede4',  btnText:'#ffffff' },
  jewel:    { bg:'#0f0a1e', navBg:'#0f0a1e',  text:'#e2cfff', accent:'#9f5ef5', cardBg:'#1a0f35', heroBg:'#1a0f35',  btnText:'#ffffff' },
  fresh:    { bg:'#ffffff', navBg:'#ffffff',  text:'#14532d', accent:'#16a34a', cardBg:'#f0fdf4', heroBg:'#166534',  btnText:'#14532d' },
  rose:     { bg:'#130808', navBg:'#130808',  text:'#fde8e8', accent:'#e8a0a0', cardBg:'#2d1020', heroBg:'#130808',  btnText:'#ffffff' },
  urban:    { bg:'#0d0d0d', navBg:'#0d0d0d',  text:'#ffffff',  accent:'#ff3d00', cardBg:'#1a1a1a', heroBg:'#0d0d0d',  btnText:'#ffffff' },
  sakura:   { bg:'#fff9fb', navBg:'#fff9fb',  text:'#4a1040', accent:'#e91e8c', cardBg:'#fce4ec', heroBg:'#fce4ec',  btnText:'#ffffff' },
  obsidian: { bg:'#000000', navBg:'#000000',  text:'#ffffff',  accent:'#ffffff', cardBg:'#0f0f0f', heroBg:'#000000',  btnText:'#000000' },
  tropical: { bg:'#f0fffe', navBg:'#f0fffe',  text:'#0a4a4a', accent:'#00e5ba', cardBg:'#ccf5ef', heroBg:'#065050',  btnText:'#053535' },
  sunset:   { bg:'#100500', navBg:'#100500',  text:'#ffd480', accent:'#ff6b35', cardBg:'#2d1000', heroBg:'#100500',  btnText:'#ffffff' },
  sonic:    { bg:'#ffffff', navBg:'#ffffff',  text:'#0a0a0a', accent:'#0a0a0a', cardBg:'#f3f4f6', heroBg:'#f5f6f8',  btnText:'#ffffff' },
  ritual:   { bg:'#fffdf9', navBg:'#fffdf9',  text:'#2a1f0a', accent:'#9a7030', cardBg:'#f5ead8', heroBg:'#f5ead8',  btnText:'#faf4ea' },
  vogue:    { bg:'#ffffff', navBg:'#ffffff',  text:'#1a1a1a', accent:'#4a2030', cardBg:'#f5f5f5', heroBg:'#f7f7f7',  btnText:'#ffffff' },
  pulse:    { bg:'#faf9f7', navBg:'#ffffff',  text:'#2a1020', accent:'#4a2030', cardBg:'#f0ece8', heroBg:'#4a2030',  btnText:'#3d1a28' },
};

// Fashion-specific template definitions (shown first for fashion industry)
export const FASHION_TEMPLATE_DEFS = [
  { id:'aura',      name:'Aura',      ref:'Athora',   desc:'Activewear · Dark · Sport',          tags:['Moda','Sport'],   accentColor:'#fff',    bgColor:'#111',    navColor:'#fff' },
  { id:'elegancia', name:'Elegancia', ref:'Allure',   desc:'Luxury fashion · Navy · Serif',      tags:['Moda','Lujo'],    accentColor:'#b89060', bgColor:'#0d1e30', navColor:'#0d1e30' },
  { id:'simetria',  name:'Simetría',  ref:'Symmetry', desc:'Casual lifestyle · Clean · White',   tags:['Moda','Casual'],  accentColor:'#1a1a1a', bgColor:'#fff',    navColor:'#fff' },
];

export const THEME_DEFS = [
  { id:'elegance', name:'Elegance',      desc:'Dark gold · Serif · Lujo',         tags:['Joyería','Lujo'],     badge:'popular' },
  { id:'minimal',  name:'Minimal Pro',   desc:'Blanco · Azul · Minimalista',       tags:['Tech','Clean'],       badge:'' },
  { id:'bold',     name:'Bold Shop',     desc:'Dark · Ámbar · Fuerte',            tags:['Streetwear','Bold'],  badge:'' },
  { id:'nordic',   name:'Nordic',        desc:'Crema · Arena · Natural',           tags:['Hogar','Lifestyle'],  badge:'' },
  { id:'jewel',    name:'Jewel Box',     desc:'Púrpura · Coral · Premium',        tags:['Moda','Premium'],     badge:'' },
  { id:'fresh',    name:'Fresh & Clean', desc:'Verde · Blanco · Orgánico',        tags:['Eco','Salud'],        badge:'' },
  { id:'rose',     name:'Rose Gold',     desc:'Rosa · Dorado · Femenino',         tags:['Beauty','Femenino'],  badge:'' },
  { id:'urban',    name:'Urban Street',  desc:'Negro · Rojo · Urban',             tags:['Streetwear','Urban'], badge:'' },
  { id:'sakura',   name:'Sakura',        desc:'Rosa pastel · Kawaii · Gift',       tags:['K-Beauty','Gift'],    badge:'new' },
  { id:'obsidian', name:'Obsidian',      desc:'Negro puro · Ultra minimalista',    tags:['Lujo'],               badge:'popular' },
  { id:'tropical', name:'Tropical',      desc:'Verde agua · Verano · Fresco',      tags:['Playa','Sport'],      badge:'new' },
  { id:'sunset',   name:'Sunset',        desc:'Naranja · Dorado · Cálido',        tags:['Lifestyle','Hogar'],  badge:'' },
  { id:'sonic',    name:'Sonic',         desc:'Blanco puro · Tech · Apple style',  tags:['Tech','Gadgets'],     badge:'new' },
  { id:'ritual',   name:'Ritual',        desc:'Crema · Dorado · Skincare luxury',  tags:['Beauty','Skincare'],  badge:'new' },
  { id:'vogue',    name:'Vogue',         desc:'Blanco · Vino · Fashion forward',   tags:['Moda','Activewear'],  badge:'new' },
  { id:'pulse',    name:'Pulse',         desc:'Vino · Crema · Sport premium',      tags:['Sport','Athleisure'], badge:'new' },
];

export const THEME_NAV: Record<string, { logo: string; links: string[]; icons: string[] }> = {
  aura:      { logo:'A',        links:['Shop','Collections','About'],        icons:['🔍','🛒'] },
  elegancia: { logo:'ALLURE',   links:['Collections','Editorial','About'],   icons:['♡','🛒'] },
  simetria:  { logo:'SYMMETRY', links:['Shop','Collections','Sale'],         icons:['🔍','🛒'] },
  elegance: { logo:'ELEGANCE', links:['Colección','Editorial','About'],  icons:['♡','🛒'] },
  minimal:  { logo:'MINIMAL',  links:['Shop','Collections','Blog'],      icons:['🔍','🛒'] },
  bold:     { logo:'BOLD',     links:['SHOP','DROP','COLLAB'],           icons:['🔍','🛒'] },
  nordic:   { logo:'NORDIC',   links:['Tienda','Lookbook','Story'],      icons:['♡','🛒'] },
  jewel:    { logo:'JEWEL BOX',links:['Collection','About','Press'],     icons:['♡','🛒'] },
  fresh:    { logo:'FRESH CO', links:['Shop','Story','Blog'],            icons:['🔍','🛒'] },
  rose:     { logo:'ROSÉ',     links:['Shop','Beauty','Gift'],           icons:['♡','🛒'] },
  urban:    { logo:'URBAN',    links:['SHOP','DROPS','COLLAB'],          icons:['🔍','🛒'] },
  sakura:   { logo:'SAKURA',   links:['Shop','Gift','Blog'],             icons:['♡','🛒'] },
  obsidian: { logo:'OBSIDIAN', links:['SHOP','ABOUT','PRESS'],           icons:['🔍','🛒'] },
  tropical: { logo:'TROPICAL', links:['Tienda','Lookbook','Blog'],       icons:['🔍','🛒'] },
  sunset:   { logo:'SUNSET',   links:['Colección','Story','Gift'],       icons:['♡','🛒'] },
  sonic:    { logo:'SONIC',    links:['Shop','Collections','Compare'],   icons:['🔍','🛒'] },
  ritual:   { logo:'RITUAL',   links:['Shop','Rituals','About'],         icons:['♡','🛒'] },
  vogue:    { logo:'VOGUE',    links:['Shop','New In','Sale'],           icons:['🔍','🛒'] },
  pulse:    { logo:'PULSE',    links:['Shop','Collections','Blog'],      icons:['🔍','🛒'] },
};

// CSS gradient previews for each theme
export const THEME_PREVIEW_STYLES: Record<string, { bg: string; accent: string; text: string }> = {
  aura:      { bg: '#111111',  accent: '#ffffff', text: '#ffffff' },
  elegancia: { bg: '#0d1e30',  accent: '#b89060', text: '#d4bfa0' },
  simetria:  { bg: '#f5f0e8',  accent: '#1a1a1a', text: '#1a1a1a' },
  elegance: { bg: '#1a1a10',  accent: '#d4af37', text: '#f5f0e8' },
  minimal:  { bg: '#f8f9fa',  accent: '#2196f3', text: '#111111' },
  bold:     { bg: '#1a1208',  accent: '#f59e0b', text: '#fff8f0' },
  nordic:   { bg: '#fdf8f3',  accent: '#c9a688', text: '#3d3530' },
  jewel:    { bg: '#1a0f35',  accent: '#9f5ef5', text: '#ede7f6' },
  fresh:    { bg: '#f0fdf4',  accent: '#52b788', text: '#1b4332' },
  rose:     { bg: '#fff5f7',  accent: '#e91e8c', text: '#4a1040' },
  urban:    { bg: '#111111',  accent: '#e53935', text: '#ffffff' },
  sakura:   { bg: '#fff0f5',  accent: '#f48fb1', text: '#6d1a3a' },
  obsidian: { bg: '#000000',  accent: '#333333', text: '#ffffff' },
  tropical: { bg: '#e0fdf4',  accent: '#00e5ba', text: '#0a2e2e' },
  sunset:   { bg: '#fff3e0',  accent: '#ff6b35', text: '#3d1a00' },
  sonic:    { bg: '#ffffff',  accent: '#1565c0', text: '#050a20' },
  ritual:   { bg: '#fdf5e0',  accent: '#c8a951', text: '#2d2510' },
  vogue:    { bg: '#fafafa',  accent: '#7b1f3a', text: '#1a0010' },
  pulse:    { bg: '#f5f0e8',  accent: '#7b1f3a', text: '#1a0010' },
};
