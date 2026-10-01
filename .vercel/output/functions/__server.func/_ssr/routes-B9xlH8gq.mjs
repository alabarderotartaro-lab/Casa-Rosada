import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TrendingUp, c as Lock, d as Briefcase, f as Award, l as Landmark, n as Wallet, o as Shield, r as Users, s as Scale, t as X, u as Globe } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { a as CartesianGrid, c as Legend, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B9xlH8gq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AWARD_MAP = Object.fromEntries([
	{
		id: "nobel_eco",
		category: "dificil",
		title: "Premio Nobel de Economía",
		subtitle: "La Real Academia de Ciencias de Suecia distingue un programa de estabilización sostenido, con inflación contenida y crecimiento visible.",
		image: "/art/medal-sun.jpg",
		effects: {
			prestige: 18,
			image: 16,
			economy: 4
		}
	},
	{
		id: "nobel_paz",
		category: "dificil",
		title: "Premio Nobel de la Paz",
		subtitle: "El Comité Nobel de Oslo premia la mediación regional y la negativa a resolver límites con sangre.",
		image: "/art/medal-peace.jpg",
		effects: {
			prestige: 18,
			image: 16,
			people: 6
		}
	},
	{
		id: "gates",
		category: "medio",
		title: "Premio de Sostenibilidad y Desarrollo",
		subtitle: "La Fundación Gates destaca un plan sanitario y productivo con inclusión medible.",
		image: "/art/medal-gates.jpg",
		effects: {
			prestige: 8,
			economy: 6,
			people: 6
		}
	},
	{
		id: "un_lead",
		category: "medio",
		title: "Liderazgo Global",
		subtitle: "Naciones Unidas reconoce una presidencia activa en foros multilaterales y misiones de paz.",
		image: "/art/medal-un.jpg",
		effects: {
			prestige: 10,
			image: 8
		}
	},
	{
		id: "hayek",
		category: "medio",
		title: "Medalla Hayek",
		subtitle: "La Sociedad Mont Pelerin premia la defensa consecuente del libre mercado y la convertibilidad de las ideas.",
		image: "/art/medal-hayek.jpg",
		effects: {
			prestige: 8,
			economy: 8,
			inflation: -6
		}
	},
	{
		id: "fifa_living",
		category: "medio",
		title: "Living Football Award",
		subtitle: "La FIFA distingue el impulso a la fiesta mundialista y al fútbol como tregua civil.",
		image: "/art/medal-fifa.jpg",
		effects: {
			prestige: 6,
			people: 10
		}
	},
	{
		id: "honoris",
		category: "medio",
		title: "Doctorado Honoris Causa",
		subtitle: "La universidad pública otorga el grado por la defensa del presupuesto educativo y la ciencia.",
		image: "/art/medal-academic.jpg",
		effects: {
			prestige: 8,
			people: 4,
			image: 4
		}
	},
	{
		id: "reagan",
		category: "medio",
		title: "Premio al Legado de Ronald Reagan",
		subtitle: "Un instituto de Washington celebra la alineación sistemática con el libre mercado y Estados Unidos.",
		image: "/art/medal-hayek.jpg",
		effects: {
			prestige: 8,
			image: 8,
			economy: 4
		}
	},
	{
		id: "libertad",
		category: "medio",
		title: "Orden de la Libertad",
		subtitle: "Kiev otorga la condecoración por tropas o ayuda humanitaria enviada a Ucrania.",
		image: "/art/medal-peace.jpg",
		effects: {
			prestige: 10,
			image: 8
		}
	},
	{
		id: "vino_italia",
		category: "bajo",
		title: "Vinos de la República Italiana",
		subtitle: "Roma envía un obsequio de cortesía por afianzar lazos migratorios y comerciales.",
		image: "/art/souvenir.jpg",
		effects: {
			prestige: 3,
			image: 2
		}
	},
	{
		id: "cafe_brasil",
		category: "bajo",
		title: "Café del Itamaraty",
		subtitle: "Brasilia retribuye una cumbre bilateral con un presente de Estado.",
		image: "/art/souvenir.jpg",
		effects: {
			prestige: 3,
			image: 2
		}
	},
	{
		id: "pin_eeuu",
		category: "bajo",
		title: "Pin de la Casa Blanca",
		subtitle: "Un recuerdo menor de cortesía tras una visita de trabajo a Washington.",
		image: "/art/souvenir.jpg",
		effects: {
			prestige: 2,
			image: 3
		}
	},
	{
		id: "rosario_vaticano",
		category: "bajo",
		title: "Presente de la Santa Sede",
		subtitle: "El nuncio entrega un obsequio papal por la audiencia en Roma.",
		image: "/art/souvenir.jpg",
		effects: {
			prestige: 4,
			people: 2
		}
	},
	{
		id: "cobre_chile",
		category: "bajo",
		title: "Cobre y vino chileno",
		subtitle: "Santiago agradece una mesa de límites sin tambores de guerra.",
		image: "/art/souvenir.jpg",
		effects: {
			prestige: 3,
			image: 2
		}
	},
	{
		id: "mate_sur",
		category: "bajo",
		title: "Mate de las provincias",
		subtitle: "Los gobernadores del sur envían un presente de cortesía estatal.",
		image: "/art/souvenir.jpg",
		effects: {
			prestige: 2,
			people: 2
		}
	}
].map((a) => [a.id, a]));
function hasAward(state, id) {
	return state.awards.some((a) => a.id === id);
}
function detectAwards(state) {
	const found = [];
	const s = state.stats;
	const f = new Set(state.flags);
	const years = state.mandateYear;
	const id = state.ideology;
	const add = (key, ok) => {
		if (ok && !hasAward(state, key) && !found.includes(key)) found.push(key);
	};
	add("nobel_eco", years >= 6 && s.economy >= 72 && s.inflation <= 22 && s.prestige >= 58 && id.market >= 3);
	add("nobel_paz", f.has("beagle_peace") && s.image >= 62 && !f.has("malvinas_war") && id.rights >= 2 && years >= 4);
	add("gates", f.has("health_plan") && s.people >= 58 && years >= 4);
	add("un_lead", f.has("un_active") && s.image >= 55 && s.prestige >= 55);
	add("hayek", id.market >= 4 && f.has("convertibility") && s.inflation <= 30);
	add("fifa_living", f.has("worldcup_embrace") && s.people >= 50);
	add("honoris", f.has("education_push") && s.prestige >= 50);
	add("reagan", id.market >= 3 && id.washington >= 3 && f.has("align_us"));
	add("libertad", f.has("ukraine_aid"));
	return found;
}
var RUN_KEY = "el-mandato-run-v2";
var LEGACY_KEY = "el-mandato-legacy-v2";
var START_MONEY = 24e5;
var STAT_LABEL = {
	economy: "Economía",
	people: "Pueblo",
	forces: "Fuerzas",
	corruption: "Corrupción",
	prestige: "Prestigio",
	inflation: "Inflación",
	image: "Imagen del país"
};
var STAT_HINT = {
	economy: "Riqueza del pueblo y capacidad productiva.",
	people: "Felicidad. En el piso, estalla la revuelta.",
	forces: "Lealtad militar. Baja, hay inseguridad o invasión.",
	corruption: "Si llega a techo, el Estado se disuelve.",
	prestige: "Peso diplomático y acceso a crédito.",
	inflation: "El asesino silencioso: encarece todo.",
	image: "Percepción exterior. Una dictadura la quiebra."
};
var RANKS = [
	{
		id: "odiado",
		min: 0,
		label: "Odiado"
	},
	{
		id: "querido",
		min: 18,
		label: "Querido"
	},
	{
		id: "amado",
		min: 38,
		label: "Amado"
	},
	{
		id: "idolo",
		min: 58,
		label: "Ídolo"
	},
	{
		id: "absoluto",
		min: 76,
		label: "Líder Absoluto"
	},
	{
		id: "procer",
		min: 90,
		label: "Prócer"
	}
];
var ERAS = {
	independencia: {
		id: "independencia",
		label: "Independencia",
		span: "1816 — 1945",
		blurb: "Nacer como país, cruzar los Andes y elegir bando en las guerras mundiales.",
		start: 1816,
		end: 1945,
		lockedByDefault: false,
		art: "/art/independence.jpg",
		jump: 6
	},
	dictadura: {
		id: "dictadura",
		label: "Dictadura y Malvinas",
		span: "1976 — 1983",
		blurb: "El Proceso, el Mundial y el Atlántico Sur. Gobernar es sobrevivir al cuartel.",
		start: 1976,
		end: 1983,
		lockedByDefault: false,
		art: "/art/dictatorship.jpg",
		jump: .5
	},
	noventa: {
		id: "noventa",
		label: "Los noventa",
		span: "1989 — 1999",
		blurb: "Uno a uno, privatizaciones y un cohete que Washington quiere apagar.",
		start: 1989,
		end: 1999,
		lockedByDefault: false,
		art: "/art/nineties.jpg",
		jump: .6
	},
	dosmil: {
		id: "dosmil",
		label: "El dos mil",
		span: "2001 — 2013",
		blurb: "Corralito, default, retenciones y un papa argentino. Era bloqueada al inicio.",
		start: 2001,
		end: 2013,
		lockedByDefault: true,
		art: "/art/crisis.jpg",
		jump: .7
	},
	dieciocho: {
		id: "dieciocho",
		label: "La era presente",
		span: "2015 — 2026",
		blurb: "Marea verde, alineaciones y un país que discute todo. Se desbloquea como Ídolo o Prócer.",
		start: 2015,
		end: 2026,
		lockedByDefault: true,
		art: "/art/rights.jpg",
		jump: .7
	}
};
var EMPTY_IDEOLOGY = {
	market: 0,
	washington: 0,
	brics: 0,
	militar: 0,
	rights: 0
};
function defaultStats(era) {
	switch (era) {
		case "dictadura": return {
			economy: 44,
			people: 36,
			forces: 72,
			corruption: 42,
			prestige: 28,
			inflation: 48,
			image: 26
		};
		case "noventa": return {
			economy: 38,
			people: 42,
			forces: 48,
			corruption: 36,
			prestige: 40,
			inflation: 62,
			image: 44
		};
		case "dosmil": return {
			economy: 28,
			people: 34,
			forces: 46,
			corruption: 40,
			prestige: 22,
			inflation: 38,
			image: 30
		};
		case "dieciocho": return {
			economy: 40,
			people: 48,
			forces: 44,
			corruption: 38,
			prestige: 42,
			inflation: 52,
			image: 40
		};
		default: return {
			economy: 48,
			people: 52,
			forces: 50,
			corruption: 18,
			prestige: 46,
			inflation: 14,
			image: 50
		};
	}
}
function newRun(name, era) {
	const stats = defaultStats(era);
	const year = ERAS[era].start;
	return {
		version: 2,
		phase: "play",
		leaderName: name.trim() || "El Mandatario",
		era,
		calendarYear: year,
		mandateYear: 0,
		term: 1,
		cardsInTerm: 0,
		cardsTotal: 0,
		stats,
		imageCap: 100,
		money: START_MONEY,
		influence: 16,
		flags: [],
		seen: [],
		owned: [],
		awards: [],
		souvenirs: [],
		ideology: { ...EMPTY_IDEOLOGY },
		currentEventId: null,
		queued: [],
		pendingAwards: [],
		periodLog: [],
		archive: [],
		history: [{
			year,
			mandateYear: 0,
			stats: { ...stats },
			money: START_MONEY
		}],
		disastersUsed: 0,
		marketClosed: false,
		constitutionReformed: false,
		isDictatorship: false,
		warnedThisTerm: false,
		electionKind: null,
		collapse: null,
		endKind: null,
		endTitle: "",
		endBody: "",
		lastFlash: {},
		startedAt: Date.now()
	};
}
var DEFAULT_LEGACY = {
	version: 2,
	unlockedEras: [
		"independencia",
		"dictadura",
		"noventa"
	],
	bestRank: "querido",
	runs: 0,
	idolRuns: 0
};
var COLLAPSE_COPY = {
	economy: {
		title: "Hambre y éxodo",
		body: "La economía tocó fondo. Los mercados se vacían, las estaciones se llenan y el Estado se disuelve entre saqueos y silencios."
	},
	people: {
		title: "La plaza vacía",
		body: "Nadie sale a escucharte. Un gobierno sin pueblo no es gobierno: te dejan solo con los retratos y el eco."
	},
	forces: {
		title: "Las armas cambian de dueño",
		body: "Las tropas se sublevan. Un general anuncia por cadena que asumió para restaurar el orden. Tu uniforme ya no manda."
	},
	prestige: {
		title: "Paria",
		body: "El mundo te declara intocable. Sin crédito, sin aliados y sin pasaporte que valga, el Estado se apaga detrás de un embargo."
	},
	corruption: {
		title: "El Estado era la red",
		body: "La corrupción llegó a techo. Cada despacho es una causa, cada aliado un arrepentido. Caés por el peso de tu propia arquitectura."
	},
	revolt: {
		title: "La revolución",
		body: "La felicidad del pueblo tocó el piso. Las columnas entran a la Casa, queman papeles y nombran una junta. Tu mandato termina en la calle."
	},
	election: {
		title: "Derrota electoral",
		body: "Las urnas hablaron y no era tu nombre. El recuento es limpio, o bastante. Entregás la banda en el Congreso."
	},
	crime: {
		title: "El crimen salió a la luz",
		body: "Los sicarios hablaron, o los dejaron hablar. La causa cubre la tapa de todos los diarios. No hay banda que tape eso."
	},
	invasion: {
		title: "El mapa se parte",
		body: "Con las fuerzas en ruinas, una potencia extranjera impone hechos. La Cancillería redacta protestas que nadie lee."
	},
	trial: {
		title: "Culpable",
		body: "El tribunal no compró tu relato. La sentencia es destitución, y el país aplaude en la vereda del palacio."
	}
};
var EVENTS = [
	{
		id: "tucuman_1816",
		speaker: "Diputado de Tucumán",
		role: "Congreso",
		title: "El Congreso espera tu firma",
		text: "Julio de 1816. En una sala de cal y vela se discute cortar el último hilo con Fernando VII. Declarar la independencia es irreversible: España no perdona, y el Alto Perú aún arde.",
		art: "/art/independence.jpg",
		kind: "historia",
		eras: ["independencia"],
		minYear: 1816,
		maxYear: 1820,
		once: true,
		priority: 100,
		yearsAdvance: 1,
		left: {
			label: "Declarar la Independencia",
			narrative: "Nace la Nación. Sube el ánimo y el peso exterior; el tesoro se resiente.",
			effects: {
				people: 16,
				prestige: 12,
				forces: 8,
				economy: -6,
				image: 10
			},
			flags: ["independent"],
			ideology: { rights: 1 },
			log: "Se declara la Independencia en Tucumán."
		},
		right: {
			label: "Esperar un protector europeo",
			narrative: "Una corona tutelar puede traer crédito, pero arriesga el cierre del relato patriótico.",
			effects: {
				prestige: -10,
				people: -12,
				forces: -6,
				economy: 4,
				image: -8
			},
			flags: ["hesitant_1816"],
			followUp: "tucuman_rebuke",
			log: "El Congreso duda; Europa no ofrece corona."
		}
	},
	{
		id: "tucuman_rebuke",
		speaker: "Secretario del Congreso",
		role: "Gabinete",
		title: "Nadie viene a salvarnos",
		text: "Londres sonríe y no mueve un barco. Río de Janeiro pide precios. El pueblo ya canta libertad en las pulperías.",
		art: "/art/independence.jpg",
		kind: "historia",
		eras: ["independencia"],
		once: true,
		priority: 100,
		requireFlags: ["hesitant_1816"],
		yearsAdvance: 1,
		left: {
			label: "Firmar de una vez",
			narrative: "Independencia tardía, pero firme. Recupera algo de plaza y de mapa.",
			effects: {
				people: 10,
				prestige: 8,
				forces: 6,
				image: 6
			},
			flags: ["independent"],
			log: "Independencia tardía, pero firme."
		},
		right: {
			label: "Seguir negociando",
			narrative: "El Congreso se parte. El relato nace sucio.",
			effects: {
				prestige: -8,
				people: -10,
				forces: -8,
				corruption: 6,
				image: -6
			},
			flags: ["independent"],
			log: "Se declara igual, entre rumores de venta."
		}
	},
	{
		id: "cruce_andes",
		speaker: "General de los Andes",
		role: "Ejército",
		title: "Un ejército sobre la cordillera",
		text: "Propone pasar a Chile con mulares, cañones desarmados y el invierno como cómplice. Es una apuesta ruinosa o una gesta.",
		art: "/art/andes.jpg",
		kind: "historia",
		eras: ["independencia"],
		minYear: 1816,
		maxYear: 1824,
		once: true,
		priority: 88,
		requireFlags: ["independent"],
		yearsAdvance: 2,
		left: {
			label: "Cruzar los Andes",
			narrative: "Gesta militar: sube lealtad y prestigio, sangra el tesoro.",
			effects: {
				forces: 14,
				prestige: 16,
				economy: -8,
				people: 8,
				image: 8
			},
			flags: ["andes_crossing"],
			ideology: { militar: 1 },
			log: "El Ejército de los Andes cruza la cordillera."
		},
		right: {
			label: "Fortificar el litoral",
			narrative: "Prioriza aduanas y milicias locales; Chile espera y el mapa se achica.",
			effects: {
				forces: 4,
				economy: 6,
				prestige: -10,
				people: -4,
				image: -6
			},
			log: "Se prioriza el litoral; Chile espera."
		}
	},
	{
		id: "triple_alianza",
		speaker: "Ministro de Guerra",
		role: "Gabinete",
		title: "Guerra de la Triple Alianza",
		text: "Paraguay se adelanta sobre Corrientes. Brasil y Uruguay ya firmaron. Entrar es una carnicería de años; quedarse fuera es dejar el Litoral al fuego y a Pedro II.",
		art: "/art/alliance.jpg",
		kind: "historia",
		eras: ["independencia"],
		minYear: 1864,
		maxYear: 1872,
		once: true,
		priority: 92,
		yearsAdvance: 4,
		left: {
			label: "Entrar en la Triple Alianza",
			narrative: "Alinea al país con Brasil e imperio. Sangra economía y ánimo; el ejército se prueba.",
			effects: {
				forces: 8,
				prestige: 6,
				economy: -16,
				people: -10,
				corruption: 6,
				image: 4
			},
			flags: ["triple_alliance"],
			followUp: "triple_costo",
			ideology: {
				militar: 1,
				washington: 0,
				brics: 0
			},
			log: "Argentina entra en la guerra contra Paraguay."
		},
		right: {
			label: "Negociar una paz separada",
			narrative: "Evita la carnicería, pero arriesga quedar como socio menor del Imperio.",
			effects: {
				economy: 6,
				prestige: -12,
				forces: -8,
				people: 4,
				image: -8
			},
			flags: ["avoided_paraguay"],
			log: "Se evade la Triple Alianza; Brasil avanza solo."
		}
	},
	{
		id: "triple_costo",
		speaker: "Cirujano de campaña",
		role: "Frente",
		title: "El costo de Humaitá",
		text: "Fiebre, barro y listas de muertos que no entran en el parte. El interior dice que es una guerra porteña.",
		art: "/art/alliance.jpg",
		kind: "historia",
		eras: ["independencia"],
		once: true,
		priority: 100,
		requireFlags: ["triple_alliance"],
		yearsAdvance: 3,
		left: {
			label: "Llevar la guerra hasta Asunción",
			narrative: "Victoria cara: prestigio de potencia regional, pueblo exhausto.",
			effects: {
				forces: -8,
				prestige: 10,
				economy: -12,
				people: -8,
				image: 6
			},
			flags: ["won_paraguay"],
			log: "La guerra termina en Asunción, carísima."
		},
		right: {
			label: "Pedir armisticio ya",
			narrative: "Salva vidas y enoja a los aliados. La herida queda abierta.",
			effects: {
				people: 8,
				forces: 4,
				prestige: -10,
				economy: -4,
				image: -6
			},
			flags: ["won_paraguay"],
			ideology: { rights: 1 },
			log: "Armisticio prematuro; la herida queda abierta."
		}
	},
	{
		id: "inmigracion_europea",
		speaker: "Director de Inmigración",
		role: "Puerto",
		title: "Inmigración europea masiva",
		text: "Vapores italianos y españoles vomitan familias en la Dársena. Gobernar es poblar, dicen. También es conventillo, huelga y una lengua nueva en el convento.",
		art: "/art/immigration.jpg",
		kind: "historia",
		eras: ["independencia"],
		minYear: 1876,
		maxYear: 1914,
		once: true,
		priority: 84,
		yearsAdvance: 6,
		left: {
			label: "Abrir el puerto de par en par",
			narrative: "Multiplica brazos y prestigio de granero del mundo; tensiona el orden.",
			effects: {
				economy: 14,
				prestige: 10,
				people: 6,
				forces: -4,
				corruption: 4,
				image: 8
			},
			flags: ["euro_immigration"],
			souvenirs: ["vino_italia"],
			ideology: { market: 1 },
			log: "Oleada europea: el país se multiplica."
		},
		right: {
			label: "Cuotas y aduana selectiva",
			narrative: "Calma a las ligas patrióticas; el campo espera brazos que no llegan.",
			effects: {
				forces: 6,
				people: -4,
				economy: -8,
				prestige: -6,
				image: -4
			},
			log: "Inmigración restringida; el campo espera brazos."
		}
	},
	{
		id: "inmigracion_regional",
		speaker: "Gobernador del norte",
		role: "Interior",
		title: "Braceros del norte",
		text: "De Bolivia, Paraguay y el altiplano llegan brazos para el azúcar y el tanino. No salen en los afiches de Europa, pero sostienen la zafra.",
		art: "/art/jujuy.jpg",
		kind: "provincia",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1910,
		once: true,
		priority: 55,
		yearsAdvance: 2,
		left: {
			label: "Regularizar y sindicalizar",
			narrative: "Reconoce la inmigración regional: ánimo en el norte, roce con las aduanas.",
			effects: {
				people: 10,
				economy: 5,
				corruption: 3,
				prestige: 3,
				image: 3
			},
			flags: ["regional_migration"],
			ideology: { rights: 1 },
			log: "Se reconoce la inmigración regional."
		},
		right: {
			label: "Frontera dura y razzias",
			narrative: "Gendarmería en la puna: sube el orden, cae el norte.",
			effects: {
				forces: 8,
				people: -10,
				economy: -5,
				prestige: -4,
				image: -4
			},
			ideology: { militar: 1 },
			log: "Razzias en villas; el norte se enoja."
		}
	},
	{
		id: "antartida",
		speaker: "Capitán de fragata",
		role: "Armada",
		title: "Soberanía antártica",
		text: "Orcadas ya es argentina, pero Chile y Londres dibujan el mismo triángulo. Una base más, un sello más, un invierno más. El hielo no se discute si no estás ahí.",
		art: "/art/antarctica.jpg",
		kind: "historia",
		eras: [
			"independencia",
			"dictadura",
			"noventa"
		],
		minYear: 1904,
		once: true,
		priority: 60,
		yearsAdvance: 2,
		left: {
			label: "Instalar bases y reclamar",
			narrative: "Presencia permanente: prestigio polar y un gasto que no se ve en la plaza.",
			effects: {
				prestige: 12,
				forces: 6,
				economy: -9,
				people: 5,
				image: 8
			},
			flags: ["antarctica"],
			log: "Se refuerza la presencia antártica."
		},
		right: {
			label: "Dejarlo a las sociedades geográficas",
			narrative: "Ahorra tesoro; el mapa queda en manos ajenas.",
			effects: {
				economy: 4,
				prestige: -10,
				people: -4,
				image: -8
			},
			log: "La Antártida queda en el mapa ajeno."
		}
	},
	{
		id: "wwi",
		speaker: "Embajador británico",
		role: "Entente",
		title: "La Gran Guerra",
		text: "Londres quiere granos y carne; Berlín, una radio en Patagonia. La Sociedad Rural pide neutralidad lucrativa. Un barco torpedeado puede arrastrarnos.",
		art: "/art/worldwar.jpg",
		kind: "historia",
		eras: ["independencia"],
		minYear: 1914,
		maxYear: 1919,
		once: true,
		priority: 90,
		yearsAdvance: 4,
		left: {
			label: "Neutralidad estricta",
			narrative: "El trigo vale oro. Se gana caja y se pierde una silla en Versalles.",
			effects: {
				economy: 12,
				prestige: -4,
				forces: 4,
				people: 4,
				image: -4
			},
			flags: ["wwi_neutral"],
			ideology: { market: 1 },
			log: "Neutralidad en la Gran Guerra: el trigo vale oro."
		},
		right: {
			label: "Alinearse con los Aliados",
			narrative: "Abre crédito y diplomacia aliada; arriesga el mercado alemán y algún motín.",
			effects: {
				prestige: 12,
				forces: 6,
				economy: -8,
				people: -5,
				image: 10
			},
			flags: ["wwi_allies", "un_active"],
			ideology: { washington: 1 },
			log: "Ruptura con los Imperios Centrales."
		}
	},
	{
		id: "wwii",
		speaker: "Agregado de Washington",
		role: "Embajada",
		title: "La segunda guerra",
		text: "Brasil ya declaró. Estados Unidos amenaza con armas y créditos. El GOU murmura que el Eje es el orden. El pueblo come asado y escucha la BBC.",
		art: "/art/worldwar.jpg",
		kind: "historia",
		eras: ["independencia"],
		minYear: 1939,
		maxYear: 1945,
		once: true,
		priority: 90,
		yearsAdvance: 4,
		left: {
			label: "Mantener la neutralidad",
			narrative: "Caja corta plazo; cierra puertas en el mundo de posguerra.",
			effects: {
				economy: 8,
				prestige: -12,
				forces: 6,
				people: 4,
				image: -12,
				inflation: 4
			},
			flags: ["wwii_neutral"],
			marketClosed: true,
			log: "Neutralidad larga en la Segunda Guerra."
		},
		right: {
			label: "Romper con el Eje",
			narrative: "Alineación aliada: crédito, prestigio y un lugar en el tablero de 1945.",
			effects: {
				prestige: 14,
				economy: -4,
				forces: -4,
				people: -3,
				image: 12
			},
			flags: [
				"wwii_allies",
				"un_active",
				"align_us"
			],
			ideology: { washington: 1 },
			souvenirs: ["pin_eeuu"],
			log: "Ruptura con el Eje; llega el crédito aliado."
		}
	},
	{
		id: "golpe_1976",
		speaker: "Almirante en retiro",
		role: "Junta",
		title: "El Proceso",
		text: "Tres armas, un comunicado y la palabra aniquilar. Prometen orden y un Mundial. El precio es una noche que no termina.",
		art: "/art/dictatorship.jpg",
		kind: "historia",
		eras: ["dictadura"],
		minYear: 1976,
		maxYear: 1978,
		once: true,
		priority: 100,
		yearsAdvance: 1,
		left: {
			label: "Ceder el gobierno a la Junta",
			narrative: "El cuartel toma la Casa. La imagen exterior se quiebra de un modo que no se repara.",
			effects: {
				forces: 16,
				people: -18,
				prestige: -14,
				corruption: 10,
				economy: -6,
				image: -40
			},
			flags: ["dictatorship_1976"],
			dictatorship: true,
			ideology: { militar: 2 },
			followUp: "desaparecidos",
			log: "Golpe de 1976: nace el Proceso."
		},
		right: {
			label: "Llamar a la resistencia civil",
			narrative: "Intento de sostener la legalidad. El cuartel igual avanza; queda un relato.",
			effects: {
				people: 8,
				forces: -16,
				prestige: 6,
				economy: -8,
				image: 6
			},
			flags: ["resisted_1976"],
			ideology: { rights: 2 },
			log: "Resistencia civil; el golpe igual avanza."
		}
	},
	{
		id: "desaparecidos",
		speaker: "Abogada de familiares",
		role: "Derechos humanos",
		title: "Las Madres en la Plaza",
		text: "Pañuelos blancos, listas, un silencio oficial. El Ministerio pide no hacer caso a una campaña antiargentina. La historia va a preguntar qué hiciste con los papeles.",
		art: "/art/dictatorship.jpg",
		kind: "historia",
		eras: ["dictadura"],
		once: true,
		priority: 95,
		requireFlags: ["dictatorship_1976"],
		yearsAdvance: 1,
		left: {
			label: "Abrir archivos y frenar el plan",
			narrative: "Gesto de verdad: el mundo mira mejor; el cuartel se enfurece.",
			effects: {
				prestige: 14,
				people: 8,
				forces: -16,
				corruption: -6,
				image: 12
			},
			flags: ["human_rights"],
			ideology: { rights: 2 },
			log: "Se intenta frenar el plan clandestino."
		},
		right: {
			label: "Negar y profundizar",
			narrative: "El mundo se aparta. La imagen del país se hunde.",
			effects: {
				forces: 8,
				prestige: -16,
				people: -12,
				corruption: 12,
				image: -20
			},
			flags: ["denied_crimes"],
			dictatorship: true,
			ideology: { militar: 1 },
			log: "Negacionismo de Estado; el mundo se aparta."
		}
	},
	{
		id: "mundial_78",
		speaker: "Jefe de prensa",
		role: "Imagen",
		title: "Un mundial para no mirar",
		text: "La pelota tapa las cárceles, dicen los diarios del régimen. Invertir en estadios es prestigio barato o una vergüenza cara.",
		art: "/art/dictatorship.jpg",
		kind: "historia",
		eras: ["dictadura"],
		minYear: 1978,
		maxYear: 1979,
		once: true,
		priority: 70,
		yearsAdvance: 1,
		left: {
			label: "Hacer del Mundial una fiesta",
			narrative: "Tregua futbolera: ánimo corto, gasto y una foto que la FIFA recuerda.",
			effects: {
				people: 10,
				prestige: 6,
				economy: -10,
				corruption: 6,
				inflation: 4
			},
			flags: ["worldcup_embrace"],
			log: "Mundial 78: la fiesta tapa el horror."
		},
		right: {
			label: "Recortar y no celebrar",
			narrative: "Ahorra caja; la plaza lo lee como desprecio.",
			effects: {
				prestige: -4,
				economy: 6,
				people: -8,
				forces: -4
			},
			log: "Se baja el perfil del Mundial."
		}
	},
	{
		id: "malvinas",
		speaker: "Almirante de la flota",
		role: "Armada",
		title: "Causa Malvinas",
		text: "Abril de 1982. Un desembarco incruento para unir al país. Londres no es un diario de la tarde. Los pibes de conscripto no eligieron el archipiélago.",
		art: "/art/malvinas.jpg",
		kind: "historia",
		eras: ["dictadura"],
		minYear: 1982,
		maxYear: 1983,
		once: true,
		priority: 96,
		yearsAdvance: 1,
		left: {
			label: "Recuperar las islas por la fuerza",
			narrative: "Unidad corta y un riesgo existencial. Si las fuerzas están flojas, el mapa se parte.",
			effects: {
				people: 12,
				forces: 6,
				prestige: -6,
				economy: -12,
				image: -8
			},
			flags: ["malvinas_war"],
			followUp: "malvinas_fin",
			ideology: { militar: 2 },
			log: "Desembarco en Malvinas."
		},
		right: {
			label: "Negociación larga con Londres",
			narrative: "Evita la guerra; la causa sigue abierta y la plaza se enfría.",
			effects: {
				prestige: 6,
				people: -10,
				forces: -8,
				economy: 4,
				image: 6
			},
			flags: ["malvinas_talks"],
			ideology: { rights: 1 },
			log: "Se evita la guerra; la causa sigue abierta."
		}
	},
	{
		id: "malvinas_fin",
		speaker: "Oficial conscripto",
		role: "Infantería",
		title: "El invierno del Atlántico",
		text: "Harrier, hundimientos, frío. El Estado Mayor pide más tiempo; las madres piden a sus hijos.",
		art: "/art/malvinas.jpg",
		kind: "historia",
		eras: ["dictadura"],
		once: true,
		priority: 100,
		requireFlags: ["malvinas_war"],
		yearsAdvance: 1,
		left: {
			label: "Ordenar la rendición",
			narrative: "Salva vidas y tumba el prestigio militar. El régimen se queda sin relato.",
			effects: {
				people: -8,
				forces: -14,
				prestige: -6,
				economy: -4,
				image: -4
			},
			flags: ["malvinas_defeat"],
			log: "Rendición en Malvinas; cae el prestigio militar."
		},
		right: {
			label: "Pedir más hombres y más invierno",
			narrative: "Dobla la apuesta. El costo humano y diplomático se multiplica.",
			effects: {
				forces: -12,
				people: -16,
				prestige: -12,
				economy: -10,
				image: -10
			},
			flags: ["malvinas_defeat"],
			log: "La guerra se alarga y se pierde igual."
		}
	},
	{
		id: "hiper_89",
		speaker: "Ministro de Economía",
		role: "Hacienda",
		title: "La hiper",
		text: "Los precios cambian entre el almacén y la esquina. El austral es papel. Un pacto con el mercado puede calmar; emitir, incendiar.",
		art: "/art/nineties.jpg",
		kind: "historia",
		eras: ["noventa"],
		minYear: 1989,
		maxYear: 1991,
		once: true,
		priority: 90,
		yearsAdvance: 1,
		left: {
			label: "Shock y pacto con el mercado",
			narrative: "Baja la inflación a costa del salario. Abre la puerta a la convertibilidad.",
			effects: {
				economy: 6,
				prestige: 6,
				people: -10,
				corruption: 6,
				inflation: -18,
				image: 6
			},
			flags: ["hyper_shock"],
			ideology: { market: 2 },
			log: "Shock antiinflacionario; el salario sufre."
		},
		right: {
			label: "Controlar precios y emitir",
			narrative: "Alivio de mostrador. El asesino silencioso se alimenta.",
			effects: {
				people: 6,
				economy: -12,
				prestige: -8,
				inflation: 16,
				image: -6
			},
			flags: ["hyper_emit"],
			ideology: { market: -2 },
			log: "Más emisión: la hiper se come el sueldo."
		}
	},
	{
		id: "convertibilidad",
		speaker: "Ministro del uno a uno",
		role: "Economía",
		title: "Convertibilidad",
		text: "Un peso, un dólar, por ley. La inflación se muere en una semana. También se muere el tipo de cambio como herramienta. Las privatizaciones vienen en el mismo maletín.",
		art: "/art/nineties.jpg",
		kind: "historia",
		eras: ["noventa"],
		minYear: 1991,
		maxYear: 1994,
		once: true,
		priority: 94,
		yearsAdvance: 2,
		left: {
			label: "Fijar 1 a 1 y privatizar",
			narrative: "Estabiliza precios y abre mercados. La corrupción viaja en el mismo avión.",
			effects: {
				economy: 10,
				prestige: 12,
				people: 6,
				corruption: 12,
				forces: -4,
				inflation: -28,
				image: 10
			},
			flags: ["convertibility", "privatizations"],
			ideology: {
				market: 2,
				washington: 1
			},
			log: "Convertibilidad y oleada de privatizaciones."
		},
		right: {
			label: "Flotar y sostener empresas públicas",
			narrative: "Conserva herramientas; la inflación sigue viva y el crédito se encarece.",
			effects: {
				people: 4,
				economy: -8,
				prestige: -8,
				corruption: -4,
				inflation: 8,
				image: -4
			},
			flags: ["no_convertibility"],
			ideology: { market: -1 },
			log: "Se rechaza el 1 a 1; la inflación sigue viva."
		}
	},
	{
		id: "privatizaciones",
		speaker: "Banquero de New York",
		role: "Bancos",
		title: "Todo es vendible",
		text: "YPF, teléfonos, trenes, agua. Prometen eficiencia. Los amigos del poder ya tienen sociedades en islas. El ramal que para, no vuelve.",
		art: "/art/nineties.jpg",
		kind: "historia",
		eras: ["noventa"],
		minYear: 1992,
		maxYear: 1999,
		once: true,
		priority: 70,
		requireFlags: ["privatizations"],
		yearsAdvance: 2,
		left: {
			label: "Vender ya, con apuro",
			narrative: "Caja rápida, comisiones opacas, ramales que mueren.",
			effects: {
				economy: 6,
				prestige: 4,
				corruption: 14,
				people: -10,
				image: -4
			},
			ideology: { market: 1 },
			log: "Privatizaciones exprés y comisiones opacas."
		},
		right: {
			label: "Licitar con reglas duras",
			narrative: "Más lento, más limpio. Washington se impacienta un poco.",
			effects: {
				prestige: 8,
				corruption: -6,
				economy: 2,
				people: 4,
				image: 6
			},
			ideology: { rights: 1 },
			log: "Privatizaciones más limpias, más lentas."
		}
	},
	{
		id: "cohete",
		speaker: "Ingeniero de la CONAE",
		role: "Espacio",
		title: "Cohete al espacio",
		text: "Hay un misil que Washington llama Cóndor y un satélite que nosotros llamamos soberanía. Inversión cara, prestigio raro, y un memorándum sobre la mesa.",
		art: "/art/nineties.jpg",
		kind: "historia",
		eras: ["noventa", "dosmil"],
		minYear: 1985,
		maxYear: 2014,
		once: true,
		priority: 58,
		yearsAdvance: 2,
		left: {
			label: "Financiar el programa espacial",
			narrative: "Soberanía técnica. Enfurece a Washington y ilumina a la universidad.",
			effects: {
				prestige: 12,
				economy: -10,
				forces: 4,
				people: 6,
				image: 4
			},
			flags: ["space_program", "education_push"],
			ideology: { brics: 1 },
			log: "Se apuesta al plan espacial propio."
		},
		right: {
			label: "Cancelar y comprar afuera",
			narrative: "Washington aplaude. El cielo se alquila.",
			effects: {
				economy: 6,
				prestige: -8,
				forces: -4,
				image: 4
			},
			flags: ["space_cancelled", "align_us"],
			ideology: {
				washington: 1,
				market: 1
			},
			souvenirs: ["pin_eeuu"],
			log: "Se cancela el cohete; Washington aplaude."
		}
	},
	{
		id: "corralito",
		speaker: "Cajero del barrio",
		role: "Banco",
		title: "Corralito",
		text: "Diciembre de 2001. El ministro limita los retiros. Las cacerolas ya están en la vereda. Cinco presidentes pueden caber en una semana.",
		art: "/art/crisis.jpg",
		kind: "historia",
		eras: ["dosmil"],
		minYear: 2001,
		maxYear: 2002,
		once: true,
		priority: 100,
		yearsAdvance: 1,
		left: {
			label: "Abrir los bancos y devaluar",
			narrative: "Revienta el 1 a 1. El pueblo respira; el prestigio financiero se hunde.",
			effects: {
				people: 6,
				economy: -12,
				prestige: -10,
				forces: -4,
				corruption: 4,
				inflation: 18,
				image: -8
			},
			flags: ["corralito", "default_2001"],
			ideology: { market: -1 },
			log: "Se levanta el corralito; devaluación y default."
		},
		right: {
			label: "Profundizar el cepo y pedir al FMI",
			narrative: "El Fondo pide ajuste. La plaza puede incendiarse antes de que llegue el giro.",
			effects: {
				prestige: -2,
				people: -16,
				economy: -8,
				corruption: 8,
				forces: 4,
				inflation: 6,
				image: -4
			},
			flags: [
				"corralito",
				"default_2001",
				"imf"
			],
			ideology: { washington: 1 },
			log: "El corralito se endurece; estalla el 19 y 20."
		}
	},
	{
		id: "retenciones",
		speaker: "Productor de soja",
		role: "Campo",
		title: "La 125",
		text: "El campo para las rutas. El gobierno habla de mesa para todos. Una mesa chica puede terminar en cacerolas de ambos lados.",
		art: "/art/mendoza.jpg",
		kind: "historia",
		eras: ["dosmil"],
		minYear: 2008,
		maxYear: 2011,
		once: true,
		priority: 72,
		yearsAdvance: 1,
		left: {
			label: "Subir retenciones",
			narrative: "Caja fiscal y grieta. El campo se planta.",
			effects: {
				economy: 8,
				people: 5,
				prestige: -4,
				forces: -4,
				image: -2
			},
			flags: ["retenciones"],
			ideology: { market: -1 },
			log: "Retenciones altas; el campo se planta."
		},
		right: {
			label: "Bajar y pactar con la mesa de enlace",
			narrative: "Calma al agro, afloja la caja. Abre mercados de granos.",
			effects: {
				economy: -6,
				people: -5,
				prestige: 6,
				corruption: 4,
				image: 4
			},
			ideology: { market: 1 },
			log: "Pacto con el campo; cae la caja fiscal."
		}
	},
	{
		id: "ley_identidad",
		speaker: "Activista de la diversidad",
		role: "Sociedad civil",
		title: "Ley de Identidad de Género",
		text: "El DNI como se habita, no como se nació. La Iglesia pide una consulta; los organismos internacionales, una ley.",
		art: "/art/rights.jpg",
		kind: "historia",
		eras: ["dosmil", "dieciocho"],
		minYear: 2010,
		maxYear: 2016,
		once: true,
		priority: 74,
		yearsAdvance: 1,
		left: {
			label: "Sancionar la ley trans",
			narrative: "Vanguardia de derechos. Prestigio internacional; roce con las fuerzas y el púlpito.",
			effects: {
				people: 8,
				prestige: 12,
				forces: -6,
				image: 10
			},
			flags: ["gender_law"],
			ideology: { rights: 2 },
			log: "Ley de Identidad de Género."
		},
		right: {
			label: "Diferir y abrir debate",
			narrative: "Calma a un tercio; el otro no olvida. El mundo anota la postergación.",
			effects: {
				forces: 4,
				people: -8,
				prestige: -8,
				image: -8
			},
			log: "Se frena la ley de identidad."
		}
	},
	{
		id: "aborto",
		speaker: "Médica de un hospital público",
		role: "Salud",
		title: "La marea verde",
		text: "Pañuelos en las escalinatas. La Iglesia, en la otra vereda. Legalizar es un cisma cultural; no hacerlo, uno sanitario.",
		art: "/art/rights.jpg",
		kind: "historia",
		eras: ["dieciocho"],
		minYear: 2018,
		maxYear: 2021,
		once: true,
		priority: 88,
		yearsAdvance: 1,
		left: {
			label: "Legalizar el aborto",
			narrative: "Agenda feminista y prestigio de derechos. Parte al país en dos.",
			effects: {
				people: 6,
				prestige: 10,
				forces: -8,
				image: 8
			},
			flags: ["abortion_law", "health_plan"],
			ideology: { rights: 2 },
			log: "Interrupción legal del embarazo."
		},
		right: {
			label: "Mantener la penalización",
			narrative: "La Iglesia y una parte de las fuerzas respiran; la marea no se va.",
			effects: {
				forces: 6,
				people: -6,
				prestige: -8,
				image: -6
			},
			flags: ["abortion_blocked"],
			log: "El aborto sigue penalizado."
		}
	},
	{
		id: "ni_una_menos",
		speaker: "Colectivo feminista",
		role: "Calle",
		title: "Ni una menos",
		text: "Una marcha que no pide permiso. Emergencia en violencia, presupuesto o un discurso. El Ministerio de Seguridad mira el reloj.",
		art: "/art/rights.jpg",
		kind: "historia",
		eras: ["dieciocho", "dosmil"],
		minYear: 2015,
		maxYear: 2024,
		once: true,
		priority: 64,
		yearsAdvance: 1,
		left: {
			label: "Emergencia y presupuesto",
			narrative: "Política de género con partidas. Suma plaza y diplomas; resta caja.",
			effects: {
				people: 10,
				prestige: 8,
				economy: -4,
				forces: -4,
				image: 6
			},
			flags: ["niunamenos", "health_plan"],
			ideology: { rights: 2 },
			log: "Política de género con presupuesto."
		},
		right: {
			label: "Discurso y poco más",
			narrative: "La marea lee desprecio. El prestigio cultural se esfuma.",
			effects: {
				people: -8,
				prestige: -6,
				forces: 4,
				image: -4
			},
			log: "Se subestima la marea feminista."
		}
	},
	{
		id: "papa_argentino",
		speaker: "Nuncio apostólico",
		role: "Santa Sede",
		title: "El Papa es argentino",
		text: "Un cardenal de Flores aparece en el balcón de San Pedro. El país se detiene. Podés abrazar la mediación vaticana o marcar distancia laica.",
		art: "/art/vatican.jpg",
		kind: "diplomacia",
		eras: ["dosmil", "dieciocho"],
		minYear: 2013,
		maxYear: 2026,
		once: true,
		priority: 80,
		yearsAdvance: 1,
		left: {
			label: "Abrazar la mediación papal",
			narrative: "Prestigio moral y un souvenir de la Santa Sede. Washington y Moscú se ponen celosos.",
			effects: {
				people: 10,
				prestige: 10,
				image: 8,
				forces: 2
			},
			flags: ["pope_argentine"],
			souvenirs: ["rosario_vaticano"],
			log: "El gobierno se sube al papa argentino."
		},
		right: {
			label: "Distancia laica",
			narrative: "El Estado marca autonomía. Una parte de la plaza se enfría.",
			effects: {
				prestige: 4,
				people: -6,
				forces: -3,
				image: 2
			},
			log: "El Estado marca distancia con la Iglesia."
		}
	},
	{
		id: "ucrania",
		speaker: "Canciller",
		role: "Palacio San Martín",
		title: "Rusia, Ucrania, Washington",
		text: "Tres teléfonos. Uno pide granos y no condenar. Otro, armas y FMI. El tercero, mediación. En un mundo partido, abrazar a los tres es una fantasía.",
		art: "/art/diplomacy.jpg",
		kind: "diplomacia",
		eras: ["dieciocho"],
		minYear: 2022,
		maxYear: 2026,
		once: true,
		priority: 86,
		yearsAdvance: 1,
		left: {
			label: "Ayuda humanitaria y condena a Moscú",
			narrative: "Abre mercados occidentales y puede valer una Orden de la Libertad. Enfurece a Moscú.",
			effects: {
				prestige: 10,
				image: 10,
				economy: -4,
				people: -4,
				forces: 2
			},
			flags: ["ukraine_aid", "align_us"],
			ideology: { washington: 2 },
			souvenirs: ["pin_eeuu"],
			log: "Condena a Rusia y ayuda a Ucrania."
		},
		right: {
			label: "Neutralidad y granos a todos",
			narrative: "Multipolaridad: caja de commodities, riesgo de cierre de crédito occidental.",
			effects: {
				economy: 6,
				prestige: -6,
				image: -8,
				people: 4
			},
			flags: ["align_brics"],
			ideology: { brics: 2 },
			marketClosed: true,
			log: "Neutralidad comercial ante la guerra."
		}
	},
	{
		id: "turismo",
		speaker: "Ministra de Turismo",
		role: "Gabinete",
		title: "El país como postal",
		text: "Cataratas, glaciares, un cambio favorable. Abrir el cielo suma dólares e imagen. Un default o una dictadura los espanta a todos.",
		art: "/art/patagonia.jpg",
		kind: "historia",
		eras: [
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1994,
		once: true,
		priority: 48,
		yearsAdvance: 1,
		left: {
			label: "Plan nacional de turismo",
			narrative: "Imagen y caja si el país no está cerrado. Inflación alta lo licúa.",
			effects: {
				economy: 6,
				image: 8,
				people: 4,
				prestige: 4,
				inflation: 2
			},
			flags: ["tourism"],
			log: "Plan nacional de turismo."
		},
		right: {
			label: "Dejarlo al mercado hotelero",
			narrative: "Sin política, el turismo queda en recovas de siempre.",
			effects: {
				economy: 2,
				image: -2,
				prestige: -2
			},
			ideology: { market: 1 },
			log: "Turismo sin política de Estado."
		}
	},
	{
		id: "mundial_moderno",
		speaker: "Técnico de la selección",
		role: "Deporte",
		title: "Un mundial, una tregua",
		text: "La pelota para el país. Invertir en la fiesta da popularidad barata. Ignorarla es de estadista… o de suicida.",
		art: "/art/rights.jpg",
		kind: "flavor",
		eras: [
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1978,
		once: true,
		priority: 50,
		yearsAdvance: 1,
		left: {
			label: "Abrazar la fiesta",
			narrative: "Tregua civil. Puede abrir el Living Football Award si el ánimo acompaña.",
			effects: {
				people: 12,
				economy: -4,
				prestige: 5,
				image: 4
			},
			flags: ["worldcup_embrace"],
			log: "El gobierno se sube a la selección."
		},
		right: {
			label: "Gobernar como si no hubiera pelota",
			narrative: "Gesto de sobriedad. La plaza no entiende.",
			effects: {
				people: -6,
				prestige: 2,
				economy: 2
			},
			log: "Se ignora el Mundial."
		}
	},
	{
		id: "onu_foro",
		speaker: "Embajadora en ONU",
		role: "Multilateral",
		title: "El atril de mármol",
		text: "Te toca el discurso de septiembre. Podés denunciar el orden financiero o pedir misiones de paz. Cada frase se traduce a crédito.",
		art: "/art/diplomacy.jpg",
		kind: "diplomacia",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1945,
		once: true,
		priority: 52,
		yearsAdvance: 1,
		left: {
			label: "Agenda de paz y descolonización",
			narrative: "Suma liderazgo global. Malvinas entra en el párrafo; Washington bosteza.",
			effects: {
				prestige: 8,
				image: 8,
				people: 4,
				economy: -2
			},
			flags: ["un_active"],
			souvenirs: ["mate_sur"],
			log: "Discurso de paz en la ONU."
		},
		right: {
			label: "Pedir crédito y alinear votos",
			narrative: "Abre mercado si el prestigio aguanta. Parece un lobby, no un país.",
			effects: {
				economy: 6,
				prestige: -4,
				image: 4,
				inflation: 4
			},
			flags: ["align_us"],
			ideology: {
				washington: 1,
				market: 1
			},
			souvenirs: ["pin_eeuu"],
			log: "La ONU se usa como vidriera de crédito."
		}
	},
	{
		id: "visita_italia",
		speaker: "Presidente del Consiglio",
		role: "Visita",
		title: "Roma en la Rosada",
		text: "Una visita de Estado: inmigración, empresas y un sótano de vinos. El obsequio se espera de los dos lados.",
		art: "/art/diplomacy.jpg",
		kind: "diplomacia",
		eras: [
			"independencia",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1880,
		once: true,
		priority: 44,
		yearsAdvance: 1,
		left: {
			label: "Afianzar lazos y firmar comercio",
			narrative: "Italia retribuye con vinos y un souvenir. Abre mercado europeo.",
			effects: {
				prestige: 6,
				image: 6,
				economy: 4,
				people: 3
			},
			souvenirs: ["vino_italia"],
			flags: ["italy_ties"],
			log: "Cumbre con Italia y obsequio de vinos."
		},
		right: {
			label: "Agenda corta, foto y nada más",
			narrative: "Ahorra compromisos. Roma se siente despreciada.",
			effects: {
				prestige: -4,
				image: -4,
				people: -2
			},
			log: "Visita italiana de trámite."
		}
	},
	{
		id: "visita_brasil",
		speaker: "Itamaraty",
		role: "Visita",
		title: "El vecino mayor",
		text: "Brasil ofrece energía, café y una silla en el Mercosur que a veces pesa como yugo.",
		art: "/art/diplomacy.jpg",
		kind: "diplomacia",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1822,
		once: true,
		priority: 42,
		yearsAdvance: 1,
		left: {
			label: "Cumbre y presente de Estado",
			narrative: "Café, comercio y un gesto amazónico. Suma imagen regional.",
			effects: {
				prestige: 5,
				image: 5,
				economy: 4
			},
			souvenirs: ["cafe_brasil"],
			flags: ["brazil_ties"],
			log: "Cumbre con Brasil."
		},
		right: {
			label: "Marcar distancia soberana",
			narrative: "Evita tutelas. El Mercosur se enfría.",
			effects: {
				prestige: -4,
				economy: -3,
				image: -3,
				people: 3
			},
			log: "Distancia con Brasilia."
		}
	},
	{
		id: "beagle",
		speaker: "Canciller chileno",
		role: "Límites",
		title: "El Beagle o los hielos",
		text: "Un canal, unas islas, un mapa que no coincide. La guerra con el vecino es popular una semana. El Papa ofrece mediación.",
		art: "/art/ushuaia.jpg",
		kind: "diplomacia",
		eras: ["independencia", "dictadura"],
		minYear: 1870,
		maxYear: 1985,
		once: true,
		priority: 66,
		yearsAdvance: 1,
		left: {
			label: "Aceptar mediación papal",
			narrative: "Paz con Santiago y un presente de cobre. Puede abrir el Nobel de la Paz.",
			effects: {
				prestige: 10,
				forces: -4,
				people: -3,
				image: 10
			},
			flags: ["beagle_peace"],
			souvenirs: ["cobre_chile", "rosario_vaticano"],
			ideology: { rights: 1 },
			log: "Mediación papal con Chile."
		},
		right: {
			label: "Movilizar al sur",
			narrative: "Tambores. Si las fuerzas están flojas, el riesgo de invasión deja de ser metafórico.",
			effects: {
				forces: 8,
				prestige: -8,
				economy: -8,
				people: 4,
				image: -10
			},
			flags: ["chile_tension"],
			ideology: { militar: 1 },
			log: "Tensión bélica con Chile."
		}
	},
	{
		id: "ushuaia_tech",
		speaker: "Gobernadora de Tierra del Fuego",
		role: "Provincia",
		title: "Polo tecnológico en Ushuaia",
		text: "En el fin del mundo piden fibra, exenciones y un satélite que mire el canal. Es caro. También es una foto de siglo XXI.",
		art: "/art/ushuaia.jpg",
		kind: "provincia",
		eras: [
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1995,
		once: true,
		priority: 46,
		yearsAdvance: 1,
		left: {
			label: "Financiar el polo austral",
			narrative: "Desarrollo de frontera: prestigio científico, gasto real.",
			effects: {
				prestige: 8,
				economy: -6,
				people: 5,
				image: 6
			},
			flags: ["ushuaia_tech", "education_push"],
			souvenirs: ["mate_sur"],
			log: "Polo tecnológico en Ushuaia."
		},
		right: {
			label: "Dejarlo a ensambladoras",
			narrative: "Tierra del Fuego sigue siendo aduana, no laboratorio.",
			effects: {
				economy: 3,
				prestige: -4,
				people: -4
			},
			ideology: { market: 1 },
			log: "Ushuaia queda en manos de la ensambladora."
		}
	},
	{
		id: "patagonia_tierras",
		speaker: "Escribano de Río Negro",
		role: "Provincia",
		title: "Venta de tierras en Patagonia",
		text: "Un fondo pide leguas frente al lago. Dicen turismo. Dicen soberanía al revés. El mapa no se discute en un country.",
		art: "/art/patagonia.jpg",
		kind: "provincia",
		eras: [
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1990,
		once: true,
		priority: 47,
		yearsAdvance: 1,
		left: {
			label: "Frenar la venta y regular",
			narrative: "Soberanía territorial. Enfurece al capital y suma plaza nacionalista.",
			effects: {
				people: 8,
				prestige: 6,
				economy: -6,
				image: 4,
				corruption: -4
			},
			flags: ["patagonia_guard"],
			log: "Se frena la venta de tierras patagónicas."
		},
		right: {
			label: "Autorizar con canon",
			narrative: "Dólares de corto plazo, rumor de país en oferta.",
			effects: {
				economy: 8,
				corruption: 8,
				people: -8,
				prestige: -6,
				image: -6
			},
			ideology: { market: 1 },
			log: "Tierras patagónicas a fondos extranjeros."
		}
	},
	{
		id: "jujuy_narco",
		speaker: "Fiscal de frontera",
		role: "Provincia",
		title: "La quebrada tomada",
		text: "Ruta 34, pasos no habilitados, un ministerio que no da abasto. Mano militar o inteligencia y jueces. Las dos duelen.",
		art: "/art/jujuy.jpg",
		kind: "provincia",
		eras: [
			"dosmil",
			"dieciocho",
			"noventa"
		],
		minYear: 1995,
		once: true,
		priority: 49,
		yearsAdvance: 1,
		left: {
			label: "Emergencia con fuerzas federales",
			narrative: "Orden visible. Si las fuerzas están rotas, es teatro.",
			effects: {
				forces: 8,
				people: 3,
				corruption: 4,
				economy: -3,
				image: 2
			},
			ideology: { militar: 1 },
			log: "Emergencia de seguridad en Jujuy."
		},
		right: {
			label: "Jueces, GML y pasos",
			narrative: "Más lento, más limpio. El narco tiene tiempo.",
			effects: {
				corruption: -8,
				prestige: 6,
				people: -3,
				economy: -5,
				image: 4
			},
			ideology: { rights: 1 },
			log: "Ataque a la plata del narco en la frontera norte."
		}
	},
	{
		id: "mendoza_vino",
		speaker: "Viticultora de Luján",
		role: "Provincia",
		title: "La cosecha y la falla",
		text: "Mendoza ofrece denominación de origen y una falla sísmica que no avisa. Invertir en viñas es imagen; ignorar las normas, una masacre futura.",
		art: "/art/mendoza.jpg",
		kind: "provincia",
		eras: [
			"independencia",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1885,
		once: true,
		priority: 45,
		yearsAdvance: 1,
		left: {
			label: "Impulsar la vitivinicultura y normas sísmicas",
			narrative: "Marca país y un poco de prevención. La caja lo siente.",
			effects: {
				economy: 6,
				image: 6,
				prestige: 4,
				people: 4,
				inflation: 1
			},
			flags: ["mendoza_wine"],
			log: "Plan vitivinícola y normas sísmicas en Mendoza."
		},
		right: {
			label: "Dejarlo al mercado y a la Virgen",
			narrative: "Ahorra. El próximo temblor no negocia.",
			effects: {
				economy: 3,
				people: -4,
				image: -3,
				prestige: -2
			},
			ideology: { market: 1 },
			log: "Mendoza queda a merced del mercado."
		}
	},
	{
		id: "inundacion",
		speaker: "Intendente del litoral",
		role: "Emergencia",
		title: "El río se come el pueblo",
		text: "El Paraná no pide permiso. Techos bajo el agua, escuelas-isla, un puente que ya no está. No hay decisión buena: hay menos mala.",
		art: "/art/flood.jpg",
		kind: "desastre",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1850,
		priority: 40,
		weight: .7,
		yearsAdvance: 1,
		left: {
			label: "Ayuda directa y obras",
			narrative: "Todo costo, nada de ganancia. El pueblo lo nota apenas.",
			effects: {
				people: -2,
				economy: -10,
				corruption: 3,
				inflation: 3,
				prestige: -2
			},
			log: "Inundación: ayuda de emergencia."
		},
		right: {
			label: "Declarar emergencia y poco más",
			narrative: "Peor. El litoral no olvida, y la economía igual se moja.",
			effects: {
				people: -12,
				economy: -6,
				prestige: -4,
				image: -4
			},
			log: "Inundación sin presupuesto."
		}
	},
	{
		id: "terremoto",
		speaker: "Gobernador de Cuyo",
		role: "Emergencia",
		title: "La tierra no avisa",
		text: "Un sismo parte una iglesia, un hospital, una noche. Los escombros no distinguen bandera. El Estado llega tarde o no llega.",
		art: "/art/quake.jpg",
		kind: "desastre",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1861,
		priority: 40,
		weight: .65,
		yearsAdvance: 1,
		left: {
			label: "Cadenas de rescate y reconstrucción",
			narrative: "Gasto puro. Mitiga muertes; no hay foto que alcance.",
			effects: {
				people: -4,
				economy: -12,
				forces: -4,
				inflation: 4,
				prestige: -2
			},
			log: "Terremoto: plan de reconstrucción."
		},
		right: {
			label: "Dejarlo a las provincias",
			narrative: "Peor aún. La imagen del país se llena de polvo.",
			effects: {
				people: -14,
				economy: -7,
				image: -8,
				prestige: -6
			},
			log: "Terremoto sin Estado nacional."
		}
	},
	{
		id: "escandalo_fiscal",
		speaker: "Fiscal federal",
		role: "Comodoro Py",
		title: "El abogado con la valija",
		text: "Un fiscal tiene pruebas. Facturas, chats, un chofer. Tres caminos: sicarios, una campaña de lodo, o el juicio. El primero puede ser el último.",
		art: "/art/scandal.jpg",
		kind: "escandalo",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1890,
		minStats: { corruption: 48 },
		priority: 82,
		weight: 1.3,
		yearsAdvance: 1,
		left: {
			label: "Campaña de difamación",
			narrative: "Ensucia al fiscal. Cuesta prestigio y plata; no es un homicidio.",
			effects: {
				prestige: -10,
				people: -8,
				corruption: 6,
				influence: 4,
				money: -9e5,
				image: -6
			},
			log: "Campaña sucia contra el fiscal."
		},
		right: {
			label: "Ir a juicio",
			narrative: "Cincuenta y cincuenta. La verdad, o la banda en el palacio de tribunales.",
			effects: {
				prestige: 4,
				people: 2,
				corruption: -6
			},
			flags: ["stood_trial"],
			followUp: "juicio_veredicto",
			log: "El mandatario se somete a juicio."
		}
	},
	{
		id: "escandalo_sicario",
		speaker: "Hombre de la side",
		role: "Sombras",
		title: "Una solución final",
		text: "Alguien ofrece un accidente de tránsito. Si sale mal —y suele salir mal— no hay banda ni exilio que alcance.",
		art: "/art/scandal.jpg",
		kind: "escandalo",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1890,
		minStats: { corruption: 62 },
		priority: 70,
		weight: .8,
		yearsAdvance: 1,
		left: {
			label: "Rechazar y desarmar la red",
			narrative: "Te sacás las manos de encima. El fiscal sigue vivo y la causa también.",
			effects: {
				corruption: -8,
				prestige: 4,
				people: 4,
				forces: -4,
				image: 4
			},
			log: "Se rechaza el crimen de Estado."
		},
		right: {
			label: "Dar luz verde a los sicarios",
			narrative: "Altísimo riesgo de derrumbe. Si el crimen sale a la luz, se acaba el gobierno.",
			effects: {
				corruption: 12,
				people: -10,
				prestige: -8,
				image: -12
			},
			riskGameOver: .62,
			riskReason: "crime",
			flags: ["sicarios"],
			ideology: { militar: 1 },
			log: "Se ordena un crimen de Estado."
		}
	},
	{
		id: "juicio_veredicto",
		speaker: "Tribunal oral",
		role: "Justicia",
		title: "El veredicto",
		text: "La sala está llena. El fiscal lee. No hay tercera vía entre la absolución política y la destitución.",
		art: "/art/scandal.jpg",
		kind: "escandalo",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		once: true,
		priority: 100,
		requireFlags: ["stood_trial"],
		yearsAdvance: 1,
		left: {
			label: "Aceptar el fallo",
			narrative: "Si el prestigio y la imagen sostienen, hay chance de zafar. Si no, el tribunal te destituye.",
			effects: {
				prestige: 2,
				people: 2
			},
			riskGameOver: .42,
			riskReason: "trial",
			log: "Se espera el fallo del tribunal."
		},
		right: {
			label: "Fugarse del recinto",
			narrative: "Peor. Parece admisión. El riesgo de caída es aún más alto.",
			effects: {
				prestige: -12,
				people: -10,
				image: -10,
				forces: -6
			},
			riskGameOver: .7,
			riskReason: "trial",
			log: "El mandatario huye del tribunal."
		}
	},
	{
		id: "revolta",
		speaker: "Columna de la plaza",
		role: "Calle",
		title: "La revuelta",
		text: "Ya no son cacerolas: son columnas. Si la felicidad no pega un salto ahora, la revolución no pide permiso.",
		art: "/art/crisis.jpg",
		kind: "revolta",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		priority: 100,
		yearsAdvance: 0,
		left: {
			label: "Reparto de emergencia y diálogo",
			narrative: "Última chance. Cuesta caja e inflación; puede evitar el final.",
			effects: {
				people: 14,
				economy: -10,
				inflation: 8,
				corruption: 4,
				forces: -4
			},
			flags: ["revolt_handled"],
			log: "Se intenta desactivar la revuelta con emergencia social."
		},
		right: {
			label: "Gendarmería a la plaza",
			narrative: "Fuego. Si falla, es revolución. Si pega, es una herida que no cierra.",
			effects: {
				forces: 8,
				people: -16,
				prestige: -8,
				image: -10
			},
			flags: ["revolt_repressed"],
			ideology: { militar: 1 },
			log: "Represión de la revuelta."
		}
	},
	{
		id: "inseguridad",
		speaker: "Jefa de policía",
		role: "Seguridad",
		title: "La ciudad tomada",
		text: "Con las fuerzas en mínima, la violencia urbana deja de ser un gráfico. Piden gendarmería o un plan social que ya no hay con qué pagar.",
		art: "/art/crisis.jpg",
		kind: "flavor",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		maxStats: { forces: 24 },
		priority: 78,
		weight: 1.2,
		yearsAdvance: 1,
		left: {
			label: "Toque de queda y tropas",
			narrative: "Orden corto. El pueblo se asusta; el cuartel sonríe.",
			effects: {
				forces: 10,
				people: -8,
				image: -4,
				prestige: -2
			},
			ideology: { militar: 1 },
			log: "Toque de queda por inseguridad."
		},
		right: {
			label: "Plan de barrios y trabajo",
			narrative: "Más lento. Si no hay caja, es un discurso.",
			effects: {
				people: 6,
				economy: -8,
				forces: 2,
				inflation: 3
			},
			log: "Plan social contra la inseguridad."
		}
	},
	{
		id: "invasion",
		speaker: "Agregado militar",
		role: "Defensa",
		title: "Presión en la frontera",
		text: "Con el ejército desleído y el prestigio en el piso, una potencia prueba hechos. Un guardacostas que no sale, un mapa que se mueve.",
		art: "/art/malvinas.jpg",
		kind: "flavor",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		maxStats: {
			forces: 18,
			prestige: 30
		},
		priority: 85,
		weight: 1.1,
		yearsAdvance: 1,
		left: {
			label: "Protesta diplomática y alianzas",
			narrative: "Si la imagen aún vale, hay quien atienda. Si no, es papel.",
			effects: {
				prestige: 6,
				image: 4,
				forces: -4,
				people: -4
			},
			riskGameOver: .28,
			riskReason: "invasion",
			log: "Protesta diplomática ante una presión fronteriza."
		},
		right: {
			label: "Movilizar lo que queda",
			narrative: "Último cartucho militar. Puede ser disuasión o el final del mapa.",
			effects: {
				forces: 8,
				economy: -8,
				people: -6,
				prestige: -4
			},
			riskGameOver: .34,
			riskReason: "invasion",
			ideology: { militar: 1 },
			log: "Movilización ante presión extranjera."
		}
	},
	{
		id: "prestamo_baring",
		speaker: "Casa Baring",
		role: "Crédito",
		title: "Oro a crédito",
		text: "Un empréstito ofrece alivio. Pedirlo alimenta al asesino silencioso. Si el prestigio es bajo o el mercado está cerrado, ni siquiera te atienden.",
		art: "/art/nineties.jpg",
		kind: "flavor",
		eras: [
			"independencia",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1824,
		priority: 36,
		weight: .9,
		yearsAdvance: 1,
		left: {
			label: "Tomar el crédito",
			narrative: "Caja ahora, inflación después. El mercado cobra en imagen.",
			effects: {
				economy: 8,
				prestige: 2,
				inflation: 14,
				corruption: 4,
				people: -2,
				image: -2,
				money: 24e5
			},
			flags: ["debt"],
			log: "Nuevo empréstito externo."
		},
		right: {
			label: "Vivir con lo nuestro",
			narrative: "Ajuste interno. Duro, soberano, impopular.",
			effects: {
				prestige: -2,
				economy: -6,
				people: 3,
				inflation: -2,
				corruption: -2
			},
			log: "Se rechaza el crédito; hay ajuste interno."
		}
	},
	{
		id: "educacion",
		speaker: "Maestra rural",
		role: "Educación",
		title: "La escuela o el cuartel",
		text: "Faltan maestros, edificios y un siglo de promesas. Un presupuesto serio se come otras partidas. El himno no alcanza.",
		art: "/art/independence.jpg",
		kind: "flavor",
		eras: [
			"independencia",
			"dictadura",
			"noventa",
			"dosmil",
			"dieciocho"
		],
		minYear: 1884,
		priority: 34,
		weight: .85,
		yearsAdvance: 1,
		left: {
			label: "Ley de financiamiento educativo",
			narrative: "Puede abrir un honoris causa. La caja lo siente.",
			effects: {
				people: 8,
				economy: -6,
				prestige: 6,
				inflation: 2
			},
			flags: ["education_push"],
			ideology: { rights: 1 },
			log: "Inversión educativa."
		},
		right: {
			label: "Dejarlo a las provincias",
			narrative: "Ahorra. La escuela queda a merced de cada gobernador.",
			effects: {
				economy: 4,
				people: -6,
				prestige: -3
			},
			log: "La escuela queda a merced de cada gobernador."
		}
	},
	{
		id: "polarizacion",
		speaker: "Consultor de imagen",
		role: "Gabinete",
		title: "La grieta",
		text: "La mitad del país no le cree a la otra. Podés gobernar para tu tercio o armar una mesa que nadie quiere.",
		art: "/art/rights.jpg",
		kind: "flavor",
		eras: ["dosmil", "dieciocho"],
		minYear: 2008,
		weight: 1.05,
		yearsAdvance: 1,
		left: {
			label: "Gobernar para los propios",
			narrative: "Animo de tribu, prestigio de país partido.",
			effects: {
				people: 5,
				prestige: -6,
				forces: 3,
				corruption: 4,
				image: -4
			},
			log: "Se profundiza la grieta."
		},
		right: {
			label: "Pacto transversal",
			narrative: "Estadista. Tu base se enoja.",
			effects: {
				prestige: 8,
				people: -4,
				corruption: -4,
				forces: -3,
				image: 6
			},
			ideology: { rights: 1 },
			log: "Intento de pacto transversal."
		}
	}
];
var EVENT_MAP = Object.fromEntries(EVENTS.map((e) => [e.id, e]));
function clamp(n, min = 0, max = 100) {
	return Math.max(min, Math.min(max, n));
}
function formatARS(n) {
	const rounded = Math.round(n);
	return `${rounded < 0 ? "-" : ""}$ ${Math.abs(rounded).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ARS`;
}
function inflationMultiplier(inflation) {
	return 1 + inflation / 45;
}
function shopPrice(base, inflation) {
	return Math.round(base * inflationMultiplier(inflation));
}
function reputationScore(state) {
	const s = state.stats;
	const awardBonus = Math.min(12, state.awards.length * 2);
	return clamp(s.people * .32 + s.prestige * .18 + s.image * .18 + (100 - s.corruption) * .14 + s.economy * .1 + awardBonus);
}
function rankFromScore(score) {
	let current = RANKS[0];
	for (const r of RANKS) if (score >= r.min) current = r;
	return current;
}
function rankOf(state) {
	return rankFromScore(reputationScore(state));
}
function isIdolOrProcer(rank) {
	return rank === "idolo" || rank === "absoluto" || rank === "procer";
}
function flashFromDelta(before, after) {
	if (after > before + .4) return "up";
	if (after < before - .4) return "down";
}
function yearLabel(state) {
	return `${Math.floor(state.calendarYear)}`;
}
function mandateLabel(state) {
	const y = Math.min(8 + (state.constitutionReformed ? 4 : 0), Math.floor(state.mandateYear) + 1);
	return `${state.term === 1 ? "1.er" : state.term === 2 ? "2.º" : "3.er"} mandato · año ${y}`;
}
var STAT_ORDER = [
	"economy",
	"people",
	"forces",
	"corruption",
	"prestige",
	"inflation",
	"image"
];
var SHOP = [
	{
		id: "carruaje",
		name: "Carruaje de gala",
		blurb: "Lacas, caballos y un estribo que se ve desde la recova. No hay jets en 1816.",
		costARS: 28e4,
		costInfluence: 0,
		minYear: 1816,
		maxYear: 1925,
		luxury: true,
		effects: {
			prestige: 4,
			image: 2
		},
		narrative: "Un lujo de época. Si el pueblo pasa hambre, la gazeta lo va a pintar como escándalo."
	},
	{
		id: "estancia",
		name: "Estancia en la pampa",
		blurb: "Hacienda, ganado y un apellido que suena a campo.",
		costARS: 16e5,
		costInfluence: 0,
		minYear: 1816,
		luxury: false,
		effects: {
			economy: 3,
			prestige: 4,
			influence: 4
		},
		narrative: "Patrimonio rural: suma abolengo y una caja chica ganadera."
	},
	{
		id: "plata",
		name: "Vajilla de plata",
		blurb: "Un tren de vida visible, sin necesidad de hangar.",
		costARS: 16e4,
		costInfluence: 0,
		minYear: 1816,
		maxYear: 1950,
		luxury: true,
		effects: {
			prestige: 3,
			influence: 3
		},
		narrative: "Brillo de salón. En años de carestía, parece una bofetada."
	},
	{
		id: "gazeta",
		name: "Financiar gazetas",
		blurb: "Hojas sueltas, grabados y un retrato favorable en la esquina.",
		costARS: 21e4,
		costInfluence: 2,
		minYear: 1816,
		maxYear: 1935,
		luxury: false,
		effects: {
			people: 10,
			corruption: 4
		},
		narrative: "Campaña de época: diarios y pasquines para intentar revertir una caída de popularidad."
	},
	{
		id: "caudillos",
		name: "Sobornar caudillos",
		blurb: "Montoneras que de pronto encuentran razones para no marchar.",
		costARS: 42e4,
		costInfluence: 6,
		minYear: 1816,
		maxYear: 1885,
		luxury: false,
		effects: {
			forces: 10,
			corruption: 8,
			people: -4
		},
		narrative: "Comprás lealtad armada. Baja el dinero; sube la tropa — y la mancha."
	},
	{
		id: "jueces",
		name: "Comprar jueces",
		blurb: "Expedientes que se duermen. La corrupción visible baja; la real, no.",
		costARS: 98e4,
		costInfluence: 12,
		minYear: 1853,
		luxury: false,
		effects: {
			corruption: -12,
			forces: 4,
			prestige: -6
		},
		narrative: "La causa se traspapela. Cuesta plata e influencia; el fuero respira."
	},
	{
		id: "guardia",
		name: "Guardia de honor",
		blurb: "Hombres de confianza en la puerta. El cuartel lo nota.",
		costARS: 36e4,
		costInfluence: 4,
		minYear: 1816,
		luxury: false,
		effects: {
			forces: 10,
			people: -2
		},
		narrative: "Más lealtad inmediata de las armas, a costa de una foto militarizada."
	},
	{
		id: "banquete",
		name: "Banquete diplomático",
		blurb: "Vinos, toasts y un mapa doblado entre cubiertos.",
		costARS: 95e3,
		costInfluence: 2,
		minYear: 1816,
		luxury: false,
		effects: {
			prestige: 5,
			image: 4,
			money: 0
		},
		narrative: "Cortesía de Estado: abre puertas y algún souvenir menor.",
		flags: ["hosted_banquet"]
	},
	{
		id: "mansion",
		name: "Mansión en Recoleta",
		blurb: "Mármol, palmeras y un hall para recibir embajadores.",
		costARS: 64e5,
		costInfluence: 0,
		minYear: 1853,
		luxury: true,
		effects: {
			prestige: 6,
			influence: 6
		},
		narrative: "Si la pobreza es alta, los noticieros van a cruzar tu jardín con el índice de indigencia."
	},
	{
		id: "diario",
		name: "Comprar un diario",
		blurb: "La tapa es tuya. La calle, a veces también.",
		costARS: 28e5,
		costInfluence: 6,
		minYear: 1890,
		maxYear: 2010,
		luxury: false,
		effects: {
			people: 9,
			prestige: 3,
			corruption: 6
		},
		narrative: "Influencia mediática clásica: papel y tinta para enderezar una elección fea."
	},
	{
		id: "radio_tv",
		name: "Cadena de radio y TV",
		blurb: "Un canal propio, un conductor amigo, un recuento piadoso.",
		costARS: 42e5,
		costInfluence: 8,
		minYear: 1951,
		maxYear: 2014,
		luxury: false,
		effects: {
			people: 12,
			corruption: 5,
			prestige: 2
		},
		narrative: "Campaña clásica de diarios y televisión, útil antes de un comicio."
	},
	{
		id: "yate",
		name: "Yate en el Tigre",
		blurb: "Cubierta de teca y fiestas que no salen en el Boletín Oficial.",
		costARS: 92e5,
		costInfluence: 0,
		minYear: 1962,
		luxury: true,
		effects: {
			people: 2,
			influence: 5,
			prestige: 3
		},
		narrative: "Lujo náutico. Con el pueblo en crisis, es una tapa anunciada."
	},
	{
		id: "jet",
		name: "Jet privado",
		blurb: "Despegás cuando querés. Los noticieros cuentan cada aterrizaje.",
		costARS: 22e6,
		costInfluence: 0,
		minYear: 1988,
		luxury: true,
		effects: {
			prestige: 6,
			influence: 5
		},
		narrative: "No existía en 1816. Hoy existe, y el escándalo también."
	},
	{
		id: "politicos",
		name: "Comprar bloques",
		blurb: "Bancadas que votan en fila. Sube la lealtad; baja el dinero.",
		costARS: 17e5,
		costInfluence: 10,
		minYear: 1853,
		luxury: false,
		effects: {
			forces: 6,
			people: -4,
			corruption: 8,
			influence: 6
		},
		narrative: "Influencia legislativa comprada. El cuartel y el Congreso se alinean un rato."
	},
	{
		id: "fundacion",
		name: "Fundación con tu nombre",
		blurb: "Hospitales, becas, una placa. Lava imagen, no siempre pecados.",
		costARS: 22e5,
		costInfluence: 0,
		minYear: 1920,
		luxury: false,
		effects: {
			people: 10,
			prestige: 6,
			corruption: -3
		},
		flags: ["health_plan"],
		narrative: "Filantropía visible: sube la estima y puede abrir premios de desarrollo."
	},
	{
		id: "bots",
		name: "Granja de bots y streamers",
		blurb: "Tendencias, cortes, un ejército que no vota pero grita.",
		costARS: 135e4,
		costInfluence: 4,
		minYear: 2012,
		luxury: false,
		effects: {
			people: 14,
			corruption: 6,
			prestige: -4
		},
		narrative: "Campaña moderna: útil si la popularidad se cae antes de una votación."
	},
	{
		id: "campana",
		name: "Campaña de urgencia",
		blurb: "Afiches, radios, asados. El pueblo te vuelve a mirar una semana.",
		costARS: 72e4,
		costInfluence: 3,
		minYear: 1916,
		maxYear: 2011,
		luxury: false,
		effects: {
			people: 12,
			corruption: 4
		},
		narrative: "Gasto electoral clásico para intentar evitar un balotaje o una derrota."
	},
	{
		id: "reforma",
		name: "Reforma constitucional",
		blurb: "Comprar el recinto para habilitar un tercer mandato.",
		costARS: 38e5,
		costInfluence: 22,
		minYear: 1853,
		minMandateYear: 4,
		luxury: false,
		effects: {
			corruption: 10,
			prestige: -6,
			people: -6
		},
		flags: ["constitution_reformed"],
		narrative: "Habilita la re-reelección. El costo político es inmediato; el poder, no tanto."
	}
];
function availableShop(year, mandateYear, owned) {
	return SHOP.filter((item) => {
		if (owned.includes(item.id)) return false;
		if (year < item.minYear) return false;
		if (item.maxYear && year > item.maxYear) return false;
		if (item.minMandateYear && mandateYear < item.minMandateYear) return false;
		return true;
	}).slice(0, 12);
}
var STAT_KEYS = [
	"economy",
	"people",
	"forces",
	"corruption",
	"prestige",
	"inflation",
	"image"
];
function addFlags(list, extra) {
	if (!extra?.length) return list;
	const set = new Set(list);
	for (const f of extra) set.add(f);
	return [...set];
}
function dropFlags(list, extra) {
	if (!extra?.length) return list;
	const drop = new Set(extra);
	return list.filter((f) => !drop.has(f));
}
function applyEffects(state, effects) {
	const stats = { ...state.stats };
	const flash = {};
	for (const key of STAT_KEYS) {
		const delta = effects[key];
		if (!delta) continue;
		const before = stats[key];
		let next = clamp(before + delta);
		if (key === "image") next = Math.min(next, state.imageCap);
		stats[key] = next;
		const f = flashFromDelta(before, next);
		if (f) flash[key] = f;
	}
	return {
		stats,
		money: Math.max(0, Math.round(state.money + (effects.money ?? 0))),
		influence: clamp(state.influence + (effects.influence ?? 0), 0, 100),
		flash
	};
}
function tickInflation(stats) {
	const next = { ...stats };
	if (next.inflation > 35) {
		const bite = Math.round((next.inflation - 35) / 14);
		next.economy = clamp(next.economy - bite);
		if (next.inflation > 70) next.people = clamp(next.people - 2);
	}
	if (next.forces < 22) next.people = clamp(next.people - 1);
	return next;
}
function collapseOf(state) {
	if (state.stats.corruption >= 100) return "corruption";
	if (state.stats.economy <= 0) return "economy";
	if (state.stats.prestige <= 0) return "prestige";
	if (state.stats.forces <= 0) return "forces";
	if (state.stats.people <= 0) return "people";
	if (state.flags.includes("revolt_repressed") && state.stats.people < 16) return "revolt";
	if (state.flags.includes("revolt_handled") && state.stats.people < 10) return "revolt";
	return null;
}
function endWith(state, kind, reason, title, body) {
	return {
		...state,
		phase: "end",
		endKind: kind,
		collapse: reason,
		endTitle: title,
		endBody: body,
		currentEventId: null,
		lastFlash: {}
	};
}
function snapshot(state) {
	return {
		...state,
		history: [...state.history, {
			year: Math.floor(state.calendarYear),
			mandateYear: state.mandateYear,
			stats: { ...state.stats },
			money: state.money
		}]
	};
}
function eligible(state, ev) {
	if (!ev.eras.includes(state.era)) return false;
	if (ev.once && state.seen.includes(ev.id)) return false;
	if (ev.minYear && state.calendarYear < ev.minYear - 8) return false;
	if (ev.maxYear && state.calendarYear > ev.maxYear + 6) return false;
	if (ev.requireFlags?.some((f) => !state.flags.includes(f))) return false;
	if (ev.forbidFlags?.some((f) => state.flags.includes(f))) return false;
	if (ev.minStats) {
		for (const [k, v] of Object.entries(ev.minStats)) if (state.stats[k] < v) return false;
	}
	if (ev.maxStats) {
		for (const [k, v] of Object.entries(ev.maxStats)) if (state.stats[k] > v) return false;
	}
	if (ev.kind === "desastre" && state.disastersUsed >= 3) return false;
	if (ev.id === "revolta" && !state.queued.includes("revolta")) return false;
	return true;
}
function pickEvent(state) {
	if (state.queued.length) {
		const id = state.queued[0];
		if (EVENT_MAP[id]) return id;
	}
	const pool = EVENTS.filter((e) => eligible(state, e) && e.id !== "revolta");
	if (!pool.length) return EVENTS.find((e) => e.eras.includes(state.era))?.id ?? EVENTS[0].id;
	const urgent = pool.filter((e) => (e.priority ?? 0) >= 80 && !state.seen.includes(e.id));
	if (urgent.length) {
		urgent.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
		return urgent[0].id;
	}
	const weighted = pool.flatMap((e) => Array(Math.max(1, Math.round((e.weight ?? 1) * 10))).fill(e.id));
	return weighted[Math.floor(Math.random() * weighted.length)] ?? pool[0].id;
}
function grantAwards(state, ids) {
	let next = state;
	const pending = [...state.pendingAwards];
	for (const id of ids) {
		const def = AWARD_MAP[id];
		if (!def || hasAward(next, id) || pending.includes(id)) continue;
		const applied = applyEffects(next, def.effects);
		next = {
			...next,
			stats: applied.stats,
			money: applied.money,
			influence: applied.influence,
			awards: [...next.awards, {
				id,
				year: Math.floor(next.calendarYear)
			}],
			souvenirs: def.category === "bajo" ? [...next.souvenirs, id] : next.souvenirs,
			pendingAwards: [...pending, id]
		};
		pending.push(id);
	}
	next = {
		...next,
		pendingAwards: pending
	};
	return next;
}
function maybeRevoltQueue(state) {
	const q = [...state.queued];
	if (state.stats.people <= 14 && !q.includes("revolta") && !state.seen.includes("revolta")) q.unshift("revolta");
	if (state.stats.forces <= 16 && !q.includes("inseguridad") && !state.seen.includes("inseguridad")) q.push("inseguridad");
	if (state.stats.forces <= 14 && state.stats.prestige <= 28 && !q.includes("invasion") && !state.seen.includes("invasion")) q.push("invasion");
	return q;
}
function afterCard(state) {
	if (state.pendingAwards.length) return {
		...state,
		phase: "award"
	};
	if (!(state.cardsInTerm >= 8)) {
		const nextId = pickEvent(state);
		return {
			...state,
			phase: "play",
			currentEventId: nextId,
			queued: state.queued.filter((id) => id !== nextId)
		};
	}
	if (state.term === 1) {
		const people = state.stats.people;
		const kind = people < 22 ? "lost" : people <= 48 ? "runoff" : "standard";
		return snapshot({
			...state,
			phase: "election",
			electionKind: kind,
			currentEventId: null,
			cardsInTerm: 0
		});
	}
	const maxTerms = state.constitutionReformed ? 3 : 2;
	if (state.term >= maxTerms && !state.isDictatorship) return {
		...state,
		phase: "extension",
		currentEventId: null,
		cardsInTerm: 0
	};
	if (state.constitutionReformed && state.term === 2) {
		const people = state.stats.people;
		const kind = people < 22 ? "lost" : people <= 48 ? "runoff" : "standard";
		return snapshot({
			...state,
			phase: "election",
			electionKind: kind,
			currentEventId: null,
			cardsInTerm: 0
		});
	}
	return finishLegacy(state);
}
function finishLegacy(state) {
	return snapshot(endWith(state, "legacy", null, `Legado: ${rankOf(state).label}`, legacyBlurb(state)));
}
function legacyBlurb(state) {
	const rank = rankOf(state);
	const bits = [];
	bits.push(`Gobernaste ${Math.floor(state.mandateYear)} años, de ${ERAS[state.era].start} a ${Math.floor(state.calendarYear)}, y el país te recuerda como ${rank.label.toLowerCase()}.`);
	if (state.isDictatorship) bits.push("La imagen exterior quedó marcada por el atajo autoritario: esa herida no se cierra.");
	if (state.flags.includes("independent")) bits.push("Tu firma está en el acta de la Independencia.");
	if (state.flags.includes("malvinas_war")) bits.push("Malvinas quedó atada a tu mandato, con todo lo que eso pesa.");
	if (state.flags.includes("convertibility")) bits.push("El uno a uno fue tu apuesta: precios quietos, herramientas rotas.");
	if (state.flags.includes("corralito")) bits.push("El corralito es una palabra que todavía se pronuncia con tu nombre.");
	if (state.flags.includes("abortion_law")) bits.push("La marea verde encontró un recinto que le abrió la puerta.");
	if (state.flags.includes("ukraine_aid")) bits.push("Kiev tiene una condecoración con tu apellido.");
	if (state.awards.length) bits.push(`El inventario de tu presidencia guarda ${state.awards.length} galardones y ${state.souvenirs.length} obsequios.`);
	bits.push(`Inflación al ${Math.round(state.stats.inflation)}%, imagen del país al ${Math.round(state.stats.image)}%, pueblo al ${Math.round(state.stats.people)}%.`);
	return bits.join(" ");
}
function beginRun(name, era) {
	const state = newRun(name, era);
	const id = pickEvent(state);
	return {
		...state,
		currentEventId: id,
		seen: id ? [id] : []
	};
}
function resolveChoice(state, side) {
	const ev = state.currentEventId ? EVENT_MAP[state.currentEventId] : null;
	if (!ev) return state;
	const choice = ev[side];
	if (choice.riskGameOver && Math.random() < choice.riskGameOver) {
		const reason = choice.riskReason ?? "crime";
		const copy = COLLAPSE_COPY[reason] ?? COLLAPSE_COPY.crime;
		return snapshot(endWith(state, "defeat", reason, copy.title, copy.body));
	}
	const applied = applyEffects(state, choice.effects);
	let imageCap = state.imageCap;
	let isDictatorship = state.isDictatorship;
	if (choice.dictatorship) {
		isDictatorship = true;
		imageCap = Math.min(imageCap, 18);
		applied.stats.image = Math.min(applied.stats.image, imageCap);
	}
	let ideology = { ...state.ideology };
	if (choice.ideology) for (const [k, v] of Object.entries(choice.ideology)) ideology[k] = ideology[k] + v;
	const yearGain = ev.yearsAdvance ?? ERAS[state.era].jump;
	const mandateGain = 4 / 8;
	let next = {
		...state,
		stats: tickInflation(applied.stats),
		money: applied.money,
		influence: applied.influence,
		lastFlash: applied.flash,
		flags: dropFlags(addFlags(state.flags, choice.flags), choice.unsetFlags),
		ideology,
		imageCap,
		isDictatorship,
		marketClosed: state.marketClosed || Boolean(choice.marketClosed),
		constitutionReformed: state.constitutionReformed || Boolean(choice.flags?.includes("constitution_reformed")),
		calendarYear: Math.min(ERAS[state.era].end, state.calendarYear + yearGain),
		mandateYear: state.mandateYear + mandateGain,
		cardsInTerm: state.cardsInTerm + 1,
		cardsTotal: state.cardsTotal + 1,
		seen: state.seen.includes(ev.id) ? state.seen : [...state.seen, ev.id],
		queued: state.queued.filter((id) => id !== ev.id),
		periodLog: [...state.periodLog, {
			year: Math.floor(state.calendarYear),
			title: ev.title,
			choice: choice.label,
			log: choice.log
		}],
		disastersUsed: state.disastersUsed + (ev.kind === "desastre" ? 1 : 0)
	};
	if (choice.followUp) next.queued = [choice.followUp, ...next.queued];
	const souvenirGrant = (choice.souvenirs ?? []).filter((id) => !hasAward(next, id));
	next = grantAwards(next, [...souvenirGrant, ...detectAwards(next)]);
	next.queued = maybeRevoltQueue(next);
	const collapsed = collapseOf(next);
	if (collapsed) {
		const copy = COLLAPSE_COPY[collapsed];
		return snapshot(endWith(next, "defeat", collapsed, copy.title, copy.body));
	}
	if (next.cardsInTerm === 6 && (next.term === 1 || next.term === 2 && next.constitutionReformed) && next.stats.people < 42 && !next.warnedThisTerm) return {
		...next,
		phase: "warning",
		warnedThisTerm: true
	};
	if (next.pendingAwards.length) return {
		...next,
		phase: "award"
	};
	return afterCard({
		...next,
		currentEventId: null
	});
}
function dismissAward(state) {
	const rest = state.pendingAwards.slice(1);
	const next = {
		...state,
		pendingAwards: rest
	};
	if (rest.length) return {
		...next,
		phase: "award"
	};
	if (next.phase === "warning") return next;
	return afterCard({
		...next,
		currentEventId: null,
		phase: "play"
	});
}
function continueAfterWarning(state) {
	if (state.pendingAwards.length) return {
		...state,
		phase: "award"
	};
	return afterCard({
		...state,
		phase: "play",
		currentEventId: null
	});
}
function resolveElection(state, option) {
	if (state.electionKind === "lost") {
		const copy = COLLAPSE_COPY.election;
		return snapshot(endWith(state, "defeat", "election", copy.title, copy.body));
	}
	let win = true;
	let next = {
		...state,
		electionKind: null,
		warnedThisTerm: false
	};
	if (option === "dictatorship") {
		const applied = applyEffects(next, {
			image: -50,
			prestige: -18,
			people: -16,
			corruption: 18,
			forces: 12
		});
		next = {
			...next,
			stats: applied.stats,
			imageCap: Math.min(next.imageCap, 18),
			isDictatorship: true,
			lastFlash: applied.flash
		};
		next.stats.image = Math.min(next.stats.image, next.imageCap);
		next.term += 1;
		next.flags = addFlags(next.flags, ["dictatorship_self"]);
		const collapsed = collapseOf(next);
		if (collapsed) {
			const copy = COLLAPSE_COPY[collapsed];
			return snapshot(endWith(next, "defeat", collapsed, copy.title, copy.body));
		}
		const id = pickEvent(next);
		return {
			...next,
			phase: "play",
			currentEventId: id,
			seen: id && !next.seen.includes(id) ? [...next.seen, id] : next.seen
		};
	}
	if (state.electionKind === "runoff") {
		win = Math.random() < (option === "dirty" ? .55 : .5);
		if (option === "dirty") {
			const applied = applyEffects(next, {
				money: -12e5,
				prestige: -8,
				corruption: 8,
				people: 4
			});
			next = {
				...next,
				stats: applied.stats,
				money: applied.money,
				lastFlash: applied.flash
			};
		}
	}
	if (!win) {
		const copy = COLLAPSE_COPY.election;
		return snapshot(endWith(next, "defeat", "election", copy.title, copy.body));
	}
	next.term += 1;
	const id = pickEvent(next);
	return {
		...next,
		phase: "play",
		currentEventId: id,
		seen: id && !next.seen.includes(id) ? [...next.seen, id] : next.seen
	};
}
function resolveExtension(state, option) {
	if (option === "leave") return finishLegacy(state);
	if (option === "reform") {
		const cost = shopPrice(38e5, state.stats.inflation);
		if (state.influence < 18 || state.money < cost) return finishLegacy({
			...state,
			periodLog: [...state.periodLog, {
				year: Math.floor(state.calendarYear),
				title: "Reforma fallida",
				choice: "Sin votos",
				log: "No alcanzaron la plata ni las influencias para tocar la Constitución."
			}]
		});
		const applied = applyEffects(state, {
			corruption: 10,
			prestige: -6,
			people: -6,
			money: -cost,
			influence: -18
		});
		return {
			...state,
			stats: applied.stats,
			money: applied.money,
			influence: applied.influence,
			constitutionReformed: true,
			flags: addFlags(state.flags, ["constitution_reformed"]),
			lastFlash: applied.flash,
			term: 2,
			phase: "election",
			electionKind: state.stats.people < 22 ? "lost" : state.stats.people <= 48 ? "runoff" : "standard"
		};
	}
	const applied = applyEffects(state, {
		image: -55,
		prestige: -20,
		people: -18,
		corruption: 20,
		forces: 14
	});
	const next = {
		...state,
		stats: applied.stats,
		imageCap: Math.min(state.imageCap, 18),
		isDictatorship: true,
		lastFlash: applied.flash,
		flags: addFlags(state.flags, ["dictatorship_self"]),
		term: state.term + 1,
		cardsInTerm: 0
	};
	next.stats.image = Math.min(next.stats.image, next.imageCap);
	const collapsed = collapseOf(next);
	if (collapsed) {
		const copy = COLLAPSE_COPY[collapsed];
		return snapshot(endWith(next, "defeat", collapsed, copy.title, copy.body));
	}
	const id = pickEvent(next);
	return {
		...next,
		phase: "play",
		currentEventId: id
	};
}
function buyItem(state, itemId) {
	const item = SHOP.find((s) => s.id === itemId);
	if (!item) return { error: "Ese artículo ya no está en el inventario." };
	const price = shopPrice(item.costARS, state.stats.inflation);
	if (state.owned.includes(item.id)) return { error: "Ya forma parte de tu patrimonio." };
	if (state.money < price) return { error: "No alcanzan los pesos." };
	if (state.influence < item.costInfluence) return { error: "No alcanza la influencia." };
	if (!availableShop(state.calendarYear, state.mandateYear, state.owned).some((i) => i.id === item.id)) return { error: "Ese lujo todavía no existe en esta era." };
	let effects = {
		...item.effects,
		money: -price,
		influence: -item.costInfluence
	};
	const poor = state.stats.people < 46 || state.stats.economy < 40;
	if (item.luxury && poor) effects = {
		...effects,
		people: (effects.people ?? 0) - 20,
		corruption: (effects.corruption ?? 0) + 14,
		prestige: (effects.prestige ?? 0) - 6
	};
	const applied = applyEffects(state, effects);
	let next = {
		...state,
		stats: applied.stats,
		money: applied.money,
		influence: applied.influence,
		lastFlash: applied.flash,
		owned: [...state.owned, item.id],
		flags: addFlags(state.flags, item.flags),
		constitutionReformed: state.constitutionReformed || item.id === "reforma",
		periodLog: [...state.periodLog, {
			year: Math.floor(state.calendarYear),
			title: item.name,
			choice: "Adquisición",
			log: item.luxury && poor ? `Escándalo: compró ${item.name} con el pueblo en crisis.` : `Adquirió ${item.name}.`
		}]
	};
	const collapsed = collapseOf(next);
	if (collapsed) {
		const copy = COLLAPSE_COPY[collapsed];
		return snapshot(endWith(next, "defeat", collapsed, copy.title, copy.body));
	}
	next = grantAwards(next, detectAwards(next));
	if (next.pendingAwards.length) return {
		...next,
		phase: "award"
	};
	return next;
}
function takeLoan(state) {
	if (state.marketClosed) return { error: "El mercado está cerrado. Nadie descuenta tus papeles." };
	if (state.stats.prestige < 28) return { error: "Sin prestigio no hay mostrador que te atienda." };
	if (state.stats.image < 22 || state.imageCap <= 20) return { error: "La imagen del país no sostiene un rollover." };
	const applied = applyEffects(state, {
		money: 48e5,
		inflation: 14,
		prestige: -3,
		image: -3,
		economy: 4
	});
	return {
		...state,
		stats: applied.stats,
		money: applied.money,
		lastFlash: applied.flash,
		flags: addFlags(state.flags, ["debt"]),
		periodLog: [...state.periodLog, {
			year: Math.floor(state.calendarYear),
			title: "Empréstito",
			choice: "Tomar crédito",
			log: "Se tomó un préstamo. La inflación, el asesino silencioso, se alimentó."
		}]
	};
}
function loadLegacy() {
	try {
		const raw = localStorage.getItem(LEGACY_KEY);
		if (!raw) return {
			...DEFAULT_LEGACY,
			unlockedEras: [...DEFAULT_LEGACY.unlockedEras]
		};
		const parsed = JSON.parse(raw);
		return {
			...DEFAULT_LEGACY,
			...parsed,
			unlockedEras: Array.from(/* @__PURE__ */ new Set([...parsed.unlockedEras ?? [], ...DEFAULT_LEGACY.unlockedEras]))
		};
	} catch {
		return {
			...DEFAULT_LEGACY,
			unlockedEras: [...DEFAULT_LEGACY.unlockedEras]
		};
	}
}
function saveLegacy(legacy) {
	try {
		localStorage.setItem(LEGACY_KEY, JSON.stringify(legacy));
	} catch {}
}
function loadRun() {
	try {
		const raw = localStorage.getItem(RUN_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (parsed.version !== 2) return null;
		return parsed;
	} catch {
		return null;
	}
}
function saveRun(state) {
	try {
		if (!state) localStorage.removeItem(RUN_KEY);
		else localStorage.setItem(RUN_KEY, JSON.stringify(state));
	} catch {}
}
function recordRunEnd(state, legacy) {
	const rank = rankOf(state);
	const unlocked = new Set(legacy.unlockedEras);
	if (isIdolOrProcer(rank.id)) {
		unlocked.add("dosmil");
		unlocked.add("dieciocho");
	}
	const order = [
		"odiado",
		"querido",
		"amado",
		"idolo",
		"absoluto",
		"procer"
	];
	const next = {
		version: 2,
		unlockedEras: [...unlocked],
		bestRank: order.indexOf(rank.id) > order.indexOf(legacy.bestRank) ? rank.id : legacy.bestRank,
		runs: legacy.runs + 1,
		idolRuns: legacy.idolRuns + (isIdolOrProcer(rank.id) ? 1 : 0)
	};
	saveLegacy(next);
	return next;
}
function persist(state) {
	saveRun(state);
}
var useGame = create((set, get) => ({
	hydrated: false,
	state: null,
	legacy: {
		version: 2,
		unlockedEras: [
			"independencia",
			"dictadura",
			"noventa"
		],
		bestRank: "querido",
		runs: 0,
		idolRuns: 0
	},
	overlay: null,
	toast: null,
	hydrate: () => {
		if (get().hydrated) return;
		set({
			hydrated: true,
			legacy: loadLegacy(),
			state: loadRun()
		});
	},
	start: (name, era) => {
		const state = beginRun(name, era);
		persist(state);
		set({
			state,
			overlay: null,
			toast: null,
			hydrated: true
		});
	},
	choose: (side) => {
		const cur = get().state;
		if (!cur || cur.phase !== "play") return;
		let next = resolveChoice(cur, side);
		if (next.phase === "end") {
			const legacy = recordRunEnd(next, get().legacy);
			persist(next);
			set({
				state: next,
				legacy,
				overlay: null
			});
			return;
		}
		persist(next);
		set({ state: next });
	},
	buy: (id) => {
		const cur = get().state;
		if (!cur) return;
		const next = buyItem(cur, id);
		if ("error" in next) {
			set({ toast: next.error });
			return;
		}
		if (next.phase === "end") {
			const legacy = recordRunEnd(next, get().legacy);
			persist(next);
			set({
				state: next,
				legacy,
				overlay: null,
				toast: null
			});
			return;
		}
		persist(next);
		set({
			state: next,
			toast: "Adquisición registrada en el patrimonio."
		});
	},
	loan: () => {
		const cur = get().state;
		if (!cur) return;
		const next = takeLoan(cur);
		if ("error" in next) {
			set({
				toast: next.error,
				overlay: "loan"
			});
			return;
		}
		persist(next);
		set({
			state: next,
			toast: "Crédito acreditado. La inflación, el asesino silencioso, se alimentó."
		});
	},
	setOverlay: (o) => set({ overlay: o }),
	dismissAward: () => {
		const cur = get().state;
		if (!cur) return;
		const next = dismissAward(cur);
		persist(next);
		set({ state: next });
	},
	skipWarning: () => {
		const cur = get().state;
		if (!cur) return;
		const next = continueAfterWarning(cur);
		persist(next);
		set({
			state: next,
			overlay: null
		});
	},
	election: (option) => {
		const cur = get().state;
		if (!cur) return;
		const next = resolveElection(cur, option);
		if (next.phase === "end") {
			const legacy = recordRunEnd(next, get().legacy);
			persist(next);
			set({
				state: next,
				legacy,
				overlay: null
			});
			return;
		}
		persist(next);
		set({ state: next });
	},
	extension: (option) => {
		const cur = get().state;
		if (!cur) return;
		const next = resolveExtension(cur, option);
		if (next.phase === "end") {
			const legacy = recordRunEnd(next, get().legacy);
			persist(next);
			set({
				state: next,
				legacy,
				overlay: null
			});
			return;
		}
		persist(next);
		set({ state: next });
	},
	abandon: () => {
		persist(null);
		set({
			state: null,
			overlay: null
		});
	},
	clearToast: () => set({ toast: null })
}));
function SunMark({ className = "size-7" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "10",
				fill: "#F4F8FC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "6.5",
				fill: "#74ACDF"
			}),
			Array.from({ length: 16 }, (_, i) => {
				const a = i * Math.PI / 8;
				const inner = 13;
				const outer = i % 2 === 0 ? 22 : 18;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: 32 + Math.cos(a) * inner,
					y1: 32 + Math.sin(a) * inner,
					x2: 32 + Math.cos(a) * outer,
					y2: 32 + Math.sin(a) * outer,
					stroke: "#74ACDF",
					strokeWidth: i % 2 === 0 ? 2.2 : 1.4,
					strokeLinecap: "round"
				}, i);
			})
		]
	});
}
var LINES = [
	{
		key: "economy",
		color: "#74ACDF"
	},
	{
		key: "people",
		color: "#C5DDF0"
	},
	{
		key: "forces",
		color: "#8AA7C2"
	},
	{
		key: "inflation",
		color: "#B85C6A"
	},
	{
		key: "image",
		color: "#6B9E8A"
	}
];
function EndScreen() {
	const state = useGame((s) => s.state);
	const abandon = useGame((s) => s.abandon);
	const rank = rankOf(state);
	const awards = state.awards.map((a) => AWARD_MAP[a.id]).filter(Boolean);
	const data = state.history.map((h) => ({
		name: String(h.year),
		...h.stats
	}));
	const victory = state.endKind !== "defeat";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flag-ribbon" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/office.jpg",
					alt: "",
					className: "absolute inset-0 h-64 w-full object-cover opacity-40"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/20 to-navy" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-4 pb-16 pt-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-celeste",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[0.68rem] uppercase tracking-[0.22em]",
							children: victory ? "Cierre de mandato" : "Caída del gobierno"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl text-paper sm:text-5xl",
						children: state.endTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-mist",
						children: state.endBody
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-xs uppercase tracking-[0.14em] text-celeste",
						children: [
							rank.label,
							" · ",
							formatARS(state.money),
							" · ",
							state.awards.length,
							" distinciones"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl",
						children: "Muestrario"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4",
						children: awards.length ? awards.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rounded-[16px] border border-paper/10 bg-navy-2 p-3 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: a.image,
									alt: "",
									className: "mx-auto size-16 rounded-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "mt-2 text-xs text-mist",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-subtle",
									children: a.category
								})
							]
						}, a.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "col-span-4 text-sm text-muted",
							children: "Sin medallas ni souvenirs en este mandato."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl",
						children: "Evolución de indicadores"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-64 rounded-[16px] border border-paper/10 bg-navy-2 p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "rgba(244,248,252,0.08)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										stroke: "#8AA7C2",
										fontSize: 11
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										domain: [0, 100],
										stroke: "#8AA7C2",
										fontSize: 11
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "#12263A",
										border: "1px solid rgba(244,248,252,0.12)",
										color: "#F4F8FC"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { formatter: (v) => STAT_LABEL[v] ?? v }),
									LINES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: l.key,
										stroke: l.color,
										dot: false,
										strokeWidth: 2
									}, l.key))
								]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: abandon,
						className: "mt-8 h-12 rounded-[8px] bg-paper px-6 font-semibold text-navy",
						children: "Nuevo mandato"
					})
				]
			})
		]
	});
}
function OverlayHost() {
	const state = useGame((s) => s.state);
	const overlay = useGame((s) => s.overlay);
	if (!state) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		state.phase === "award" && state.pendingAwards[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardModal, { id: state.pendingAwards[0] }) : null,
		state.phase === "warning" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningModal, {}) : null,
		state.phase === "election" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElectionModal, {}) : null,
		state.phase === "extension" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtensionModal, {}) : null,
		overlay === "shop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopSheet, {}) : null,
		overlay === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileSheet, {}) : null
	] });
}
function Frame({ children, onClose, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 flex items-end justify-center bg-navy/70 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			className: `anim-enter relative max-h-[90dvh] overflow-auto rounded-t-[24px] border border-paper/12 bg-navy-2 p-5 shadow-2xl sm:rounded-[24px] ${wide ? "w-full max-w-3xl" : "w-full max-w-lg"}`,
			children: [onClose ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute right-3 top-3 rounded-[8px] p-2 text-muted hover:text-paper",
				"aria-label": "Cerrar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			}) : null, children]
		})
	});
}
function AwardModal({ id }) {
	const dismiss = useGame((s) => s.dismissAward);
	const def = AWARD_MAP[id];
	if (!def) return null;
	const effects = Object.entries(def.effects).filter(([, v]) => typeof v === "number" && v !== 0).map(([k, v]) => `${v > 0 ? "+" : ""}${v} ${STAT_LABEL[k] ?? k}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-navy/80 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flag-wash anim-enter w-full max-w-md rounded-[24px] p-[10px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[16px] bg-navy px-6 py-8 text-center text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "medal-3d mx-auto mb-4 size-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: def.image,
							alt: "",
							className: "size-28 rounded-full object-cover",
							draggable: false
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.62rem] uppercase tracking-[0.22em] text-celeste",
						children: def.category === "dificil" ? "Galardón difícil" : def.category === "medio" ? "Galardón" : "Obsequio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl text-paper",
						children: def.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-mist",
						children: def.subtitle
					}),
					effects.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-celeste",
						children: effects.join(" · ")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: dismiss,
						className: "mt-6 h-12 w-full rounded-[8px] bg-paper font-semibold text-navy",
						children: "Registrar en el legado"
					})
				]
			})
		})
	});
}
function WarningModal() {
	const skip = useGame((s) => s.skipWarning);
	const setOverlay = useGame((s) => s.setOverlay);
	const modern = useGame((s) => s.state?.calendarYear ?? 0) >= 2012;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[0.68rem] uppercase tracking-[0.18em] text-bad",
			children: "Alerta de comicios"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-display text-3xl",
			children: "La popularidad no llega"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm leading-relaxed text-mist",
			children: [
				"Falta poco para las urnas y el pueblo está tibio. Una campaña de influencia puede evitar el balotaje o una derrota seca.",
				" ",
				modern ? "En esta era, eso son bots y streamers." : "En esta era, eso son diarios, radios y televisión."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					skip();
					setOverlay("shop");
				},
				className: "h-12 rounded-[8px] bg-paper font-semibold text-navy",
				children: "Abrir patrimonio y campañas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: skip,
				className: "h-12 rounded-[8px] border border-paper/20 font-medium text-paper",
				children: "Seguir sin gastar"
			})]
		})
	] });
}
function ElectionModal() {
	const state = useGame((s) => s.state);
	const election = useGame((s) => s.election);
	const kind = state.electionKind;
	if (kind === "lost") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[0.68rem] uppercase tracking-[0.18em] text-bad",
			children: "Comicios"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-display text-3xl",
			children: "Derrota automática"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-mist",
			children: "La popularidad está por el piso. Las urnas son un trámite: el recinto ya tiene otro nombre."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => election("standard"),
			className: "mt-5 h-12 w-full rounded-[8px] bg-paper font-semibold text-navy",
			children: "Entregar la banda"
		})
	] });
	const runoff = kind === "runoff";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[0.68rem] uppercase tracking-[0.18em] text-celeste",
			children: runoff ? "Balotaje" : "Elección presidencial"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-display text-3xl",
			children: runoff ? "Nadie sacó lo suficiente" : "El pueblo vota"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-mist",
			children: runoff ? "La popularidad está en el límite. Podés ir al balotaje limpio, ensuciar la campaña o cortar por lo sano." : "Los números dan. Aun así, hay quien ofrece atajos."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => election("standard"),
					className: "h-12 rounded-[8px] bg-paper font-semibold text-navy",
					children: runoff ? "Ir a balotaje estándar (50%)" : "Aceptar el recuento"
				}),
				runoff ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => election("dirty"),
					className: "h-12 rounded-[8px] border border-paper/20 font-medium text-paper",
					children: "Campaña sucia (55%) — cuesta pesos y prestigio"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => election("dictatorship"),
					className: "h-12 rounded-[8px] border border-bad/40 font-medium text-bad",
					children: "Eliminar a la oposición e instaurar dictadura"
				})
			]
		})
	] });
}
function ExtensionModal() {
	const extension = useGame((s) => s.extension);
	const cost = shopPrice(38e5, useGame((s) => s.state).stats.inflation);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[0.68rem] uppercase tracking-[0.18em] text-celeste",
			children: "Fin de los dos mandatos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-display text-3xl",
			children: "La Constitución o el cuartel"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm leading-relaxed text-mist",
			children: [
				"Ocho años. Podés dejar el poder con un legado, comprar una reforma (hace falta influencia y",
				" ",
				formatARS(cost),
				") o dar un golpe que destroza la imagen del país de forma irreversible."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => extension("leave"),
					className: "h-12 rounded-[8px] bg-paper font-semibold text-navy",
					children: "Dejar el poder"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => extension("reform"),
					className: "h-12 rounded-[8px] border border-paper/20 font-medium text-paper",
					children: "Reformar la Constitución"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => extension("coup"),
					className: "h-12 rounded-[8px] border border-bad/40 font-medium text-bad",
					children: "Golpe de Estado"
				})
			]
		})
	] });
}
function ShopSheet() {
	const state = useGame((s) => s.state);
	const buy = useGame((s) => s.buy);
	const loan = useGame((s) => s.loan);
	const setOverlay = useGame((s) => s.setOverlay);
	const toast = useGame((s) => s.toast);
	const items = availableShop(state.calendarYear, state.mandateYear, state.owned);
	const loanBlocked = state.marketClosed || state.stats.prestige < 28 || state.stats.image < 22 || state.imageCap <= 20;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		wide: true,
		onClose: () => setOverlay(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[0.68rem] uppercase tracking-[0.18em] text-celeste",
				children: "Vida personal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl",
				children: "Patrimonio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-mist",
				children: [
					formatARS(state.money),
					" · influencia ",
					Math.round(state.influence),
					" · inflación",
					" ",
					Math.round(state.stats.inflation),
					"% (encarece cada ítem)"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => {
					const price = shopPrice(item.costARS, state.stats.inflation);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col rounded-[16px] border border-paper/10 bg-navy p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-paper",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 flex-1 text-xs leading-relaxed text-muted",
								children: item.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-celeste",
								children: [formatARS(price), item.costInfluence ? ` · inf. ${item.costInfluence}` : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => buy(item.id),
								className: "mt-3 h-10 rounded-[8px] bg-paper text-sm font-semibold text-navy",
								children: "Adquirir"
							})
						]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-[16px] border border-paper/10 bg-navy p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: "Préstamo soberano"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Pedir crédito alimenta la inflación. Se bloquea si el prestigio es bajo, el mercado está cerrado o la imagen del país no sostiene."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: loanBlocked,
						onClick: loan,
						className: "mt-3 h-11 rounded-[8px] bg-celeste px-4 text-sm font-semibold text-navy disabled:opacity-40",
						children: loanBlocked ? "Crédito bloqueado" : `Tomar ${formatARS(48e5)}`
					})
				]
			}),
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-celeste",
				children: toast
			}) : null
		]
	});
}
function ProfileSheet() {
	const state = useGame((s) => s.state);
	const setOverlay = useGame((s) => s.setOverlay);
	const abandon = useGame((s) => s.abandon);
	const rank = rankOf(state);
	const awards = state.awards.map((a) => AWARD_MAP[a.id]).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		wide: true,
		onClose: () => setOverlay(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[0.68rem] uppercase tracking-[0.18em] text-celeste",
				children: "Legado en curso"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl",
				children: state.leaderName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-mist",
				children: [
					rank.label,
					" · ",
					state.awards.length,
					" galardones · ",
					state.souvenirs.length,
					" obsequios"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4",
				children: awards.length ? awards.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "rounded-[12px] border border-paper/10 bg-navy p-2 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: a.image,
						alt: "",
						className: "mx-auto size-14 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-1 text-[0.65rem] leading-tight text-mist",
						children: a.title
					})]
				}, a.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "col-span-4 text-sm text-muted",
					children: "Todavía no hay medallas en esta presidencia."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 max-h-40 overflow-auto text-sm text-mist",
				children: state.periodLog.slice(-8).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-l-2 border-celeste/40 py-1 pl-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.65rem] text-muted",
							children: l.year
						}),
						" ",
						l.log
					]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: abandon,
				className: "mt-5 h-11 rounded-[8px] border border-paper/20 px-4 text-sm text-mist",
				children: "Abandonar y volver al vestíbulo"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var ICONS = {
	economy: Landmark,
	people: Users,
	forces: Shield,
	corruption: Scale,
	prestige: Award,
	inflation: TrendingUp,
	image: Globe
};
function PlayScreen() {
	const state = useGame((s) => s.state);
	const choose = useGame((s) => s.choose);
	const overlay = useGame((s) => s.overlay);
	const setOverlay = useGame((s) => s.setOverlay);
	const ev = state.currentEventId ? EVENT_MAP[state.currentEventId] : null;
	const rank = rankOf(state);
	const score = reputationScore(state);
	const [brokenArt, setBrokenArt] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setBrokenArt(false);
	}, [ev?.id]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (state.phase !== "play" || overlay) return;
			const t = e.target;
			if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
			const sel = window.getSelection();
			if (sel && sel.toString().length > 0) return;
			if (e.key === "ArrowLeft") choose("left");
			if (e.key === "ArrowRight") choose("right");
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		choose,
		overlay,
		state.phase
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flag-ribbon" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-paper/10 px-3 py-3 sm:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMark, { className: "size-8 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-none text-paper",
							children: state.leaderName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted",
							children: [
								yearLabel(state),
								" · ",
								mandateLabel(state)
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[0.7rem] text-mist",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatARS(state.money)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-subtle",
								children: ["· inf. ", Math.round(state.influence)]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-3 max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-1 flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em] text-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Reputación · ", rank.label] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: Math.round(score)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-2 rounded-full bg-navy-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-celeste transition-[width] duration-300",
								style: { width: `${score}%` }
							}), RANKS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1/2 hidden h-2 w-px -translate-y-1/2 bg-paper/40 sm:block",
								style: { left: `${r.min}%` },
								title: r.label
							}, r.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 hidden justify-between font-mono text-[0.55rem] uppercase tracking-[0.12em] text-subtle sm:flex",
							children: RANKS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: r.id === rank.id ? "text-celeste" : "",
								children: r.label
							}, r.id))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-3 py-4 sm:px-5 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "grid grid-cols-2 gap-2 lg:grid-cols-1",
					children: [STAT_ORDER.map((key) => {
						const Icon = ICONS[key];
						const value = state.stats[key];
						const flash = state.lastFlash[key];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("rounded-[12px] border border-paper/10 bg-navy-2 p-2.5", (key === "corruption" ? value >= 78 : key === "inflation" ? value >= 70 : value <= 18) && "border-bad/40", flash === "up" && "stat-flash-up", flash === "down" && "stat-flash-down"),
							title: STAT_HINT[key],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), STAT_LABEL[key]]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-xs text-paper",
									children: Math.round(value)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 overflow-hidden rounded-full bg-navy-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("h-full rounded-full transition-[width,background-color] duration-300", key === "corruption" || key === "inflation" ? "bg-bad/80" : "bg-celeste"),
									style: { width: `${value}%` }
								})
							})]
						}, key);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 flex gap-2 lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOverlay("shop"),
							className: "flex h-11 flex-1 items-center justify-center gap-2 rounded-[8px] border border-paper/15 bg-navy-2 text-sm font-medium text-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-4" }), "Patrimonio"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOverlay("profile"),
							className: "flex h-11 flex-1 items-center justify-center gap-2 rounded-[8px] border border-paper/15 bg-navy-2 text-sm font-medium text-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" }), "Perfil"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "anim-enter min-w-0",
					children: ev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-[24px] border border-paper/10 bg-navy-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none relative aspect-[16/8] select-none",
								children: [
									brokenArt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flag-wash absolute inset-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ev.art,
										alt: "",
										draggable: false,
										onError: () => setBrokenArt(true),
										className: "absolute inset-0 h-full w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-2 via-transparent to-navy/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute left-3 top-3 rounded-[4px] bg-navy/70 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-celeste",
										children: ["Expediente · ", yearLabel(state)]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "select-text px-4 py-4 sm:px-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[0.68rem] uppercase tracking-[0.2em] text-celeste",
										children: [
											ev.role,
											" · ",
											ev.speaker
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-[1.7rem] leading-tight text-paper sm:text-3xl",
										children: ev.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-prose text-[0.95rem] leading-relaxed text-mist",
										children: ev.text
									})
								]
							}),
							state.phase === "play" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 p-4 pt-0 sm:grid-cols-2 sm:p-6 sm:pt-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Decree, {
									side: "A",
									choice: ev.left,
									onPick: () => choose("left")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Decree, {
									side: "B",
									choice: ev.right,
									onPick: () => choose("right")
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-6 pb-6 text-sm text-muted",
								children: "El recinto está en sesión privada."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[24px] border border-paper/10 bg-navy-2 p-8 text-mist",
						children: "El expediente está en pausa."
					})
				})]
			})
		]
	});
}
function Decree({ side, choice, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onPick,
		className: "rounded-[16px] border border-paper/12 bg-navy px-4 py-4 text-left transition-[border-color,transform] duration-150 hover:border-celeste/60 active:scale-[0.99]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-[0.62rem] uppercase tracking-[0.18em] text-subtle",
				children: ["Decreto ", side]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block font-display text-xl text-paper",
				children: choice.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-sm leading-relaxed text-muted",
				children: choice.narrative
			})
		]
	});
}
var ORDER = [
	"independencia",
	"dictadura",
	"noventa",
	"dosmil",
	"dieciocho"
];
function TitleScreen() {
	const start = useGame((s) => s.start);
	const legacy = useGame((s) => s.legacy);
	const [name, setName] = (0, import_react.useState)("El Mandatario");
	const [era, setEra] = (0, import_react.useState)("independencia");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/office.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover",
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flag-ribbon absolute inset-x-0 top-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-dvh w-full max-w-5xl flex-col justify-end px-4 pb-10 pt-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-3 text-celeste",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em]",
							children: "Presidencia de la Nación"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-xl font-display text-[3.1rem] leading-[0.92] tracking-[-0.03em] text-paper sm:text-6xl",
						children: "El Mandato"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-[0.95rem] leading-relaxed text-mist",
						children: "Dos mandatos de cuatro años. Un expediente por decisión. El pueblo, las armas y el mundo llevan la cuenta — vos no ves los números, ves las consecuencias."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-8 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle",
						children: ["Nombre de la presidencia", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "mt-2 h-12 w-full max-w-md rounded-[8px] border border-paper/15 bg-navy-2 px-3 text-[0.95rem] font-medium text-paper outline-none focus:border-celeste"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => start(name, era),
							className: "h-12 rounded-[8px] bg-paper px-6 text-sm font-semibold text-navy transition-transform duration-150 active:scale-[0.98]",
							children: "Asumir el mando"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle",
						children: "Elegí una era"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: ORDER.map((id) => {
							const meta = ERAS[id];
							const locked = meta.lockedByDefault && !legacy.unlockedEras.includes(id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: locked,
								onClick: () => setEra(id),
								className: `overflow-hidden rounded-[16px] border text-left transition-[transform,border-color] duration-150 ${era === id ? "border-celeste" : "border-paper/12"} ${locked ? "opacity-50" : "hover:border-paper/30"} bg-navy-2`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-24 overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: meta.art,
										alt: "",
										className: "pointer-events-none h-full w-full object-cover select-none",
										draggable: false
									}), locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 flex items-center justify-center bg-navy/55",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5 text-mist" })
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-lg text-paper",
											children: meta.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[0.62rem] uppercase tracking-[0.14em] text-celeste",
											children: meta.span
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs leading-relaxed text-muted",
											children: locked ? "Se desbloquea al terminar una era inicial como Ídolo o Prócer." : meta.blurb
										})
									]
								})]
							}, id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => start(name, era),
							className: "h-12 rounded-[8px] bg-paper px-6 text-sm font-semibold text-navy transition-transform duration-150 active:scale-[0.98]",
							children: "Asumir el mando"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-subtle",
						children: "Las eras 2001 y 2018 están selladas hasta que un legado alcance Ídolo o Prócer."
					})
				]
			})
		]
	});
}
function GameApp() {
	const hydrated = useGame((s) => s.hydrated);
	const hydrate = useGame((s) => s.hydrate);
	const state = useGame((s) => s.state);
	const clearToast = useGame((s) => s.clearToast);
	const toast = useGame((s) => s.toast);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const t = window.setTimeout(clearToast, 3200);
		return () => window.clearTimeout(t);
	}, [toast, clearToast]);
	(0, import_react.useEffect)(() => {
		const onHide = () => {
			const s = useGame.getState().state;
			if (s) try {
				localStorage.setItem("el-mandato-run-v2", JSON.stringify(s));
			} catch {}
		};
		document.addEventListener("visibilitychange", onHide);
		window.addEventListener("pagehide", onHide);
		return () => {
			document.removeEventListener("visibilitychange", onHide);
			window.removeEventListener("pagehide", onHide);
		};
	}, []);
	if (!hydrated || !state || state.phase === "title") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {});
	if (state.phase === "end") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndScreen, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayScreen, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverlayHost, {}),
		toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-[8px] bg-paper px-4 py-2 text-sm font-medium text-navy",
			children: toast
		}) : null
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameApp, {});
}
//#endregion
export { Home as component };
