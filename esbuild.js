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
// const cssModulesPlugin = require('esbuild-css-modules-plugin');
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
    // plugins: [
    //   cssModulesPlugin({
    //     // optional. set to false to not inject generated css into page;
    //     // default value is false when set `v2` to `true`, otherwise default is true,
    //     // if set to `true`, the generated css will be injected into `head`;
    //     // could be a string of css selector of the element to inject into,
    //     // e.g.
    //     // ```
    //     // inject: '#some-element-id' // the plugin will try to get `shadowRoot` of the found element, and append css to the `shadowRoot`, if no shadowRoot then append to the found element, if no element found then append to document.head
    //     // ```
    //     // could be a function with params content & digest (return a string of js code to inject to page),
    //     // e.g.
    //     // ```
    //     // inject: (cssContent, digest) => `console.log("${cssContent}", "${digest}")`
    //     // ```
    //     inject: false,
  
    //     localsConvention: 'camelCaseOnly', // optional. value could be one of 'camelCaseOnly', 'camelCase', 'dashes', 'dashesOnly', default is 'camelCaseOnly'
  
    //     generateScopedName: (name, filename, css) => string, // optional. refer to: https://github.com/madyankin/postcss-modules#generating-scoped-names
  
    //     cssModulesOption: {
    //       // optional, refer to: https://github.com/madyankin/postcss-modules/blob/d7cefc427c43bf35f7ebc55e7bda33b4689baf5a/index.d.ts#L27
    //       // this option will override others passed to postcss-modules
    //     },
  
    //     v2: true // experimental. v2 can bundle images in css, note if set `v2` to true, other options except `inject` will be ignored. and v2 only works with `bundle: true`.
    //   })
    // ]
  })
  .then(async (res) => {
    const fileName = path.join(__dirname + '/dist/index.html');
    // 创建文件，如果文件不存在直接创建，存在不做任何事情
    await fse.ensureFile(fileName);
    // 把下面内容写入dist中的index.html文件中
    await fse.writeFileSync(fileName, `
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
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>')
  </script>
   </html>
   `)
    app.listen(3000, () => {
      console.log(`> Local:    http://localhost:3000/`);
    });
  });
