const path = require('path');

module.exports = {
  type: 'react',
  webpack: (config) => {
    ['index-basic', 'index-advanced'].forEach((name) => {
      config.entry[name] = [config.entry.index[0].replace('index', name)];
    });

    delete config.entry.index;

    return config;
  },
};
