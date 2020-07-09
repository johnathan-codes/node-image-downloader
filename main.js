const fs = require('fs')
const cheerio = require('cheerio')
const got = require('got')

const constants = require('./data/constants')
console.log('url', constants.url)

got(constants.url).then(response => {
  // console.log('response', response.body)
  // fs.writeFile('response-body.html', response.body, (err) => {if(err) return console.log(err); console.log('Done!')})
  // const $ = cheerio.load(response.body)
  // console.log($('img')[0].attribs)
}).catch(err => {
  console.log(err)
})