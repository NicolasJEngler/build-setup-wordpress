# Information & instructions
---

### Please do the following and keep everything below in mind when using these files, or "setup" if it can be called that way.

This setup uses `Gulp` for task management, with the aid of `PostCSS` + `Sass` for CSS-related tasks.

The Gulpfile has 4 tasks available:
* `css`: uses `PostCSS` + `cssnext` for prefixing and future CSS, and `Sass` as an aid. It also concatenates all CSS files into `all.css` inside `./styles/dist/`, and minifies the result
* `scripts`: this task is meant to grab all files inside the array of the task's `src` and concatenates them into `all.js` inside `./js/dist` and minifies it
* `clean`: this task deletes everything inside both of the `dist` folders
* `watch`: this task watches for changes in the files in both of the `src` folders and updates them if necessary
* `build`: runs all of the tasks once, except for `watch`

Please, keep in mind that this setup may not work for you, and it may as well be flawed. I currently use it for small, personal projects and will try to improve its performance and logic ASAP.
