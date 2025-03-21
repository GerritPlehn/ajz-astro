import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  site: 'https://ajz-neumuenster.de',
  integrations: [
    starlight({
      title: 'AJZ Neumünster',
      social: {
        facebook: 'https://www.facebook.com/Aktion.Jugendzentrum/',
        instagram: 'https://instagram.com/ajzneumuenster',
        youtube: 'https://www.youtube.com/channel/UCOs-WiK7Hd78vFBE3c4YN_A',
      },
      plugins: [starlightLinksValidator()],
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      logo: {
        src: './src/assets/AJZ.svg',
      },
      tableOfContents: false,
      sidebar: [
        {
          label: 'Über uns',
          slug: 'ueber-uns',
        },
        {
          label: 'Öffnungszeiten',
          slug: 'oeffnungszeiten',
        },
        {
          label: 'Kultur',
          autogenerate: { directory: 'kultur' },
        },
        {
          label: 'Veranstaltungen',
          autogenerate: { directory: 'veranstaltungen', collapsed: true },
        },
        {
          label: 'Offenes Angebot',
          autogenerate: { directory: 'offenes-angebot' },
        },
        {
          label: 'Förderungen',
          slug: 'foerderungen',
        },
        {
          label: 'Kontakt / Impressum',
          slug: 'kontakt',
        },
        {
          label: 'Social Media',
          slug: 'social-media',
        },
      ],
    }),
  ],
});
