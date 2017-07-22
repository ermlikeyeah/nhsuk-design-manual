const path = require('path');
const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const sass = require('metalsmith-sass');
const assets = require('metalsmith-assets');
const inPlace = require('metalsmith-in-place');
const ignore = require('metalsmith-ignore');
const nunjucks = require('nunjucks');
const importOnce = require('node-sass-import-once');
const relative = require('metalsmith-relative');
const markdownItNamedHeaders = require('markdown-it-named-headers');

const metalsmithMarkdown = require('metalsmith-markdownit')({
  html: true,
  typographer: true,
});

metalsmithMarkdown.use(markdownItNamedHeaders);

const env = nunjucks.configure([
  path.join(__dirname, 'node_modules/nhsuk-frontend/src/templates'),
  path.join(__dirname, 'src'),
  path.join(__dirname, 'layouts')
], { watch: false });

env.addGlobal('asset_path', filename => filename);

const metalsmith = Metalsmith(__dirname)
  .source('src')
  .use(relative())
  .use(metalsmithMarkdown)
  .use(sass({
    outputDir: 'assets/css/',
    includePaths: [
      path.join(__dirname, 'node_modules/nhsuk-frontend/dist/scss')
    ],
    importer: importOnce,
    importOnce: {
      index: true,
      css: true
    },
    sourceMap: true
  }))
  .use(inPlace({
    engine: 'nunjucks',
    pattern: '**/*.njk',
    rename: true
  }))
  .use(layouts({
    engine: 'nunjucks',
    default: 'default.njk',
    pattern: '**/*.{md,html,njk}'
  }))
  .use(assets({
    source: './node_modules/nhsuk-frontend/dist', // relative to the working directory
  }))
  .use(ignore([
    '**/_*.*',
    '_**/*',
    'assets/css/nhs*',
    'scss/**/*',
  ]))
  .destination('build');

module.exports = metalsmith;
