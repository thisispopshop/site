## Project Setup

1. Install MySQL
   1. via Docker
      1. Install Docker from docker.com (windows users might need to install docker-toolbox (an older version))
      2. navigate to the root of the project, the one with docker-compose.yml in it. 
      3. run docker-compose up
   2. via MySql.com 
      1. Install the community edition
   3. Get a mysql client
      1. Mac OS 
         1. `brew install mysql-client` via [HomeBrew](https://brew.sh/)
         2. [Sequel Pro](https://www.sequelpro.com/)
      2. VSCode
         1. MySQL Extension
   4. Create two databases, one for test and one for development, default the names are `dev` and `test`
2. Run the API app
   1. navigate to `<project root>/api`
   2. `npm install`
   3. `npm run start` || `npm run dev`
3. Run the client
   1. navigate to `<project_root>/client`
   2. `npm install`
   3. `npm run serve`
   
## Notes

**npm**

- NPM is required for this project, if you don't have it, please install it from instructions on [Get NPM](https://www.npmjs.com/get-npm)

**mysql on windows with docker**

- there might be an issue connecting to the running mysql instance if you are using docker-toolbox. this is because it doesn't bind to the local ip of the host machine. 
  - Run `docker-machine ip` to get the ip of the docker machine
  - You will then change your config.json to have the host be the ip returned in above command.