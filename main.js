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
      $(helpers.classToFind).each((index, element) => {
        if(typeof element.attribs['data-src'] === 'string'){
          download(url, element.attribs['data-src'], index)
        }
      })
      console.log(`Done downloading: ${url.split('/').pop()}`)
    }).catch(err => {
      console.log(err)
    })
  })
}

const download = (sourceUrl, url, index) => {
  let fileName = `downloads/${sourceUrl.split('/').pop()}/${sourceUrl.split('/').pop()} - ${index}.${url.split('.').pop()}`

  if(fs.existsSync(fileName)) {
    console.log(`File "${fileName}" already exists. Skipping.`)
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
    fs.mkdir('downloads', (err) => console.log('mkdir downloads - Error:', err.message))
  } else {
    console.log('Folder "downloads" already exists. Skipped mkdir')
  }

  if(!fs.existsSync(`downloads/${folderName}`)){
    fs.mkdir(`downloads/${folderName}`, (err) => console.log(`mkdir downloads/${folderName} - Error:`, err.message))
  } else {
    console.log(`Folder "downloads/${folderName}" already exists. Skipped mkdir`)
  }
}

main()