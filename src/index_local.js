import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
// const fs = require('fs');
const path = require('path');
// function fileExist(p) {
//   if (fs.existsSync(p)) {
//     return true;
//   }
//   return false;
// }
function link(where, module_name) {
  // body...
  var thelink = document.createElement('link');
  thelink.setAttribute('rel', 'stylesheet');
  var file1 = path.join(where, module_name);
  thelink.setAttribute('href', file1);
  document.head.appendChild(thelink);
}
// function getWhere() {
//   return window.require('electron').ipcRenderer.sendSync('getpath');
// }
ReactDOM.render(<App />, document.getElementById('root'));
// window.app_path=__dirname;



