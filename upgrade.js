//create nodejs script to upgrade all packages mentioned in package.json to latest version

import { exec } from 'child_process';
import pkgData from './package.json' assert { type: "json" };

const depNames = Object.keys(pkgData.dependencies);
const devDepNames = Object.keys(pkgData.devDependencies);

const allDepa = depNames.concat(devDepNames);

for (const depName of allDepa) {
  exec(`yarn add ${depName}@latest`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}

