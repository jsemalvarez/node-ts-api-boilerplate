# node-ts-api-boilerplate

A boilerplate for kickstart your nodejs api project

For each branch, you can find a base project with node and ts such as:

- node | mongoose | mongo << in progres >>

```
git checkout node-mongoose-mongo
```

- node | sequelize | mariadb << todo >>

```
git checkout node-sequelize-mariadb
```

- node | prisma | postgres << todo >>

```
git checkout node-prisma-postgres
```

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/jsemalvarez/node-ts-api-boilerplate.git
cd node-ts-api-boilerplate
npx rimraf ./.git
```

Install the dependencies:

```bash
npm install
```

### Set the environment variables:

copy `.env.template` and create `.env` file and modify the environment variables (if needed). The environment variables can be found and modified in the `.env.template` file. They come with these default values

## Basic tools included and configured:

- TypeScript
- ESLint with some initial rules recommendation
- Prettier to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- Express
- Jest for fast unit testing and code coverage
- Swagger for document the endpoints

## Available Scripts

- `npm run dev` - interactive watch mode to automatically transpile source files
- `npm run lint` - run ESLint
- `npm run format` - run prettier
- `npm run test` - interactive watch mode to automatically re-run tests
- `npm run test:coverage` - run tests and show coverage
- `npm run build` - transpile TypeScript to ES6
- `npm run start` - run app for production
- `npm run docker:dev` - run docker container in development mode
- `npm run docker:prod` - run docker container in production mode

## Project Structure

```
src\
 |--businessProcess\    # Business logic
 |--config\             # Environment variables
 |--controllers\        # Controller layer
 |--data\               # Mongoose models
 |--interfaces\         # Swagger files
 |--middlewares\        # Custom express middlewares
 |--routes\             # Routes
 |--services\           # Data layer
 |--utils\              # Utility classes and functions
 |--app.js              # Express app
 |--server.js           # App entry point
```

## API Endpoints

List of available routes:

**User routes**:\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user\
`POST /v1/users/register` - register\
`POST /v1/users/login` - login\
`POST /v1/users/refresh-tokens` - refresh auth tokens\
`POST /v1/users/forgot-password` - send reset password email (pending)\
`POST /v1/users/reset-password` - reset password (pending)\
`POST /v1/users/send-verification-email` - send verification email (pending)\
`POST /v1/users/verify-email` - verify email (pending)

**Admin routes**:\
`GET /v1/admin/users` - get all users\
`GET /v1/admin/users/:userId` - get user\
`PATCH /v1/admin/users/:userId` - update user\
`DELETE /v1/admin/users/:userId` - delete user\
`GET /v1/admin/task` - get all task\
`GET /v1/admin/task/:taskId` - get task\
`PATCH /v1/admin/task/:taskId` - update task\
`DELETE /v1/admin/task/:taskId` - delete task

**Tasks routes**:\
`POST /v1/task` - create a task\
`GET /v1/task` - get all task by user\
`GET /v1/task/:taskId` - get task by user\
`PATCH /v1/task/:taskId` - update task by user\
`DELETE /v1/task/:taskId` - delete task by user
