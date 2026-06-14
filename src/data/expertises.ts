// src/data/expertises.ts
// ═══════════════════════════════════════════════════════════════════════════
// SOURCE DE VÉRITÉ — TOUTES LES EXPERTISES EUROLOOK
// ═══════════════════════════════════════════════════════════════════════════
// Pour ajouter ou modifier une expertise : éditer ce fichier, c'est tout.
// La page src/pages/expertises/[slug].astro génère automatiquement les pages.
// ═══════════════════════════════════════════════════════════════════════════

export interface ProjetExemple {
  titre: string;
  details: string;
  montant?: string;
  client?: string;
}

export interface Expertise {
  slug: string;
  numero: string;
  titre: string;
  titreLong: string;
  tagline: string;
  meta: {
    title: string;
    description: string;
  };
  introduction: string[];
  methodologie: string[];
  interventions: string[];
  valeurAjoutee: { label: string; value: string }[];
  projetsExemples: ProjetExemple[];
  partenaires?: string[];
  laFabrique?: {
    presentation: string[];
    specialites: string[];
    equipement: string;
    partenaireInnovation: string;
    sousTraitants: string[];
  };
  ordre: number;
}

export const expertises: Expertise[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 01. RENFORCEMENT STRUCTUREL
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'renforcement-structurel',
    numero: '01',
    titre: 'Renforcement structurel',
    titreLong: 'RENFORCEMENT STRUCTUREL',
    tagline: "Cœur de métier — 50 % de notre activité",
    meta: {
      title: 'Renforcement structurel — Eurolook Construction | Reprise en sous-œuvre, béton, métal',
      description: "Spécialiste du renforcement structurel sur béton, métal et bois. Reprises de désordres post-audit Bureau Veritas pour Klépierre, Carmila et grands centres commerciaux. Partenariat ISER.",
    },
    introduction: [
      "Le renforcement structurel représente aujourd'hui plus de la moitié de l'activité d'Eurolook Construction. Issus d'années d'expérience aux côtés du cabinet d'ingénierie structure ISER, nos équipes interviennent sur tous types de supports — métal, bois, béton armé — pour redonner intégrité et durabilité aux ouvrages existants.",
      "Notre savoir-faire couvre l'ensemble du spectre du renforcement, depuis les pathologies du béton armé jusqu'aux structures métalliques corrodées, en passant par les reprises de charpente et les pontages de fissures sur parois intérieures et extérieures.",
    ],
    methodologie: [
      "Chaque chantier débute par la lecture détaillée du rapport d'audit du Bureau Veritas ou de l'ingénieur structure indépendant. Nos équipes établissent ensuite, en lien direct avec notre partenaire ISER, un plan d'intervention adapté à la pathologie identifiée et au contexte du site.",
      "Sur sites occupés — comme nos chantiers récurrents pour Klépierre dans les centres commerciaux Mayol, Rives d'Arcins ou Créteil Soleil — nous intervenons par phases successives, en respectant l'exploitation et les contraintes d'accès aux zones publiques.",
    ],
    interventions: [
      "Reprise d'éclats en pied de poteaux, mise en œuvre de corsets métalliques",
      "Pontage de fissurations sur parois intérieures et extérieures",
      "Reprise d'éclats sur agglomérés et béton",
      "Traitement d'armatures corrodées et apparentes",
      "Pose de bande carbone pour renforcement de dalles",
      "Renforcement de charpente métallique",
      "Renforcement de chéneaux et bracons sur structures métalliques",
      "Reprise d'oxydation et corrosion sur profilés métalliques",
      "Remplacement de résille de faux plafond",
      "Traitement des fissurations verticales, horizontales ou biaises",
    ],
    valeurAjoutee: [
      { label: "Part du CA", value: "50 %" },
      { label: "Partenariat", value: "ISER" },
      { label: "Référencement", value: "Klépierre" },
      { label: "Spécialité", value: "Site occupé" },
    ],
    projetsExemples: [
      { titre: "Klépierre — Centre commercial Mayol (Toulon)", details: "Reprise de gros-œuvre suite audit Bureau Veritas — corsets métalliques, pontage de fissurations, reprise d'éclats sur agglomérés.", montant: "105 000 € HT", client: "Klépierre" },
      { titre: "Klépierre — Créteil Soleil (94)", details: "Reprise de désordres post-audit Bureau Veritas — pose de bande carbone, traitement de fissurations en sous-face de dalle.", montant: "229 550 € HT", client: "Klépierre" },
      { titre: "Klépierre — Centre Champs de Mars (Angoulême)", details: "Renforcement structurel d'un chéneau et des bracons d'une structure métallique.", montant: "57 000 € HT", client: "Klépierre" },
      { titre: "CEDEO — Lyon Vaise", details: "Renforcement de charpente sur site d'exploitation logistique.", montant: "41 000 € HT", client: "CEDEO" },
    ],
    partenaires: ["ISER (ingénieur structure)", "Bureau Veritas"],
    ordre: 1,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 02. RÉHABILITATION TECHNIQUE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'rehabilitation-technique',
    numero: '02',
    titre: 'Réhabilitation technique',
    titreLong: 'RÉHABILITATION TECHNIQUE',
    tagline: "Intervention en site occupé, sans interruption d'activité",
    meta: {
      title: 'Réhabilitation technique en site occupé — Eurolook Construction',
      description: "Réhabilitation technique de centres commerciaux, agences bancaires et sites industriels en exploitation. Travaux de nuit, démolition ciblée, curage, reprises maçonnerie. Intervention en site occupé.",
    },
    introduction: [
      "La réhabilitation technique sur site en exploitation est l'une des expertises historiques d'Eurolook Construction. Centres commerciaux ouverts au public, agences bancaires en activité, sites industriels en production : nous intervenons là où d'autres ne peuvent pas, sans jamais interrompre l'activité de nos clients.",
      "Travaux de nuit, plans de prévention rigoureux, coordination quotidienne avec les équipes d'exploitation : chaque intervention en site occupé se prépare en amont avec un protocole sécurité et coactivité dédié.",
    ],
    methodologie: [
      "Chaque intervention en site occupé est encadrée par un système de management rigoureux fondé sur la qualité, la santé, la sécurité et l'environnement — avec un objectif prioritaire : zéro accident.",
      "Sur chaque chantier, un conducteur de travaux dédié assure l'interface avec le maître d'ouvrage, le maître d'œuvre et les équipes d'exploitation du site.",
    ],
    interventions: [
      "Démolition intérieure ciblée (cellules commerciales, agences, locaux techniques)",
      "Curage complet : mobilier, sols, cloisons, équipements de climatisation, câblages",
      "Création d'ouvertures en sous-œuvre",
      "Rebouchage d'ouvertures en maçonnerie",
      "Reprise de chape, ragréages de mise à niveau",
      "Reprise de maçonnerie agglomérée",
      "Travaux de nuit en zones bruyantes",
      "Coordination en environnement à fortes contraintes (sites en exploitation)",
    ],
    valeurAjoutee: [
      { label: "Sites occupés", value: "Spécialité" },
      { label: "Sécurité", value: "Prioritaire" },
      { label: "Travaux", value: "Nuit & WE" },
      { label: "Objectif", value: "Zéro accident" },
    ],
    projetsExemples: [
      { titre: "MRSE — Toulon Mayol", details: "Curage complet de cellules en centre commercial en exploitation : démolition mobilier, sol, chape, cloisons placo, agglos séparatifs, vitrines, rideaux, climatisation. Travail de nuit.", montant: "122 018 € HT", client: "MRSE" },
      { titre: "MRSE — Agences bancaires PACA", details: "Démolition intérieure de 3 agences bancaires (Manosque, Tarascon, Le Coustellet) : suppression de cloisons, murs blindés, coffres-forts, sols, menuiseries. Reprise maçonnerie et ragréage.", montant: "62 900 € HT", client: "MRSE" },
      { titre: "Cabinet Médical — Marseille (13015)", details: "Création d'un centre médical : dépose et pose de faux plafonds 60x60 sur ossature métallique, doublage périphérique, cloisons BA13, mise en peinture, pose de sol PVC grand passage.", montant: "100 567 € HT", client: "Cabinet Médical" },
      { titre: "Kem One — Lavera (13)", details: "Travaux de gros-œuvre et rénovation de locaux sur plusieurs unités d'un site pétrochimique en exploitation active. Création de dalle béton.", montant: "55 000 € HT", client: "Kem One" },
    ],
    ordre: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 03. AMÉNAGEMENT DE COMMERCES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'conception-amenagement-points-de-vente',
    numero: '03',
    titre: 'Conception & aménagement de points de vente',
    titreLong: 'CONCEPTION & AMÉNAGEMENT DE POINTS DE VENTE',
    tagline: "Déploiement multi-sites pour enseignes nationales",
    meta: {
      title: "Conception & aménagement de points de vente — Eurolook Construction",
      description: "Spécialiste de la conception et de l'aménagement de points de vente pour enseignes nationales. Référencé Carrefour, Carmila, Klépierre. La Barbe de Papa, Indémodable, Shoozze.",
    },
    introduction: [
      "Référencée auprès des principaux acteurs de l'immobilier commercial européen — Carrefour, Carmila, Klépierre — Eurolook Construction est devenue un partenaire de référence pour le déploiement et la réhabilitation de cellules commerciales sur le territoire national.",
      "Notre force : la capacité à industrialiser un savoir-faire artisanal. Du déploiement de 29 boutiques La Barbe de Papa à travers la France aux ouvertures de 9 enseignes Indémodable, nous gérons les délais de réouverture contractuels, les chartes enseigne et les contraintes des centres commerciaux en exploitation.",
    ],
    methodologie: [
      "Le déploiement multi-sites repose sur une planification rigoureuse et une coordination étroite avec les centres commerciaux et l'enseigne.",
      "Nos équipes travaillent de nuit pour les travaux bruyants dans les centres commerciaux ouverts, et coordonnent l'ensemble des corps d'état secondaires (climatisation, électricité, plomberie, agencement) pour une livraison clé en main.",
    ],
    interventions: [
      "Réhabilitation complète de cellules commerciales",
      "Démolition et curage des existants",
      "Création et déplacement de sanitaires et réserves",
      "Revêtements sols et murs, peinture",
      "Climatisation, électricité, plomberie",
      "Installation d'agencement spécifique enseigne",
      "Travail de nuit pour travaux bruyants",
      "Coordination multi-sites sur le territoire national",
    ],
    valeurAjoutee: [
      { label: "Référencements", value: "Carrefour, Carmila, Klépierre" },
      { label: "Boutiques livrées", value: "40+" },
      { label: "Couverture", value: "Nationale" },
      { label: "Multi-enseignes", value: "Spécialité" },
    ],
    projetsExemples: [
      { titre: "La Barbe de Papa — 29 boutiques (national)", details: "Réhabilitation complète de cellules commerciales pour le réseau national La Barbe de Papa : Nice, Marseille, Toulouse, Strasbourg, Rennes, Lyon, Le Mans, et 22 autres villes. Peinture, climatisation, sols, agencement.", montant: "70 000 € HT / boutique", client: "La Barbe de Papa" },
      { titre: "Indémodable — 9 boutiques", details: "Création de boutiques de vente de chaussures féminines sur toute la France (Nice, Vitrolles, Aix, Marseille, Uzès, Toulouse, Lescar, Anglet, Perpignan, Vénissieux). Démolition, sanitaires, revêtements, climatisation, agencement.", montant: "100 000 € HT / boutique", client: "Indémodable" },
      { titre: "Shoozze — Orange (84)", details: "Réhabilitation complète de cellule commerciale dans le cadre d'un déploiement multi-sites.", montant: "100 000 € HT", client: "Shoozze" },
      { titre: "Mon Petit Herbier — Marseille Bonneveine", details: "Création d'une boutique de vente de CBD pour Red Banana — peinture, climatisation, sol, électricité, plomberie.", montant: "41 000 € HT", client: "Red Banana" },
    ],
    ordre: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 04. MENUISERIE ALUMINIUM / LA FABRIQUE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'menuiserie-et-aluminium',
    numero: '04',
    titre: 'Menuiserie et aluminium',
    titreLong: 'MENUISERIE ET ALUMINIUM',
    tagline: "L'Atelier La Fabrique — Fabrication & pose intégrées",
    meta: {
      title: "Menuiserie et aluminium — La Fabrique | Eurolook Construction",
      description: "La Fabrique — atelier de fabrication et pose de menuiseries aluminium du groupe Holding MG. Murs rideaux, portes pare-balle et coupe-feu, façades. Partenaire Reynaers, machines FOM.",
    },
    introduction: [
      "Créée en 2021 pour compléter l'activité d'Eurolook Construction, La Fabrique est l'atelier de fabrication et de pose de menuiseries extérieures en aluminium du groupe Holding MG. Une jeune entreprise dynamique adossée à la solidité de la maison mère, dédiée aux professionnels exigeants.",
      "La Fabrique accompagne ses clients de la conception à la pose, en intégrant l'ensemble de la chaîne de production en interne : bureau d'étude, atelier de fabrication équipé des dernières générations de machines FOM, équipes de pose qualifiées.",
    ],
    methodologie: [
      "Le bureau d'étude de La Fabrique intervient dès la validation du devis pour établir la faisabilité technique de chaque projet. Cette approche en amont garantit la conformité des ouvrages aux exigences thermiques, acoustiques et sécuritaires des marchés cibles.",
      "L'atelier de fabrication, équipé de machines FOM dernière génération dans un environnement optimisé, permet une qualité d'exécution constante. Les équipes de pose interviennent ensuite sur site, avec un chef d'équipe dédié par chantier.",
    ],
    interventions: [
      "Murs rideaux aluminium",
      "Portes pare-balle",
      "Portes coupe-feu",
      "Portes à pivots déportés",
      "Façades aluminium sur mesure",
      "Menuiseries extérieures aluminium",
      "Bureau d'étude technique intégré",
      "Pose sur site avec équipes qualifiées",
    ],
    valeurAjoutee: [
      { label: "Atelier", value: "Machines FOM" },
      { label: "Partenaire innovation", value: "Reynaers" },
      { label: "Création", value: "2021" },
      { label: "Intégration", value: "Étude → Pose" },
    ],
    projetsExemples: [
      { titre: "EHPAD — 98 logements (Maule, 78)", details: "Fourniture et pose de murs-rideaux et menuiseries extérieures pour un EHPAD de 98 logements. Sous-traitance d'Eiffage Construction.", montant: "255 000 € HT", client: "Eiffage Construction" },
      { titre: "Fief de San Gregorio (Mugnano, Italie)", details: "Fourniture et pose de menuiseries extérieures sur un programme à l'international, en sous-traitance d'Arteco SRL.", montant: "1 200 000 € HT", client: "Arteco SRL" },
    ],
    laFabrique: {
      presentation: [
        "La Fabrique est l'entité dédiée à la menuiserie aluminium au sein du groupe Holding MG. Structure indépendante d'Eurolook Construction tout en bénéficiant de la solidité du groupe, elle dispose de ses propres équipes : administratif, commercial, technique, fabrication et pose.",
        "Découvrez en détail l'atelier La Fabrique sur sa page dédiée.",
      ],
      specialites: [
        "Murs rideaux",
        "Portes pare-balle et coupe-feu",
        "Portes à pivots déportés",
      ],
      equipement: "Atelier équipé de machines FOM dernière génération dans un environnement optimisé.",
      partenaireInnovation: "Reynaers Aluminium — leader européen de l'innovation thermique et des normes aluminium.",
      sousTraitants: ["Provence Prestige Menuiserie", "QID Infissi (Italie)"],
    },
    ordre: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 05. COORDINATION TECHNIQUE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'pilotage-coordination-chantier-opc',
    numero: '05',
    titre: 'Pilotage & coordination de chantier (OPC)',
    titreLong: 'PILOTAGE & COORDINATION DE CHANTIER',
    tagline: "Pilotage MOE/MOA, dessins exécutifs et OPC",
    meta: {
      title: "Pilotage & coordination de chantier (OPC) — Eurolook Construction",
      description: "Pilotage technique de chantier, dessins exécutifs, ordonnancement-pilotage-coordination (OPC), interface MOE/MOA. Conformité jusqu'à la réception OPR.",
    },
    introduction: [
      "Eurolook Construction propose à ses clients un pilotage technique complet de leurs opérations, depuis les dessins exécutifs jusqu'à la livraison contractuelle. Nous intervenons en interface entre la maîtrise d'œuvre, la maîtrise d'ouvrage et l'ensemble des corps d'état engagés sur le chantier.",
      "Notre service de coordination technique s'adresse aux maîtres d'ouvrage qui souhaitent confier le pilotage de leurs opérations à un partenaire unique, garant des délais, du budget et de la conformité réglementaire.",
    ],
    methodologie: [
      "Le pilotage d'une opération débute en amont du chantier par l'établissement des dessins exécutifs détaillés, à partir des plans de la maîtrise d'œuvre. Notre économiste du bâtiment travaille en lien direct avec le conducteur de travaux pour anticiper les contraintes techniques et budgétaires.",
      "Pendant le chantier, notre OPC orchestre l'intervention des différents corps d'état, anime les réunions de chantier hebdomadaires, suit les avenants et garantit la levée des réserves jusqu'à la réception définitive (OPR).",
    ],
    interventions: [
      "Dessins exécutifs et plans de réservation",
      "OPC — Ordonnancement Pilotage Coordination",
      "Planification multi-lots tous corps d'état",
      "Réunions de chantier et compte-rendu hebdomadaire",
      "Suivi des avenants et modifications de programme",
      "Interface MOE / MOA / entreprises",
      "Conformité réglementaire et normative",
      "Réception OPR et levée des réserves",
    ],
    valeurAjoutee: [
      { label: "Approche", value: "Multi-lots" },
      { label: "Interlocuteur", value: "Unique" },
      { label: "Suivi", value: "Hebdomadaire" },
      { label: "Engagement", value: "Délais & budget" },
    ],
    projetsExemples: [
      { titre: "Résidence Les Tulipes — Aix-en-Provence", details: "Dessins exécutifs et OPC pour Provence Habitat sur un programme de logements collectifs à Aix-en-Provence.", montant: "320 000 € HT", client: "Provence Habitat" },
      { titre: "Résidence Les Jardins d'Allori — Aix-en-Provence", details: "Dessins exécutifs et OPC pour un second programme Provence Habitat à Aix-en-Provence.", montant: "120 000 € HT", client: "Provence Habitat" },
    ],
    ordre: 5,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 06. AMÉNAGEMENT INTÉRIEUR
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'amenagements-tertiaires-finitions',
    numero: '06',
    titre: 'Aménagements tertiaires & finitions',
    titreLong: 'AMÉNAGEMENTS TERTIAIRES & FINITIONS',
    tagline: "Finitions haut de gamme tertiaire et commercial",
    meta: {
      title: "Aménagements tertiaires & finitions — Eurolook Construction",
      description: "Cloisons, faux plafonds, revêtements, fluides. Finitions haut de gamme pour espaces tertiaires, médicaux et commerciaux. Tous corps d'état coordonnés en interne.",
    },
    introduction: [
      "Au-delà du gros-œuvre et du renforcement, Eurolook Construction réalise l'intégralité des prestations d'aménagement intérieur pour les espaces tertiaires, médicaux et commerciaux. Notre approche : la coordination interne de tous les corps d'état secondaires.",
      "Cloisons, faux plafonds, revêtements, fluides : chaque prestation est coordonnée en interne pour garantir une finition homogène, un planning maîtrisé et un budget tenu.",
    ],
    methodologie: [
      "Nos équipes travaillent en collaboration avec un réseau d'artisans qualifiés sur les marchés exigeants — tertiaire de prestige, restauration, médical, agences bancaires. Cette mutualisation permet de garantir la qualité d'exécution sur des chantiers aux exigences variées.",
      "Sur chaque opération, un conducteur de travaux dédié assure la coordination entre les différents lots techniques. Du choix des matériaux à la livraison clé en main, nous accompagnons nos clients dans le respect de leurs contraintes et de leur identité visuelle.",
    ],
    interventions: [
      "Cloisons et doublages (BA13, coupe-feu 2h)",
      "Faux plafonds (dalles 60x60, ossature métallique)",
      "Revêtements sols (carrelage, PVC type Gerflor grand passage, parquet)",
      "Revêtements muraux et faïence",
      "Peinture (mise en peinture deux couches)",
      "Climatisation, électricité, plomberie",
      "Sanitaires haut de gamme",
      "Création et déplacement de réserves",
    ],
    valeurAjoutee: [
      { label: "Tous corps d'état", value: "Intégrés" },
      { label: "Coordination", value: "Interne" },
      { label: "Marchés", value: "Tertiaire & commercial" },
      { label: "Finitions", value: "Haut de gamme" },
    ],
    projetsExemples: [
      { titre: "Cabinet Médical — Marseille (13015)", details: "Création d'un centre médical : faux plafonds 60x60 sur ossature métallique, doublage périphérique, cloisons BA13, peinture deux couches, sol PVC grand passage type Gerflor.", montant: "100 567 € HT", client: "Cabinet Médical" },
      { titre: "La Barbe de Papa — Aménagement 29 boutiques", details: "Aménagement intérieur complet de cellules commerciales pour le réseau national La Barbe de Papa.", montant: "70 000 € HT / boutique", client: "La Barbe de Papa" },
      { titre: "Rénovation appartement — Aix-en-Provence", details: "Rénovation salle de bain et cuisine : dépose existant, pose nouveau carrelage et faïence, création douche avec bac et parois, fourniture et pose meuble vasque.", montant: "10 000 € HT", client: "Particulier" },
    ],
    ordre: 6,
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

export function getToutesLesExpertises(): Expertise[] {
  return [...expertises].sort((a, b) => a.ordre - b.ordre);
}

export function getExpertiseParSlug(slug: string): Expertise | undefined {
  return expertises.find(e => e.slug === slug);
}

export function getExpertisesSauf(slugExclu: string): Expertise[] {
  return expertises.filter(e => e.slug !== slugExclu).sort((a, b) => a.ordre - b.ordre);
}
