let {restore, build, pack} = require('gulp-dotnet-cli');
const path = require('path');
let gulp = require('gulp');
let nupkgPath =  path.resolve(process.cwd(), 'output');

console.log(nupkgPath);
gulp.task('pack', ()=>{
    return gulp.src('**/*.csproj')
        .pipe(restore())
        .pipe(build())
        .pipe(pack({
            output: nupkgPath,
            noBuild: true,
            noRestore: true,
            echo: true
    }));
});