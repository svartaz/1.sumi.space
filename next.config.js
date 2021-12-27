module.exports = {
  trailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  basePath: process.env.BASE_PATH || '',
  rules: [
  ],
  async redirects() {
    return [{
      source: "/suzuli-mitulu/ja",
      destination: "/char/1/ja",
      permanent: false
    }].concat(
      ["/suzuri", "/suzuri-mituru", "/suzuli-mitulu"].map(source => ({
        source,
        destination: "/char/1",
        permanent: false
      }))
    );
  }
};