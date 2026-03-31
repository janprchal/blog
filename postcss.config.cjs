module.exports = {
  plugins: [
    require('postcss-preset-env')({
      // stage: 0 enables all modern CSS features
      stage: 0,
    }),
  ]
}