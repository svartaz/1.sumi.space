const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  rules: [
  ],
  async redirects() {
    return ["/suzuri", "/suzuri-mituru", "/suzuli-mitulu", "/char/1"].map(source => ({
      source,
      destination: "/char-1",
      permanent: true,
    })).concat([{
      source: "/suzuli-mitulu/ja",
      destination: "/char-1/ja",
      permanent: true,
    }])
  }
};