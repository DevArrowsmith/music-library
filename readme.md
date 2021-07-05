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