create folder 'data'

create file 'constants.js'
with contents like these:
```javascript
const urls = [
  '<Your URL 1>',
  '<Your URL .>',
  '<Your URL ..>',
  '<Your URL .>',
  '<Your URL X>',
  ]
const classToFind = '.<your class>'; // The dot is necessary as we are looking for class


module.exports = {
  urls,
  classToFind
}
```

script will create folder "downloads" if it does not exist already
and subfolder for each url. 

# TODO:
- [x] - download images from url
- [x] - download from multiple sources
- [ ] - make script universal
- [ ] - download by tag not class