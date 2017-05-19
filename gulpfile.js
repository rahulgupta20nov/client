/**
 *  This is Gulp file to init and sevral gulp tasks splits in sevral gulp files in gulp directive (becoz to all together will getting to large)
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp');

/**
 *  it will load all the js and coffee files in the gulp directory
 *  and load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean .temp and dist directory and launch the
 *  build task to create new build in dist folder
 */
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
