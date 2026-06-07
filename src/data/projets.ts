// src/data/projets.ts
// ═══════════════════════════════════════════════════════════════════════════
// SOURCE DE VÉRITÉ — TOUS LES PROJETS EUROLOOK
// ═══════════════════════════════════════════════════════════════════════════
// Ajouter un nouveau projet ici l'ajoutera AUTOMATIQUEMENT :
//   - à la page Réalisations  (/realisations)
//   - à la section "Chantiers marquants" de la homepage (si enAvant: true)
//
// IMPORTANT : pour chaque projet ici, il faut aussi créer la fiche complète
// dans src/pages/realisations/{slug}.astro  (avec le même slug)
// ═══════════════════════════════════════════════════════════════════════════

export interface Projet {
  slug: string;            // doit correspondre au fichier .astro dans /pages/realisations/
  titre: string;           // titre affiché sur les cards
  categorie: 'commercial' | 'structure' | 'residentiel' | 'industriel' | 'aluminium';
  categorieLabel: string;  // label avec majuscule (Commercial, Industriel...)
  lieu: string;            // lieu (ville)
  date: string;            // date de livraison (Mois Année)
  client: string;          // maître d'ouvrage
  resume: string;          // description courte (1-2 phrases, visible sur les cards)
  image: string;           // chemin vers la photo de couverture
  alt: string;             // alt text de l'image
  ordre: number;           // ordre d'affichage — plus grand = plus récent (en haut)
  enAvant: boolean;        // mis en avant sur la homepage (true = visible homepage)
}

export const projets: Projet[] = [
  {
    slug: 'four-poche-arcelormittal',
    titre: 'Four Poche ArcelorMittal',
    categorie: 'industriel',
    categorieLabel: 'Industriel',
    lieu: 'Fos-sur-Mer',
    date: 'Février 2023',
    client: 'ArcelorMittal',
    resume: 'Sous-traitance Eiffage Génie Civil — gros-œuvre béton (radier armé, murs blocs) pour locaux techniques industriels en environnement ATEX.',
    image: '/images/realisations/four-poche/05-pompe-beton.webp',
    alt: 'Four Poche ArcelorMittal — Eurolook Construction',
    ordre: 1,
    enAvant: true,
  },
  {
    slug: 'viaxoft-marseille',
    titre: 'Le ViaXoft Marseille',
    categorie: 'commercial',
    categorieLabel: 'Commercial',
    lieu: 'Marseille 13e',
    date: 'Novembre 2023',
    client: 'SCI Scampy',
    resume: "Sous-traitance MRSE — lot gros œuvre complet d'un bâtiment tertiaire R+1 contemporain, ZAC Château Gombert. Architecte : Atelier Yvann Pluskwa.",
    image: '/images/realisations/viaxoft-marseille/07-vue-ensemble.webp',
    alt: 'Le ViaXoft Marseille — Eurolook Construction',
    ordre: 2,
    enAvant: true,
  },
  {
    slug: 'happesmoke-westfield-velizy',
    titre: 'Happesmoke Westfield Vélizy 2',
    categorie: 'commercial',
    categorieLabel: 'Commercial',
    lieu: 'Vélizy-Villacoublay',
    date: 'Février 2022',
    client: 'SARL LEL',
    resume: "Aménagement clé en main d'un kiosque commercial à l'enseigne Happesmoke au centre commercial Westfield Vélizy 2 : parquet, habillage métallique et bois, électricité, éclairage et enseigne.",
    image: '/images/realisations/happesmoke-westfield-velizy/01-kiosque-livre.webp',
    alt: 'Happesmoke Westfield Vélizy 2 — Eurolook Construction',
    ordre: 0,
    enAvant: true,
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS — Fonctions pour récupérer les projets
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Récupère les projets mis en avant pour la homepage.
 * @param limite Nombre maximum de projets (défaut: 3)
 * @returns Liste des projets enAvant=true, triés du plus récent au plus ancien
 */
export function getProjetsEnAvant(limite = 3): Projet[] {
  return projets
    .filter(p => p.enAvant)
    .sort((a, b) => b.ordre - a.ordre)
    .slice(0, limite);
}

/**
 * Récupère tous les projets (utilisé sur la page Réalisations).
 * @returns Tous les projets triés du plus récent au plus ancien
 */
export function getTousLesProjets(): Projet[] {
  return [...projets].sort((a, b) => b.ordre - a.ordre);
}

/**
 * Récupère un projet par son slug.
 * @param slug Le slug du projet (ex: 'four-poche-arcelormittal')
 * @returns Le projet trouvé, ou undefined si introuvable
 */
export function getProjetParSlug(slug: string): Projet | undefined {
  return projets.find(p => p.slug === slug);
}
