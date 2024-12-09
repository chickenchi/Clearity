module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./screen'],
        alias: {
          '@account': './screen/account',
          '@assets': './screen/assets',
          '@components': './screen/components',
          '@main': './screen/main',
          '@quiz': './screen/quiz',
          '@utils': './screen/utils',
          '@word': './screen/word',
          '@atoms': './screen/atoms',
        },
      },
    ],
  ],
};
