const glob = require('glob');
const path = require("path");

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "nesting-rules": true
      }
    },
    '@fullhuman/postcss-purgecss': {
      content: glob.sync('./src/**/*.{js,jsx}', {follow: true, nodir: true}),
      rejected: true,
      whitelist: [
        // these styles are dynamically generated by the CarouselConrols component
        // in reactstrap:
        "carousel-control-prev",
        "carousel-control-prev-icon",
        "carousel-control-next",
        "carousel-control-next-icon"
      ]
    }
  }
};
