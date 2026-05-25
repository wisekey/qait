/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.qait.ch',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
