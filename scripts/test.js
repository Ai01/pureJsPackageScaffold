// Node 环境下运行，将template下的内容复制到test目录下
/* eslint-disable */

const fs = require("fs-extra");
const path = require("path");
const { exec } = require("child_process");

// 判断template文件夹是否存在，不存在直接退出
const sourceDir = path.resolve(__dirname, "../generators/app/templates");
const isSourceDirExists = fs.pathExistsSync(sourceDir);
if (!isSourceDirExists) {
 console.warn("templates不存在");
 process.exit();
}

// 判断test文件夹是否存在，不存在创建，存在清空下面所有的内容
const targetDir = path.resolve(__dirname, "../test");
const isTargetDirExists = fs.pathExistsSync(targetDir);
if (isTargetDirExists) {
 fs.emptyDirSync(targetDir);
} else {
 fs.mkdirsSync(targetDir);
}

// 读取template文件夹下的所有内容, 将template文件夹的内容复制到test下面
fs.copySync(sourceDir, targetDir);

// 将test文件夹下的package.json文件中的占位符替换为名字

const packageJsonFileStr = fs.readFileSync(
 path.resolve(targetDir, "./package.json"),
 {
   encoding: "utf8"
 }
);
const newPackageJsonFileStr = packageJsonFileStr
 .replace(/\<\%\= packageVersion \%\>/, "1.0.0")
 .replace(/\<\%\=(.*)\%\>/gi, "test");

fs.writeFileSync(
 path.resolve(targetDir, "./package.json"),
 newPackageJsonFileStr,
 {
   encoding: "utf8"
 }
);

// 在test文件夹下执行npm install。方便调试
exec(
 "npm install",
 {
   cwd: targetDir
 },
 (error, stdout, stderr) => {
   if (error) {
     console.error(`exec error: ${error}`);
     return;
   }

   console.log(`stdout: ${stdout}`);
   console.error(`stderr: ${stderr}`);
 }
);
