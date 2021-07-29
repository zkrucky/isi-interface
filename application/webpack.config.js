const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [path.resolve(__dirname, "node_modules")],
    alias: {
      "dom-helpers/addClass": path.resolve(__dirname, "node_modules/dom-helpers/class/addClass"),
      "dom-helpers/removeClass": path.resolve(
        __dirname,
        "node_modules/dom-helpers/class/removeClass"
      )
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
