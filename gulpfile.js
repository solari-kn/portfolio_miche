var gulp = require("gulp");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob"); /* パーシャルファイルをまとめて取り込み */
var sourcemaps = require("gulp-sourcemaps"); /* ソースマップの書き出し */
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer"); /* ベンダーフィックス */
var cssdeclsort = require("css-declaration-sorter");
var gcmq = require("gulp-group-css-media-queries");/* メディアクエリのまとめ */

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return (
    gulp
      .src("./sass/**/*.scss")
      .pipe(
        plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
      )
      .pipe(sourcemaps.init()) /* ソースマップの書き出し */
      .pipe(sassGlob()) /* パーシャルファイルをまとめて取り込み */
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      /* sassのコンパイル形式 */
      .pipe(gcmq())
      .pipe(postcss([cssdeclsort({ order: "smacss" })]))
      .pipe(postcss([autoprefixer]))
      .pipe(sourcemaps.write("./")) /* ソースマップの書き出しと場所指定 */
      .pipe(gulp.dest("./css"))
  );
});

gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", gulp.series("sass"));
});
