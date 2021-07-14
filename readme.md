# Music Library 🎧🎶

## Introduction

This application is an API that performs CRUD commands on a SQL database of musical artists and albums. The app includes a test suite and utilities to create and drop a test database.

This project is an exercise in:
- MySQL
- Docker
- Express API creation
- API testing using Mocha, Chai & Supertest

 ---

## Tools

- Written in JavaScript
- [express](https://www.npmjs.com/package/express) used to create the API
- [MySQL](https://dev.mysql.com/) used to create and query the database
- [mysql2](https://www.npmjs.com/package/mysql2) used to communicate with the database using JS
- [Docker](https://www.docker.com/) used to host the database
- Testing performed using [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai) and [supertest](https://www.npmjs.com/package/supertest)
- [dotenv](https://www.npmjs.com/package/dotenv) used to manage environment variables
- [nodemon](https://www.npmjs.com/package/nodemon) used to streamline development

---

## Getting Started

This repo can be installed and run locally. Before starting you'll need to install docker on your device. Here are the [ubuntu](https://docs.docker.com/engine/install/ubuntu/)/[mac](https://docs.docker.com/docker-for-mac/install/)/[windows](https://docs.docker.com/docker-for-windows/install/) installation guides.

<br/>

### 1. Clone [this repo](https://github.com/DevArrowsmith/music-library).
Here's [a guide on cloning repos](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository).

<br/>

### 2. Install Node Packages.
Run `npm install` from the root directory of the repo.

</br>

### 3. Pull a generic mysql database image and run it in Docker.

Run the following commands in a terminal:

- This command pulls a generic mysql image:

```
docker pull mysql
```

- This command runs the container:

```
docker run -d -p 3307:3306 --name music_library_mysql -e MYSQL_ROOT_PASSWORD=password mysql
```

<span style="color:goldenrod">*replace `password` with a password. You'll need it in step 4.</span>

<br/>

### 4. Set up environment variables.
Create a new file in the project's root directory called `.env`. This will store environment variables. This `.env` file is included in the project's `.gitignore`.

DB_PASSWORD=<span style="color:goldenrod">*The password you selected in step 3.*</span>  
DB_NAME=music_library_dev  
DB_USER=root  
DB_HOST=localhost  
DB_PORT=3307  
PORT=3000  

<br/>

### 4. Run the Music Library.

Run `npm start` from the project's root to locally host the music library app. The app can then be used to query the database.

The `start` command is defined in `package.json`. It runs `index.js` in nodemon. 

(*Nodemon is a package that runs the specified script in node, but also restarts that script each time a change is made to the application. This saves us a lot of time that may otherwise be spent manually stopping and starting the app each time we update it.*)

<br/>

### 5. Testing the App.

Run `npm t` or `npm test` to run the tests. 

The `test`command is defined in `package.json`. It runs mocha with a specific configuration. Mocha is a test package designed for asynchronous processes.

---

## Useful commands to manipulate the music_library_mysql docker container:

|action|command|
|-|-|
|Run the (installed) container|`docker start music_library_mysql`|
|Stop the container|`docker stop music_library_mysql`|
|Delete the container|`docker container rm music_library_mysql`|

---

## Acknowledgements

### Project: [express](https://www.npmjs.com/package/express) 
- Copyright (c) 2009-2014 [TJ Holowaychuk](tj@vision-media.ca)
- Copyright (c) 2013-2014 [Roman Shtylman](shtylman+expressjs@gmail.com)
- Copyright (c) 2014-2015 [Douglas Christopher Wilson](doug@somethingdougcom) 
- License: [MIT](https://github.com/expressjs/express/blob/master/LICENSE)
### Project: [mocha](https://www.npmjs.com/package/mocha)  
- Copyright (c) 2011-2021 [OpenJS Foundation](https://openjsf.org) and contributors.  
- License: [MIT](https://github.com/mochajs/mocha/blob/master/LICENSE)
### Project: [chai](https://www.npmjs.com/package/chai)  
- Copyright (c) 2017 Chai.js Assertion Library.  
- License: [MIT](https://github.com/chaijs/chai/blob/main/LICENSE)
### Project: [supertest](https://www.npmjs.com/package/supertest)  
- Copyright (c) 2014 [TJ Holowaychuk](tj@vision-media.ca) 
- License: [MIT](https://github.com/visionmedia/supertest/blob/master/LICENSE)
### Project: [MySQL](https://dev.mysql.com/)  
- Copyright (c) 2021, Oracle Corporation.
### Project: [mysql2](https://www.npmjs.com/package/mysql2)  
- Copyright (c) 2016 [Andrey Sidorov](sidorares@yandex.ru) and contributors
- License: [MIT](https://github.com/sidorares/node-mysql2/blob/master/License)
### Project: [Docker](https://www.docker.com/)  
- Copyright (c) 2013-2015 Docker, Inc. All rights reserved.
### Project: [dotenv](https://www.npmjs.com/package/dotenv)  
- Copyright (c) 2015, Scott Motte.  
- License: [BSD 2-Clause "Simplified" License](https://github.com/motdotla/dotenv/blob/master/LICENSE)
### Project: [nodemon](https://www.npmjs.com/package/nodemon)  
- Copyright (c) 2010 - present, [Remy Sharp](https://remysharp.com).  
- License: [MIT](https://github.com/remy/nodemon/blob/main/LICENSE)