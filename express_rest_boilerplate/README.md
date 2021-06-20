# Express REST API Boilerplate

A CLI to automatically clone [express-rest-api-boilerplate](https://github.com/Jasmeet-1998/mySnippets_Collection/tree/master/express_rest_starter_kit)

## Author

- [@JassiBali](https://github.com/Jasmeet-1998)

## Installation

Install the CLI globally OR  use npx:

```bash
  npm install -g create-myexpress-api
```

Usage

```bash
  # with global install
  create-myexpress-api name-of-your-app
  # with npx
  npx create-myexpress-api name-of-your-app
```
***This will create a directory with the given name, clone the express API boilerplate repo into it, and install dependencies.***

## Features
- ✔ Authentication Routes
  - ✔ Register
  - ✔ Login
  - ✔ Logout
  - ✔ Refresh Token
- ✔ MongoDB Config Setup
- ✔ Multer config setup for file upload at server
- ✔ CRUD Product Routes
  - ✔ Unprotected
  - ✔ JWT Protected

        # Create,Delete,Update(protected)     
        role : admin
        # Get Single or all Products(unprotected)
        role: Customer


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_PORT`

`DEBUG_MODE`

`DB_URL`

`JWT_SECRET`

`REFRESH_SECRET`

`IMAGE_DATABASE_DOMAIN_URL`


## API Reference

### Authentication Routes

#### Register new user

```http
  POST /api/register
```

Request Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of User |
| `email`      | `string` | **Required**. Email of User |
| `password`      | `string` | **Required**. Password for user |
| `repeat_password`      | `string` | **Required**. Confirm password |
| `role`      | `string` | **Not Required**. Default:Customer To be able to Create,Update,Delete Products set this to 'admin' |

#### Login user (returns access token validity 1 minute)

```http
  POST /api/login
```

Request Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of User |
| `password`      | `string` | **Required**. Password for user |

****200 ok Response****

{

    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM1ZWRkNTVkZTMwYjM2OTA3YjQwMjkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjQxMDc3MzUsImV4cCI6MTYyNDEwNzc5NX0.qpFlryiMUmbwPbxRjTDMkCZVLYL-yDi2it8vAF9hueU",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM1ZWRkNTVkZTMwYjM2OTA3YjQwMjkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjQxMDc3MzUsImV4cCI6MTYyNDE5NDEzNX0.QXlXOppYhH1WyccN__wXdBYp71x8SIGrSL7gAgvyV3o"
}

#### Get user info

```http
  GET /api/whoami
```
Headers

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization Bearer`      | `string` | **Required**. Access Token |



****Use access token for making whoami,logout,refresh & CRUD requests****

#### Get refresh token(1 day validity)

```http
  POST /api/refresh
```

Request Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `refresh_token`      | `string` | **Required**. Refresh Token |



****Use access token for making whoami,logout,refresh & CRUD requests****

#### Logout user

```http
  POST /api/logout
```

Request Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `refresh_token`      | `string` | **Required**. Refresh Token |

Headers

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization Bearer`      | `string` | **Required**. Access Token |


****Use access token for making whoami,logout,refresh & CRUD requests****


### CRUD Protected(JWT) & Unprotected Routes

#### Get all products

```http
  GET /api/products
```

Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `NA` | `NA` | Not Applicable |

#### Get single product

```http
  GET /api/products/${id}
```

Request Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

#### Create new product

```http
  POST /api/products/${id}
```

Request Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of product |
| `price`      | `int` | **Required**. Price of product |
| `quantity`      | `int` | **Required**. Quantity of product |
| `image`      | `file` | **Required**. Image of product |

Headers

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization Bearer`      | `string` | **Required**. Access Token |

#### Update existing product

```http
  PUT /api/products/${id}
```

Request Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to be updated |
| `name`      | `string` | **Required**. Name of product |
| `price`      | `int` | **Required**. Price of product |
| `quantity`      | `int` | **Required**. Quantity of product |
| `image`      | `file` | **Not Required**. Image of product |

Headers

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization Bearer`      | `string` | **Required**. Access Token |

#### Delete existing product

```http
  DELETE /api/products/${id}
```

Request Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to be deleted |


Headers

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization Bearer`      | `string` | **Required**. Access Token |


## Appendix

> ## API folder structure

        -express_rest_starter_kit
          *api
             *config
               -index.js
             *controllers
               -index.js
               -productController.js
               *auth
                 -registerController.js
                 -loginController.js
                 -refreshController.js
                 -whoamiController.js
             *middlewares
               -admin.js
               -auth.js
               -errorHandler.js
             *models
               -index.js
               -user.js
               -product.js
               -refreshToken.js
             *routes
               -index.js
             *services
               - CustomErrorHandler.js
               - JWTService.js
             *uploads
               - 3748374834-3293829.jpg
             *validators
               -productValidation.js
            -server.js

> #### REST EXPRESS API Boilerplate Structure Information (WHAT IS WHAT ?)

- [x] ****server.js the entry file to start your api****

- [x] ****config has (.env variables) exported via index.js****

- [x] ****controllers has all the routes logic which is exported via a common index.js****

- [x] ****middlewares contain auth.js (checking authorization header in request header) and errorHandler that act as general error handler for the entire api.****

- [x] ****models has the DB Schemas exported by a single file named index.js****

- [x] ****routes has all the routes path along with controller reference that is exported via common index.js which is then imported in the server.js****

- [x] ****services includes Class based modules like CustomErrorHandler for handling d/f error cases and JWTService for signing JWT token****

- [x] ****uploads folder contain all the image uploaded via the Create New Product Route****

- [x] ****validators contains Client Side Validation modules****
