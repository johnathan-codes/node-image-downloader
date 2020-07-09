# Steps

1. Create `data` folder in the root

   ![data-folder](https://user-images.githubusercontent.com/42937562/87100113-d9c31d00-c24b-11ea-8f54-e74ab8d27ce3.png)

2. Create `constants.js` with this template:

   ```javascript
   const urls = []
   const classToFind = ''
   
   module.exports = [
   	urls,
   	classToFind
   ]
   ```

   

3. Go to the page you want download images from. Set the url as item of array in `constants.js`

   ```javascript
   const urls = ['https://www.freeimages.com/']
   ```

   ![source-page](https://user-images.githubusercontent.com/42937562/87100114-da5bb380-c24b-11ea-8a32-063c13702b33.png)

4. Check if images have classes in console

   ![check-img-class](https://user-images.githubusercontent.com/42937562/87100117-db8ce080-c24b-11ea-9bfe-528a598dd593.png)

5. If not leave `helpers.classToFind` empty. You can leave it empty even if it has class. When adding class name be sure to put `.` before class name.

   ![fill-class](https://user-images.githubusercontent.com/42937562/87100119-dc257700-c24b-11ea-8f68-42e029f083b8.png)

6. Check image `src` and `alt` attributes. Sometimes it has`data-src` instead of `src`. Feel free to modify element's attributes

   ![chech-img-attributes](https://user-images.githubusercontent.com/42937562/87100120-dc257700-c24b-11ea-85bb-caa1063addd1.png)

7. Run `npm start` 

8. If an error occurred there will be a console output

   ![console-output](https://user-images.githubusercontent.com/42937562/87100121-dc257700-c24b-11ea-93ac-c44d7250a996.png)

9. New folder `downloads` will be created if it was not existing already

10. If the page has subfolder, for example `page.com/subfolder` a new subfolder with that name will be created and files will be downloaded there. Otherwise images will be downloaded into `downloads` folder

    ![downloaded-images](https://user-images.githubusercontent.com/42937562/87100123-dcbe0d80-c24b-11ea-8e23-e8d939038358.png)

11. Done

    

# TODO:
- [x] - download images from url
- [x] - download from multiple sources
- [ ] - make script universal
- [x] - download by tag not class
