/**
 * 参考网站
 * https://www.npmjs.com/package/esbuild-css-modules-plugin
 * https://juejin.cn/post/6991018610068045860
 */
const esbuild = require("esbuild");
const path = require("path");
const serve = require("koa-static");
const Koa = require("koa");
const fse = require("fs-extra");
const postCssPlugin2 = require("esbuild-plugin-postcss2");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");

const postCssImport = require("postcss-import");
const cssModulesPlugin = require("esbuild-css-modules-plugin");
const autoprefixer = require("autoprefixer");
const postcsspx2rem = require("postcss-px2rem-exclude");
const app = new Koa();

// 启动编译好后自动刷新浏览器

const livereload = require("livereload");
const lrserver = livereload.createServer();
lrserver.watch(__dirname + "/dist");
// 使用静态服务
app.use(serve(path.join(__dirname + "/dist")));

esbuild
  .build({
    entryPoints: [path.resolve(__dirname, "./app.tsx")],
    outfile: path.resolve(__dirname, "./dist/index.js"),
    sourcemap: true,
    bundle: true,
    minify: true,
    target: ["esnext"],
    watch: {
      onRebuild(error, result) {
        if (error) console.error("watch build failed:", error);
        else {
          console.log("\x1B[36m%s\x1B[39m", "watch build succeeded");
          console.log("watch build succeeded:", result);
        }
      },
    },
    format: "esm",
    // plugins: [cssModulesPlugin()],

    plugins: [
      postCssPlugin({
        plugins: [
          postCssImport,
          postcsspx2rem({
            remUnit: 75,
            //过滤border 不转换
            propList: ["border"],
            exclude: /node_modules/i,
          }),
        ],
      }),
    ],
  })
  .then(async (res) => {
    const fileName = path.join(__dirname + "/dist/index.html");
    // 创建文件，如果文件不存在直接创建，存在不做任何事情
    await fse.ensureFile(fileName);
    // 把下面内容写入dist中的index.html文件中
    await fse.writeFileSync(
      fileName,
      `
    <!DOCTYPE html>
    <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="./index.css">
     </head>
     <body>
       <div id="root"></div>
     </body>
    <script src="./index.js"></script>
    <script>
 
    (function (doc) {
      document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
      ':35729/livereload.js?snipver=1"></' + 'script>');
      var root = doc.querySelector("html");
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
          var clientWidth = root.getBoundingClientRect().width;
          root.style.fontSize = Math.min(100 ,( clientWidth / 10 )) + "px";	
        };
        window.addEventListener(resizeEvt, recalc, false);
        return recalc();
    })(document);
  </script>
   </html>
   `
    );
    app.listen(3006, () => {
      console.log(`> Local:    http://localhost:3006/`);
    });
  });
