module.exports = {
  assetPrefix: process.env.BASE_PATH || '',
  basePath: process.env.BASE_PATH || '',
  trailingSlash: true,
  rules: [
  ],
  async redirects() {
    return [{
      source: "/suzuli-mitulu/ja",
      destination: "/char-1/ja",
      permanent: true,
    }].concat(
      ["/suzuri", "/suzuri-mituru", "/suzuli-mitulu", "/char/1"].map(source => ({
        source,
        destination: "/char-1",
        permanent: true,
      }))
    );
  }
};
