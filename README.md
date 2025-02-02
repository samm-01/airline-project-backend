This is the project for airline backend.

This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project
pran at as at prosec
management recommendations. Feel free to change anything.

`src`→ Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests.

`config` → In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.
`routes` → In the routes folder, we register a route and the corresponding middleware and controllers to it.

`middlewares` → they are just going to intercept the incoming requests where we write our validators, authenticators etc.

`controllers` → they are the kind of the last middlewares as post them you call business layer to execute the business logic. in controllers we just receive the icoming requests and the data and then pass it to the business layer and once business layer returns the output, we structure the API response in controllers and send the output.

`repositories` → this folder contains all the logic using which we interact the DB by writing queries. all the raw queries or ORM queries will go here.

`services` - contain the business logic and iteract with repositories for data from business.

`utils` - contains helper method, error classes etc.

`migrations` - migrations are used to maintain the versions of your databases.

- inside the `src/config` folder create a file named as config.json and write the following code

- Go inside `src` folder, and run the following command :

```
npx sequelize init
```

- by executing the above command, you'll get migrations and seeders folder and config.json file inside config folder.

- if you are setting up your developing environment then write the username of your db and password of your db and in dialect mention whatever db you are using, for ex "MySQL, mariadb, etc.

- if

Generally in high level projects, people dont use raw strings, thay make a separate json file, and import from there using key value pairs. One reason for this is that json files can be easily translated into any other languages, incase the viewr dont understand English. They just simple add another translational service in there project, which is used to translate the strings. Another reason for this is that it reduces the redundancy.

- Seeders files are used to populate the database with something. Generally this is used when working on very large projects and new people are joining the team. so to reduce the efforts to set this up, we use seeders.

To make the migration to the database use the following command :

```
npx sequelize db:seed:all
```

To remove the migrations made to the database use the following command :

```
npx sequelize db:seed:undo:all
```
