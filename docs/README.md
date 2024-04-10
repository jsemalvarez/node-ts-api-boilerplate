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

## Basic tools included and configured:

- TypeScript
- ESLint with some initial rules recommendation
- Prettier to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- Express
- Jest for fast unit testing and code coverage
- Swagger for document the endpoints

### Available Scripts

- `dev` - interactive watch mode to automatically transpile source files
- `lint` - run ESLint
- `format` - run prettier
- `test` - interactive watch mode to automatically re-run tests
- `test:coverage` - run tests and show coverage
- `build` - transpile TypeScript to ES6
- `start` - run app for production

### Branching

We use [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model.

Your branch name should follow one of the following formats:

- `feature/feature-name` for new features
- `fix/fix-name` for bug fixes
- `chore/chore-name` for chores
- `docs/docs-name` for documentation
- `refactor/refactor-name` for refactors
- `release/release-name` for releases
- `revert/revert-name` for reverts
- `test/test-name` for tests
- `wip/wip-name` for work in progress
- `ci/ci-name` for continuous integration

### Committing Rules

#### Types `required` `lowercase`

`feat` – a new feature is introduced with the changes

`fix` – a bug fix has occurred

`chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)

`refactor` – refactored code that neither fixes a bug nor adds a feature

`docs` – updates to documentation such as a the README or other markdown files

`style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.

`test` – including new or correcting previous tests

`perf` – performance improvements

`ci` – continuous integration related

`build` – changes that affect the build system or external dependencies

`revert` – reverts a previous commit

```sh
echo ": some message"    # fails
echo "foo: some message" # fails
echo "FIX: some message" # fails
echo "fix: some message" # passes
```

#### Scope `optional` `lowercase`

```sh
echo "fix(SCOPE): some message" # fails
echo "fix(scope): some message" # passes
```

#### Description `required` `start in lowercase` `not ending in "."`

```sh
echo "fix:" # fails
echo "fix: some message." # fails
echo "fix(scope): Some message" # fails
echo "fix(scope): some message" # passes
echo "fix(scope): some Message" # passes
```

Examples:

```sh
echo "fix(.gitignore): added node_modules folder"
echo "fix(controllers/auth): added frontend redirect params"
echo "revert(services/email): nodemailer version update"
```
