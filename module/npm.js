// npm --version

// npm i <pkg>
// npm install -g <pkg>

// package.json
// npm init 
// npm init -y

const _ = require("lodash")

 const items = [1,[2,[3,[4]]]]

 console.log(_.flattenDeep(items));