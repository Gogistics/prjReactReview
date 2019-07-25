# React App

1. Create React App
2. Understand app folder structure
After creation, your project should look like this:
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, these files must exist with exact filenames:
* `public/index.html` is the page template;

* `src/index.js` is the JavaScript entry point.

* You may create subdirectories inside `src`. For faster rebuilds, only files inside src are processed by Webpack. You need to **put any JS and CSS files inside src**, otherwise Webpack won’t see them.

* Only files inside `public` can be used from `public/index.html`. Read instructions below for using assets from JavaScript and HTML.

https://facebook.github.io/create-react-app/docs/available-scripts