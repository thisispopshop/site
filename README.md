# POPSHOP SITE

## Stack
* Vue.js
* Typescript
* Bulma (temp?)
* Node.js/Express.js

## Run Locally 
### Front-End
* cd client
* (opt) npm install
* npm run serve
### Back-End
* (?) @root docker-compose up
* cd api
* (opt) npm install
* npm run start | dev

## Deploy
### Front-End Only
* cd client
* npm run build
* cd dist
* (opt) echo 'thisispopshop.com' > CNAME
* git init
* git add *
* git add -A
* git commit -m "deploy"
* git push -f git@github.com:kenakingkong/thisispopshop.git master:gh-pages

* _NOTE: npm run build creates dist directory. This creates a static site from the contents of the client directory. We push this to the **gh-pages** branch of our repository because that is where the page is located at. The static content is the **ONLY** thing we should be pushing to this branch. Push actual content to master or other branches._

### Whole Site
* no clue
