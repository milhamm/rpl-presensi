const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  // modifyVars: {
  //   // '@primary-color': '#F37335',
  //   // '@font-family': "'Poppins', sans-serif",
  // },
  // optional
  lessVarsFilePath: './styles/variables.less',
  // optional
  // lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  // Other Config Here...
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    return config;
  },
});
