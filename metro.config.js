const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      '@account': path.resolve(__dirname, 'account'),
      '@assets': path.resolve(__dirname, 'assets'),
      '@atoms': path.resolve(__dirname, 'atoms'),
      '@components': path.resolve(__dirname, 'components'),
      '@main': path.resolve(__dirname, 'main'),
      '@quiz': path.resolve(__dirname, 'quiz'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@word': path.resolve(__dirname, 'word'),
    },
  },
};
