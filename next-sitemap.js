/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.dev-surya.online',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'],
};
