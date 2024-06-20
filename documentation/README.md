# Jobs API documentation

## Usage

- open the /redoc/redoc-static.html file in the browser

## Installation instructions

to build the redoc-static file for any API project:

1. create a Postman collection of API requests
2. export that collection as a JSON file
3. go to https://p2o.defcon007.com/
4. submit the exported JSON file
5. copy the output code to a .yaml file, e.g. API-documentation.yaml
6. copy the file to a documentation directory
7. cd into that directory and run:
   npx @redocly/cli build-docs API-documentation.yaml
8. this should create redoc-static.html
9. run redoc-static.html in the browser

## Postman config

- open postman
- import /postman/Node-Smilga 06-Jobs-API.postman_collection.json
