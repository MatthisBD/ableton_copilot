export default defineSitemapEventHandler(() => {
  return [
    {
      loc: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: '/features',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      loc: '/docs',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: '/pricing',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: '/download',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: '/contact',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: '/legal',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3,
    },
  ]
})
