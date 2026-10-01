import type { AwardDef, GameState } from "./types";

export const AWARD_DEFS: AwardDef[] = [
  {
    id: "nobel_eco",
    category: "dificil",
    title: "Premio Nobel de Economía",
    subtitle:
      "La Real Academia de Ciencias de Suecia distingue un programa de estabilización sostenido, con inflación contenida y crecimiento visible.",
    image: "/art/medal-sun.jpg",
    effects: { prestige: 18, image: 16, economy: 4 },
  },
  {
    id: "nobel_paz",
    category: "dificil",
    title: "Premio Nobel de la Paz",
    subtitle:
      "El Comité Nobel de Oslo premia la mediación regional y la negativa a resolver límites con sangre.",
    image: "/art/medal-peace.jpg",
    effects: { prestige: 18, image: 16, people: 6 },
  },
  {
    id: "gates",
    category: "medio",
    title: "Premio de Sostenibilidad y Desarrollo",
    subtitle:
      "La Fundación Gates destaca un plan sanitario y productivo con inclusión medible.",
    image: "/art/medal-gates.jpg",
    effects: { prestige: 8, economy: 6, people: 6 },
  },
  {
    id: "un_lead",
    category: "medio",
    title: "Liderazgo Global",
    subtitle:
      "Naciones Unidas reconoce una presidencia activa en foros multilaterales y misiones de paz.",
    image: "/art/medal-un.jpg",
    effects: { prestige: 10, image: 8 },
  },
  {
    id: "hayek",
    category: "medio",
    title: "Medalla Hayek",
    subtitle:
      "La Sociedad Mont Pelerin premia la defensa consecuente del libre mercado y la convertibilidad de las ideas.",
    image: "/art/medal-hayek.jpg",
    effects: { prestige: 8, economy: 8, inflation: -6 },
  },
  {
    id: "fifa_living",
    category: "medio",
    title: "Living Football Award",
    subtitle:
      "La FIFA distingue el impulso a la fiesta mundialista y al fútbol como tregua civil.",
    image: "/art/medal-fifa.jpg",
    effects: { prestige: 6, people: 10 },
  },
  {
    id: "honoris",
    category: "medio",
    title: "Doctorado Honoris Causa",
    subtitle:
      "La universidad pública otorga el grado por la defensa del presupuesto educativo y la ciencia.",
    image: "/art/medal-academic.jpg",
    effects: { prestige: 8, people: 4, image: 4 },
  },
  {
    id: "reagan",
    category: "medio",
    title: "Premio al Legado de Ronald Reagan",
    subtitle:
      "Un instituto de Washington celebra la alineación sistemática con el libre mercado y Estados Unidos.",
    image: "/art/medal-hayek.jpg",
    effects: { prestige: 8, image: 8, economy: 4 },
  },
  {
    id: "libertad",
    category: "medio",
    title: "Orden de la Libertad",
    subtitle:
      "Kiev otorga la condecoración por tropas o ayuda humanitaria enviada a Ucrania.",
    image: "/art/medal-peace.jpg",
    effects: { prestige: 10, image: 8 },
  },
  {
    id: "vino_italia",
    category: "bajo",
    title: "Vinos de la República Italiana",
    subtitle: "Roma envía un obsequio de cortesía por afianzar lazos migratorios y comerciales.",
    image: "/art/souvenir.jpg",
    effects: { prestige: 3, image: 2 },
  },
  {
    id: "cafe_brasil",
    category: "bajo",
    title: "Café del Itamaraty",
    subtitle: "Brasilia retribuye una cumbre bilateral con un presente de Estado.",
    image: "/art/souvenir.jpg",
    effects: { prestige: 3, image: 2 },
  },
  {
    id: "pin_eeuu",
    category: "bajo",
    title: "Pin de la Casa Blanca",
    subtitle: "Un recuerdo menor de cortesía tras una visita de trabajo a Washington.",
    image: "/art/souvenir.jpg",
    effects: { prestige: 2, image: 3 },
  },
  {
    id: "rosario_vaticano",
    category: "bajo",
    title: "Presente de la Santa Sede",
    subtitle: "El nuncio entrega un obsequio papal por la audiencia en Roma.",
    image: "/art/souvenir.jpg",
    effects: { prestige: 4, people: 2 },
  },
  {
    id: "cobre_chile",
    category: "bajo",
    title: "Cobre y vino chileno",
    subtitle: "Santiago agradece una mesa de límites sin tambores de guerra.",
    image: "/art/souvenir.jpg",
    effects: { prestige: 3, image: 2 },
  },
  {
    id: "mate_sur",
    category: "bajo",
    title: "Mate de las provincias",
    subtitle: "Los gobernadores del sur envían un presente de cortesía estatal.",
    image: "/art/souvenir.jpg",
    effects: { prestige: 2, people: 2 },
  },
];

export const AWARD_MAP = Object.fromEntries(AWARD_DEFS.map((a) => [a.id, a]));

export function hasAward(state: GameState, id: string) {
  return state.awards.some((a) => a.id === id);
}

export function detectAwards(state: GameState): string[] {
  const found: string[] = [];
  const s = state.stats;
  const f = new Set(state.flags);
  const years = state.mandateYear;
  const id = state.ideology;

  const add = (key: string, ok: boolean) => {
    if (ok && !hasAward(state, key) && !found.includes(key)) found.push(key);
  };

  add(
    "nobel_eco",
    years >= 6 &&
      s.economy >= 72 &&
      s.inflation <= 22 &&
      s.prestige >= 58 &&
      id.market >= 3,
  );
  add(
    "nobel_paz",
    f.has("beagle_peace") &&
      s.image >= 62 &&
      !f.has("malvinas_war") &&
      id.rights >= 2 &&
      years >= 4,
  );
  add("gates", f.has("health_plan") && s.people >= 58 && years >= 4);
  add("un_lead", f.has("un_active") && s.image >= 55 && s.prestige >= 55);
  add("hayek", id.market >= 4 && f.has("convertibility") && s.inflation <= 30);
  add("fifa_living", f.has("worldcup_embrace") && s.people >= 50);
  add("honoris", f.has("education_push") && s.prestige >= 50);
  add("reagan", id.market >= 3 && id.washington >= 3 && f.has("align_us"));
  add("libertad", f.has("ukraine_aid"));
  return found;
}
