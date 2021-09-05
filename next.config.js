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
    console.log(config.node);
    // config.vendor.push('xlsx', 'file-saver');
    // config.node = { ...config.node, fs: 'empty' };
    // config.externals.push(
    //   { '../xlsx': 'var _XLSX' },
    //   { './cptable': 'var cptable' },
    //   { './jszip': 'jszip' }
    // );

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
});
