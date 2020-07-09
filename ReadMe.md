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

