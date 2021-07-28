var gulp = require('gulp');
var gzip = require('gulp-gzip');
var azure = require('gulp-azure-storage');

// gulp.task('compress', function() {
//   gulp.src(['./dist/**/*.*'])
//       .pipe(gzip({ append: false }))
//       .pipe(gulp.dest('./dist/compress'));
// });

var devAzure = {
	account: 'siteking',
	key: 'e85frjy3tcHvOqvvl25Fiwu82zwfJ577iQbBTI0dJgUd48I9cJB+ANnuD7dLFAPuFdm8QMLZz21VHEAe/29rLQ==',
	container: '$web',
	contentEncoding: 'gzip'
};


gulp.task('gzip-dev-azure', function() {
	return gulp.src(['./dist/**/*.*'])
				.pipe(gzip({
					append: false,
					threshold: false
				}))
				.pipe(azure.upload({
					account: devAzure.account,
					key: devAzure.key,
					container: devAzure.container,
					contentSettings: {
						contentEncoding: devAzure.contentEncoding,
						cacheControl: 'public, max-age=108000'
					}
				}));
});

gulp.task('gzip-dev-index-azure', ['gzip-dev-azure'], function() {
	return gulp.src(['./dist/index.html'])
				.pipe(azure.upload({
					account: devAzure.account,
					key: devAzure.key,
					container: devAzure.container,
					contentSettings: {
						cacheControl: 'public, max-age=108000'
					}
				}));
});

gulp.task('gzip-dev', ['gzip-dev-azure', 'gzip-dev-index-azure']);
