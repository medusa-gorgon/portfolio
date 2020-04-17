# Gulp tasker v.2.0.3

> "gulp": "^4.0.2"

### Content

**[How to launch](#how-to-launch)**  
**[What is this?](#what-is-this)**  
**[Contained tasks](#current-version-contains-following-tasks)**  
**[Pre-commit](#pre-commit)**  
**[Dependencies](#dependencies)**  
**[License](#license)**

## How to launch:

1. `git clone`
2. `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git` to update the origin remote with your own repository / `git remote rm origin` to remove the origin remote
3. `yarn` / `npm i`
4. `yarn global add gulp-cli` / `npm i gulp-cli -g`
5. `gulp`
6. Navigate to your localhost address
   (default is http://localhost:3000/)
   
P.S. Don't forget to remove extra info like keywords, repository, etc. from `package.json`.

## What is this?

_Gulp tasker_ is an easy editable gulp build with a flexible and convenient choice of tasks to run.

Some of the tasks are doing the same job, but with a different conditions. Such duplicates are disabled (commented) in `gulpfile.js`.
For example:

1. If you use `pug` instead of `html` — you should disable **html** task and enable **pug**
2. If you do not want to minify your custom `js` files — you should disable **js:app-minify** and enable **js:app**

## Current version contains following tasks:

- **clean**

  Deletes the `build` folder

- **images:sprite**

  Creates a sprite from `.png` files placed in the `images/sprites/png` folder and moves it to the `build/images/sprites` folder

- **svg:sprite**

  Creates a sprite from `.svg` files placed in the `images/sprites/svg` folder and moves it to the `build/images/sprites` folder

- **images:minify**

  Minifies all images from the `dev/images` folder. Triggered only once per gulp run (can be launched manually)

- **sass:lint**

  Lints all `.{scss,sass,css}` files at the `dev/styles` folder with [stylelint](https://stylelint.io/) using config from `.stylelintrc`

- **js:lint**

  Makes all `.js` files at the `dev/js` folder [Prettier](https://prettier.io/) and lints them with [ESlint](https://eslint.org/) using configs from `.prettierrc` and `.eslintrc`

- **html**

  Copies all `html` files from the `dev` folder to the `build` folder

- **pug**

  Compiles all `pug` files from the `pug/pages` folder to the `build` folder

  Uncomment `locals: JSON.parse($.fs.readFileSync('content.json', 'utf8'))` to use `content.json` for `locals` (variables)

- **css:vendor**

  Merges and minimizes all vendor `css` files, which paths are declared in `gulp/configs/config.js`, and moves the resulting `vendor.min.css` file to the `build/css` folder

- **sass**

  Compiles, prefixes css properties as indicated in `.browserslistrc` and minimizes the `main.scss` file from the `styles` folder to the `build` folder

- **js:vendor**

  Merges and minimizes all vendor `js` files, which paths are declared in `gulp/configs/config.js`, and moves the resulting `vendor.min.js` file to the `build/js` folder

- **js:app**

  Merges all custom `js` files, which paths are declared in `gulp/configs/config.js`, and moves the resulting `app.js` file to the `build/js` folder

- **js:app-minify**

  Merges and minimizes all custom `js` files, which paths are declared in `gulp/configs/config.js`, and moves the resulting `app.min.js` file to the `build/js` folder

- **fonts**

  Copies all files from the `dev/fonts` folder to the `build/fonts` folder

- **images**

  Copies all files from the `dev/images` folder to the `build/images` folder, except the `dev/images/sprites` folder

- **watch**

  Watches for the specific files and executes needed task on change

- **serve**

  Launches and configures browserSync

## Pre-commit

From the 2.0.0 version _Gulp tasker_ has a pre-commit script, based on [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). It looks like this:

```
"lint-staged": {
    "dev/js/**/*.js": [
      "pretty-quick --pattern './dev/js/**/*.js'",
      "eslint './dev/js/**/*.js' --fix"
    ],
    "dev/**/*.{scss,sass,css}": [
      "stylelint './dev/styles/**/*.{scss,sass,css}' --fix"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && gulp build && git add ."
    }
  }
```

And it can be configured in any preferrable way. Enjoy!

## Dependencies

You **should** `yarn upgrade --latest` / `npm update && npm audit fix -f` as _Gulp tasker_ will always be ok working with the latest versions of the dependencies, so it is **strongly recommended**.

```
"devDependencies": {
  "@babel/core": "^7.5.5",
  "@babel/preset-env": "^7.5.5",
  "babel-eslint": "^10.0.3",
  "browser-sync": "^2.26.7",
  "child_process": "^1.0.2",
  "del": "~5.1.0",
  "eslint": "^6.2.2",
  "eslint-config-airbnb-base": "^14.0.0",
  "eslint-config-prettier": "^6.0.0",
  "eslint-plugin-import": "^2.18.0",
  "eslint-plugin-prettier": "^3.1.0",
  "fs": "^0.0.1-security",
  "gulp": "^4.0.2",
  "gulp-autoprefixer": "~7.0.0",
  "gulp-babel": "^8.0.0",
  "gulp-cheerio": "~1.0.0",
  "gulp-concat": "~2.6.1",
  "gulp-concat-css": "~3.1.0",
  "gulp-csso": "^4.0.1",
  "gulp-imagemin": "^6.1.0",
  "gulp-load-plugins": "~2.0.1",
  "gulp-minify": "^3.1.0",
  "gulp-notify": "~3.2.0",
  "gulp-pug": "~4.0.1",
  "gulp-rename": "^1.4.0",
  "gulp-replace": "~1.0.0",
  "gulp-sass": "~4.0.2",
  "gulp-sass-glob": "^1.1.0",
  "gulp-sourcemaps": "~2.6.5",
  "gulp-svg-sprite": "~1.5.0",
  "gulp-svgmin": "~2.2.0",
  "gulp.spritesmith": "^6.10.1",
  "husky": "^3.0.0",
  "lint-staged": "^9.5.0",
  "merge-stream": "^2.0.0",
  "prettier": "^1.18.2",
  "pretty-quick": "^2.0.1",
  "stylelint": "^12.0.0",
  "stylelint-config-standard": "^19.0.0",
  "stylelint-order": "^3.0.1"
},
"dependencies": {
  "jquery": "~3.4.1",
  "normalize.css": "~8.0.1"
}
```

## License

Copyright © 2018 - 2020, based on © Loftschool 2017 Web Advanced course build.

Licensed under the MIT license.
