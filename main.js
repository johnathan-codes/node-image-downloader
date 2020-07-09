const fs = require('fs')
const rp = require('request-promise')
const helpers = require('./data/constants')
const cheerio = require('cheerio')
const axios = require('axios')

rp(helpers.url).then(response => {
  //getHtmlForTesting(response) //This is optional - just for getting whole html page

  let $ = cheerio.load(response)
  $(helpers.classToFind).each((index, element) => {
    download(element.attribs['data-src'], index)
  })
  console.log('Done!')
}).catch(err => {
  console.log(err)
})

const getHtmlForTesting = (data) => {
  fs.writeFile('data/response-html.html', data, (err) => {
    if(err) {
      return console.log(err)
    }
  })
}

const download = (url, index) => {
  axios({
    url,
    responseType: 'stream'
  }).then(response => {
    new Promise((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(` ${helpers.url.split('/').pop()} - ${index}.jpg`)) //get last part of url for dynamic file name)
        .on('finish', () => resolve())
        .on('error', err => reject(err))
    })
  })
}