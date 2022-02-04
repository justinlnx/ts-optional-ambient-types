const path = require("path");
const cp = require("child_process");

const packages = [
  "package1",
  "package2",
];

const currPath = path.resolve(__dirname, "./packages");

packages.forEach((pkg) => {
  const pkgPath = path.join(currPath, pkg);
  console.log("build package ", pkg);

  cp.execSync("yarn build", {
    cwd: pkgPath,
    stdio: "pipe",
  });
});
