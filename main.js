const fs = require('fs')
const rp = require('request-promise');
const helpers = require('./data/constants')

rp(helpers.url).then(response => {
  fs.writeFile('data/response-body.html', response, (err) => {
    if(err) {
      return console.log(err)
    }
    console.log('Done!')
  })
}).catch(err => {
  console.log(err)
})