const fs = require('fs')
const rp = require('request-promise')
const helpers = require('./data/constants')
const cheerio = require('cheerio')
const axios = require('axios')

rp(helpers.url).then(response => {
  let $ = cheerio.load(response)
  makeFolders(helpers.url.split('/').pop())
  $(helpers.classToFind).each((index, element) => {
    download(element.attribs['data-src'], index)
  })
  console.log('Done downloading!')
}).catch(err => {
  console.log(err)
})

const download = (url, index) => {
  axios({url, responseType: 'stream'}).then(response => {
    new Promise((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(`downloads/${helpers.url.split('/').pop()}/${helpers.url.split('/').pop()} - ${index}.jpg`))
        .on('finish', () => resolve())
        .on('error', err => reject(err))
    })
  })
}

const makeFolders = (folderName) => {
  if(!fs.existsSync('downloads')){
    fs.mkdir('downloads', (err) => console.log('mkdir downloads - Error:', err))
  } else {
    console.log('Folder "downloads" already exists. Skipped mkdir')
  }

  if(!fs.existsSync(`downloads/${folderName}`)){
    fs.mkdir(`downloads/${folderName}`, (err) => console.log('mkdir downloads/dest - Error:', err))
  } else {
    console.log(`Folder "downloads/${folderName}" already exists. Skipped mkdir`)
  }
}