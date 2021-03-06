
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cash-app-website/'
    : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons');
    config.module
      .rule('svg-spirit')
      .test(/\.svg$/)
      .include.add(dir).end() //只包含icons目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end();
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}]);
    config.module.rule('svg').exclude.add(dir);
  }
};

