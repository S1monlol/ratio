import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context: { site: any; }) {
  return rss({
    title: 'Ratio',
    description: 'A website to collect all of my common arguments and rebuttles.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}
