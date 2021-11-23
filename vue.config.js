// module.exports = {
//     pluginOptions: {
// 		'style-resources-loader': {
// 			preProcessor: 'scss',
// 			patterns: ['./src/assets/scss/styles.scss']
// 		}
// 	},
// };

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/_variables.scss";'
      }
    }
  }
}