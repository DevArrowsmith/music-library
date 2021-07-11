# Music Library

 This is an exercise in the use of express to query a MySQL database.

 This readme will be updated as the nature of the exercise becomes clear.

 ---

## Music Library setup commands

### 1. To launch the music_library_mysql database in Docker run the following command:

```
docker run -d -p 3307:3306 --name music_library_mysql -e MYSQL_ROOT_PASSWORD=password mysql
```

*replace 'password' with a password. You'll need it in step 2.

This pulls and runs the image.


### 2. Open up my-sql workbench app and connect to the mysql container.

|parameter|value|
|-|-|
|host|127.0.0.1|
|port|3307|
|password|*The password you selected in step 1.*|

### 3. Useful commands to manipulate the container:

|action|command|
|-|-|
|Stop the container|`docker container stop music_library_mysql`|
|Run the (installed) container|`docker container run music_library_mysql`|
|Delete the container|`docker container rm music_library_mysql`|

## Localhost the Music Library

After setting up the container for the music library database run the command `npm start` to locally host the music library app. This app can then be used to query the database.

The `start` command is defined in `package.json`. It runs `index.js` in nodemon. 

(*Nodemon is a package that runs the specified script in node, but also restarts that script each time a change is made to the application. This saves us a lot of time that may otherwise be spent manually stopping and starting the app each time we update it.*)

## Testing the App

Run `npm t` or `npm test` to run the tests. 

The `test`command is defined in `package.json`. It runs mocha with a specific configuration. Mocha is a test package. It was designed with asynchronous processes in mind.
