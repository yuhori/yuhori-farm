const urlPrefix = '/yuhori-farm'

// repository_name はそれぞれの値に置き換える
module.exports = {
  assetPrefix: process.env.GITHUB_ACTIONS && urlPrefix,
  basePath: process.env.GITHUB_ACTIONS && urlPrefix,
  trailingSlash: true,
};