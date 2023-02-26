const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

// repository_name はそれぞれの値に置き換える
module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },
};