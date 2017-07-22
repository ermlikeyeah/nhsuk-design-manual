const metalsmith = require('./');
const serve = require('metalsmith-serve');
const watch = require('metalsmith-watch');

metalsmith
  .use(serve({
    port: 5555
  }))
  .use(
    watch({
      paths: {
        '${source}/**/*': true,
        '${source}/scss/**/*.scss': 'scss/main.scss'
      }
    })
  )
  .build(err => {
    if (err) throw err;
    console.info('Build finished!');
  });
