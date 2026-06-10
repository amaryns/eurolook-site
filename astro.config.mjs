// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL canonique du site — OBLIGATOIRE pour le sitemap
  site: 'https://eurolookgroupe.com',

  // Trailing slash : on enlève (URLs propres sans slash final)
  trailingSlash: 'never',

  // Format des URLs : sans .html à la fin
  build: {
    format: 'directory',
  },

  // Intégrations Astro
  integrations: [
    sitemap({
      // Inclure toutes les pages publiques
      filter: (page) => {
        // On exclut les pages techniques qu'on ne veut pas indexer
        const excluded = [
          '/404',
          '/engagements', // ancienne page obsolète, à supprimer plus tard
        ];
        return !excluded.some((path) => page.includes(path));
      },

      // Priorité et fréquence par défaut
      changefreq: 'weekly',
      priority: 0.7,

      // Priorités personnalisées par type de page
      serialize(item) {
        // Home : priorité max
        if (item.url === 'https://eurolookgroupe.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Pages principales : priorité haute
        else if (
          item.url.includes('/entreprise') ||
          item.url.includes('/expertises') ||
          item.url.includes('/realisations') ||
          item.url.includes('/contact') ||
          item.url.includes('/la-fabrique')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Fiches projets et expertises individuelles
        else if (
          item.url.match(/\/expertises\/[^/]+$/) ||
          item.url.match(/\/realisations\/[^/]+$/)
        ) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Pages légales : priorité basse (Google les voit moins importantes)
        else if (
          item.url.includes('/mentions-legales') ||
          item.url.includes('/confidentialite') ||
          item.url.includes('/plan-du-site')
        ) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        return item;
      },

      // Langues
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
        },
      },
    }),
  ],
});
