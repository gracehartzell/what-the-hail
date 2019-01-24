# What the Hail?

The _ultimate_ user's choice weather app! This app was designed with style and customization in mind for the average weather-watching consumer, particularly those on Android devices. However, given only two days to work on this product, there are still some features left to be implemented. Please be patient while we work to finish up the _ultimate_ user's choice weather app!

## How To Use:

- Fork and Clone the repo
- `npm install` in the root directory.
- Run `createdb what-the-hail`.
- From here, you'll need to run `npm start` from the root directory. This will start the server that we'll be using to house the authorization and authentication procedure.
- Next, open a new terminal and go into the `client` directory. Run `npm install` and `npm start`. This will launch the app in the browser at `localhost:8080` (i.e. navigate to the browser once the build has completed).
- If you'd like to see how the database works, you'll need to use `psql what-the-hail` to access the local database, then `SELECT * FROM users` to view the table.

## How it was made

- We used [PostgreSQL](https://www.postgresql.org/), [Express](https://expressjs.com/), and [Knex](https://knexjs.org/) to put together the database, server, and routing, ie. backend. 
- For security we used [bcrypt](https://www.npmjs.com/package/bcrypt) and [Crypto](https://nodejs.org/api/crypto.html).
- For the frontend, we used [Vue.js](https://vuejs.org/) to render our page.
- For our mobile implementation we chose to use [Cordova](https://cordova.apache.org/) to allow us to write for both Android and iOS in Vue (rather than React with React Native). 

## Authors

The wonderful and talented engineers behind this application were:
- Grace Hartzell, lead designer and linter expert
- Mitalli Mital, frontend lead and Vue enthusiast
- Bryan Anderson, backend guy and helper monkey

## Acknowledgements

- For our user oauth code, we borrowed some code from [Lauren Fazah](https://gist.github.com/laurenfazah/f9343ae8577999d301334fc68179b485), so thanks to them for posting their work. 
- In setting up Cordova webpacks we used [this lovely article by Alistair MacDonald](https://itnext.io/make-hybrid-platform-cordova-vue-webpack-2fb7031c4f9b) to guide our way.
- In learning more about Vue.js we come across [Sandoche Adittane's helpful article](https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb).
- In hooking up Cordova with Vue.js we found [this article by Valerio Capogna](https://medium.com/@valeriocapogna/how-to-setup-a-cordova-app-using-vue-js-8ba1315b9666).
