# Angular Material on [generator-fountain-webapp](https://github.com/FountainJS/generator-fountain-webapp)

Please check the differences with base foutain-webapp [here](https://github.com/pablorsk/test-generator-fountain-webapp-angular-material/commit/ae3793f9292d679001c1dd056549551b74c76ef0), and [here](https://github.com/pablorsk/test-generator-fountain-webapp-angular-material/commit/11929bc40e59e8ff113e7a258949467c2c6718be).

This example is working with angular-material ^_^

## Proposed solution for Material Font Roboto

What you think about this solution for loading Material font with Webpack+NPM?

```bash
$ npm install --save-dev file-loader
$ npm install --save roboto-fontface
```

conf/webpack.conf.json:

```
    loaders: [
      {
          test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader"
      }
      ...
    ]
```

src/index.ts

```javascript
import 'angular-material';
import 'angular-material/angular-material.css';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss';
```

This solution is working, but your opinion and help for future fountain+material is very important to us.

## Proposed solution for Material Icons (Webpack with NPM)

Add [this lines](https://fonts.googleapis.com/icon?family=Material+Icons) to `index.scss`

```css
/* fallback */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
```

And next, just simple add icons like this:

```html
<md-icon>face</md-icon>
```

This solution is working. Thanks for your help @micaelmbagira.

If you like a online demo of this, working with generator-fountain-webapp, [follow this link](https://github.com/pablorsk/test-generator-fountain-webapp-angular-material).
