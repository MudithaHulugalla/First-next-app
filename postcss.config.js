module.exports = {
  

  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },

  // webpack.config.js

  module: {
    rules: [
      

      // ... other rules

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  // ... other configurations
};

  

