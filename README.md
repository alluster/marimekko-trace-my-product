# Trace My Product

Application created for company named Marimekko to create transparency around garments manufactured globally. By creating a blockchain for a product we can add traceable data related to a specific product.

### js
Made with React and Redux

### Styling
SCSS files are imported from component specific folders and transpiled into index.css witch is imported to the src/app.js file.
Import structure example:

> src/component/Navigation/navigation.scss 
imported to 
>src/styles/components/_all.scss 
from where imported to the 
>src/styles/index.scss

### Authentication
Auth built on Firebase API 

### Content 
Current app uses http://contentful.io CMS for changing content and all the content on the app is "fake" and relates to no user data what so ever

### Deployment
The app is curently hosted on http://surge.sh service (no CI build)

### Usage

//npm install
//npm run start
//npm run build

