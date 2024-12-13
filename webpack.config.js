const path = require('path');

module.exports = {
  entry: './src/index.tsx',  // Точка входа (TypeScript + React)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Имя выходного файла
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Расширения файлов
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Для всех файлов .ts и .tsx
        use: 'ts-loader', // Используем ts-loader для компиляции TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.js$/, // Для файлов JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/, // Для SCSS файлов
        use: [
          'style-loader', // Вставка стилей в DOM
          'css-loader',   // Разбор CSS
          'sass-loader',  // Компиляция SCSS в CSS
        ],
      },
    ],
  },
  devtool: 'source-map', // Для дебага
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true, // Поддержка горячей перезагрузки
  },
  mode: 'development',
};