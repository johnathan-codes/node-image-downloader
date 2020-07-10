# Steps

1. Clone repo
2. cd into folder
3. run `npm i`

   ![npm-install](https://user-images.githubusercontent.com/42937562/87172232-323dfd00-c2d4-11ea-8d54-5403aabebb7c.png)

4. Go to the page you want download images from

   ![source-page](https://user-images.githubusercontent.com/42937562/87172565-ba240700-c2d4-11ea-835a-f0a5b035ab7f.png)

5. Check if images have classes in console

   ![check-img-class](https://user-images.githubusercontent.com/42937562/87100117-db8ce080-c24b-11ea-9bfe-528a598dd593.png)

6. Check image `src` and `alt` attributes. Sometimes it has`data-src` instead of `src`. Feel free to modify element's attributes

   ![chech-img-attributes](https://user-images.githubusercontent.com/42937562/87100120-dc257700-c24b-11ea-85bb-caa1063addd1.png)

7. Run `npm start <url> <img class>` - img class is optional !!in cmd paste url as-is (without ').

   ![input-no-class](https://user-images.githubusercontent.com/42937562/87173177-a7f69880-c2d5-11ea-8558-4ea49f07fe88.png)
   
   or with class
   
   ![input-with-class](https://user-images.githubusercontent.com/42937562/87173323-db392780-c2d5-11ea-96bb-5632ef1ca8c9.png)

8. If an error occurred there will be a console output

   ![console-output](https://user-images.githubusercontent.com/42937562/87173112-8bf2f700-c2d5-11ea-8dd4-39ad4ce04804.png)

9. New folder `downloads` will be created if it was not existing already

10. If the page has subfolder, for example `page.com/subfolder` a new subfolder with that name will be created and files will be downloaded there. Otherwise images will be downloaded into `downloads` folder

    ![downloaded-images](https://user-images.githubusercontent.com/42937562/87100123-dcbe0d80-c24b-11ea-8e23-e8d939038358.png)

11. Done

    

# TODO:
- [x] - download images from url
- [ ] - make script universal
- [x] - download by tag not class
- [x] - Use user input in console, users will not create and modify files (unless needed)
