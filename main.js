const fs = require('fs')
const rp = require('request-promise')
const helpers = require('./data/constants')
const cheerio = require('cheerio')
const axios = require('axios')

main = () => {
  helpers.urls.forEach(url => {
    rp(url).then(response => {
      let $ = cheerio.load(response)
      makeFolders(url.split('/').pop())
      $(`img${helpers.classToFind}`).each((index, element) => {
        if(typeof element.attribs['src'] === 'string'){
          download(url, element.attribs['src'], element.attribs['alt'])
        }
      })
      console.log(`Done downloading: ${url.split('/').pop()}`)
    }).catch(err => {
      console.log(err)
    })
  })
}

const download = (source, url, alt) => {
  let fileName = `downloads/${source.split('/').pop()}/${alt}`
  fileName += url.split('.').pop() !== undefined ? `.${url.split('.').pop()}` : '.jpg'
  if(fs.existsSync(alt)) {
    console.log(`File "${alt}.jpg" already exists. Skipping.`)
  } else {
    // downloads/<url-pop> - <index>.<url-filetype>
    axios({url, responseType: 'stream'}).then(response => {
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(fileName))
          .on('finish', () => resolve())
          .on('error', err => reject(err))
      })
    })
  }
}

const makeFolders = (folderName) => {
  if(!fs.existsSync('downloads')){
    fs.mkdir('downloads', (err) => console.log('mkdir downloads - Error:', err))
  } else {
    console.log('Folder "downloads" already exists. Skipped mkdir')
  }

  if(folderName && !fs.existsSync(`downloads/${folderName}`)){
    fs.mkdir(`downloads/${folderName}`, (err) => console.log(`mkdir downloads/${folderName} - Error:`, err))
  } else {
    console.log(`Folder "downloads/${folderName}" already exists. Skipped mkdir`)
  }
}

main()