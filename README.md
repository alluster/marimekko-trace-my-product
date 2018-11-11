# React with SCSS & Bootstrap

Bootstrap SASS project. Bootstrap verison 3.xx Bootstrap-sass module copied to the src/styles folder from node_modules and used from there.

SCSS files are imported from component specific folders and transpiled into index.css witch is imported to the src/app.js file.

### All component specific .scss style files are imported into src/styles/index.scss file

Import structure example:

> src/component/Navigation/navigation.scss 
imported to 
>src/styles/components/_all.scss 
from where imported to the 
>src/styles/index.scss
