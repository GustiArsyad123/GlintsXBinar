==================================
These is installations of packages
==================================

ade-ThinkPad-T450s% npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (oh-25)
version: (1.0.0)
description: CRUD using Mongoose
entry point: (index.js)
test command:
git repository:
keywords:
author: Gusti Arsyad
license: (ISC) MIT
About to write to /home/gustiarsyad/Documents/Gusti Arsyad baeng/Gusti Arsyad/glintsxbinar-1/Week 5/OH-25/package.json:

{
"name": "oh-25",
"version": "1.0.0",
"description": "CRUD using Mongoose",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "Gusti Arsyad",
"license": "MIT"
}

Is this OK? (yes)
ade-ThinkPad-T450s% npm i -D faker nodemon

> nodemon@2.0.14 postinstall /home/gustiarsyad/Documents/Gusti Arsyad baeng/Gusti Arsyad/glintsxbinar-1/Week 5/OH-25/node_modules/nodemon
> node bin/postinstall || exit 0

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN oh-25@1.0.0 No repository field.

- nodemon@2.0.14
- faker@5.5.3
  added 117 packages from 54 contributors and audited 118 packages in 29.363s

15 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

ade-ThinkPad-T450s% npm i dotenv express express-fileupload mongoose mongoose-delete validator
npm WARN oh-25@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

- dotenv@10.0.0
- validator@13.7.0
- express@4.17.1
- express-fileupload@1.2.1
- mongoose-delete@0.5.4
- mongoose@6.0.12
  added 90 packages from 101 contributors and audited 208 packages in 17.882s

19 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

ade-ThinkPad-T450s%
