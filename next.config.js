const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: [
        'babel-loader',
        {
          loader: 'webpack-preprocessor-pug-tsx',
          options: {},
        },
      ],
    },
  ],
};