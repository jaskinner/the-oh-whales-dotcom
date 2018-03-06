# Oh whales

This is the repo for the official Oh Whales website at https://theohwhales.com

## Dependencies

`gem install sass`
`npm i -g postcss-cli uglify-es imagemin-cli concurrently`
`npm i`

## Building and Editing

Editable source files are in the ./src directory, and will be built/compiled to the ./dist directory.

`npm run build`           One time build
`npm run watch`           Watches for and builds on changes to files in the ./src directory

`npm run run-sass`        Builds files in the ./src/sass directory
`npm run watch-sass`      Watches for and builds on changes to files in the ./src/sass directory

`npm run run-postcss`     Builds files in the ./src/css directory
`npm run watch-postcss`   Watches for and builds on changes to files in the ./src/css directory

`npm run run-uglify`      Builds files in the ./src/js directory
`npm run watch-uglify`    Watches for and builds on changes to files in the ./src/js directory

`npm run run-imagemin`     Optimizes images in the ./src/images directory
`npm run watch-imagemin`   Watches for and optimizes on changes to files in the ./src/images directory

## Serving

Serve the static dist/index.html file.
