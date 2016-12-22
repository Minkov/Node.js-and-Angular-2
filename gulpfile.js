const gulp = require('gulp');

const typescript = require('gulp-typescript'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify');

const nodemon = require('nodemon'),
    runSequence = require('run-sequence'),
    del = require('del');

const tsConfig = require('./tsconfig.json');

gulp.task('clean', () => {
    return del('dist/**/*');
    // return gulp.src('dist/**/*.*')
    //     .pipe(clean({ force: true }));
});

gulp.task('compile', () => {
    return gulp.src('src/**/*.ts')
        .pipe(typescript(tsConfig.compilerOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', () => {
    return gulp.src(['src/**/systemjs.config.js', 'src/**/*.html', 'src/**/*.css', 'src/**/*.pug'])
        .pipe(gulp.dest('dist'));
});

gulp.task('build', (done) => {
    runSequence('clean', 'compile', 'copy', function() {
        done();
    });
});
gulp.task('watch', ['serve'], () => {
    return watch('src/**/*', () => {
        gulp.run('build');
    });
});

gulp.task('serve', ['build'], function() {
    nodemon({
        script: 'dist/app.js',
        ext: 'js'
    }).on('restart', () => {
        gulp.src('server.js')
            .pipe(notify('Running the start tasks and stuff'));
    });
});