# How to Integrate Google Analytics in Typesense
_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.

## Deployment

1. Get the files needed for deployment with a static server by running this command.
    ``` 
    npm run build
    ```


1. The static files will be created in a dist folder
1. Select dist folder as the directory for deployment
1. Deploy

    **NB:** In case you run to a Uncaught ReferenceError: gtag is not defined. 

Follow the following steps to solve the error
1. Check the index.html file generated in the dist folder.
1. You would see that the gtag() function of the Google Analytics as to change to a(). 
Hence, the reason for reference error raised in app.js file.
1. Modify the function name in the app.js file to **a** or change it in the index.html file in the dist folder

    **NB:** If you are modifying it in the index.html in the dist folder, know that you will be modifying more than one line.
