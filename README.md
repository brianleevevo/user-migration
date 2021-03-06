# CMS-USER-MIGRATION TOOL

This is a tool used currently to backfill roles for users based on their current roles.

## Installation

The following dependencies are required to run this app:
- NodeJS >v6

## Starting the app

To build and start the app:

```
# install dependencies
npm install

#transpile files from es6
npm run build
```

## Running the app

To backfill user roles:

```
npm run start:add-role -- new-role=cms-new-role user-role=cms-current-role
```

- `new-role` is the new role you want to add to users
- `user-role` is the current role for users you want to add the new role to

## Environments

The default environment is set to run again conrad staging. To run against production, use the environment variable `NODE_ENV=production`.

## Configuration

The following environment variables must be set to run this application. You can manually set them from your console, or use a .env file:

```
CONRAD_CLIENT_ID=
CONRAD_CLIENT_SECRET=
CONRAD_USERNAME=
CONRAD_PASSWORD=
```

## Linting

```
npm run lint
```
