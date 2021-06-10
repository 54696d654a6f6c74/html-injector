const path = require('path');

const serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js',
    library: {
        type: "commonjs2"
    }
  },
  mode: "production"
};

const clientConfig = {
  target: 'web',
  experiments: {
      outputModule: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: {
        type: "module"
    }
  },
  mode: "production"
};

module.exports = [serverConfig, clientConfig];
