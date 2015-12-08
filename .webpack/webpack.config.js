module.exports = {
  entry: "./webpack.modules.js",
  output: {
    path: '../client/lib/compatibility',
    filename: "webpack.build.js"
  },
  module: {
    loaders: []
  }
};

