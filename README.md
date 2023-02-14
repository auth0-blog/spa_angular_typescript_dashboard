# Auth0 Eats Dashboard App

This sample uses the [Auth0 Angular SDK](https://github.com/auth0/auth0-angular) to implement the following security tasks:

- Add user login and logout.
- Retrieve user profile information.
- Protect application routes.
- Make secure calls to an API.

## Branches

This project has a few branches for different purposes:

- [`starter`](https://github.com/auth0-blog/spa_angular_typescript_dashboard/tree/starter) - this contains the bare minimum that you can use as a starting point if you are following along with the tutorial
- [`state/ngrx`](https://github.com/auth0-blog/spa_angular_typescript_dashboard/tree/state/ngrx) - this contains the final state of the application when using Auth0 with NgRx
- [`state/akita`](https://github.com/auth0-blog/spa_angular_typescript_dashboard/tree/state/akita) - this contains the final state of the application when using Auth0 with Akita
- [`state/ngxs`](https://github.com/auth0-blog/spa_angular_typescript_dashboard/tree/state/ngxs) - this contains the final state of the application when using Auth0 with Ngxs

## Get Started

Clone the repository:

```bash
git clone -b starter git@github.com:auth0-blog/spa_angular_typescript_dashboard.git
```

Make the project directory your current directory:

```bash
cd spa_angular_typescript_dashboard
```

## Quick Auth0 Set Up

### Set up the project

Install the project dependencies:

> Angular requires an [active LTS or maintenance LTS](https://nodejs.org/about/releases) version of Node.js. Angular applications also depend on [npm packages](https://docs.npmjs.com/getting-started/what-is-npm) for many features and functions. To download and install npm packages, you need an npm package manager such as [npm](https://docs.npmjs.com/cli/install) or [yarn](https://yarnpkg.com/).

```bash
npm install
```

### Register an Angular application with Auth0

- Open the [Applications](https://manage.auth0.com/#/applications) section of the Auth0 Dashboard.

- Click on the **Create Application** button.

- Provide a **Name** value such as _Hello World Client_.

- Choose "Single Page Web Applications" as the **application type**.

- Click on the **Create** button.

> View ["Register Applications" document](https://auth0.com/docs/applications/set-up-an-application) for more details.

Your Auth0 application page loads up.

Your Angular application will redirect users to Auth0 whenever they trigger an authentication request. Auth0 will present them with a login page. Once they log in, Auth0 will redirect them back to your Angular application. For that redirecting to happen securely, you must specify in your **Auth0 Application Settings** the URLs to which Auth0 can redirect users once it authenticates them.

As such, click on the "Settings" tab of your Auth0 Application page and fill in the following values:

**Allowed Callback URLs**

```bash
http://localhost:4040
```

**Allowed Logout URLs**

```bash
http://localhost:4040
```

**Allowed Web Origins**

```bash
http://localhost:4040
```

**Scroll down and click the "Save Changes" button.**

### Connect Angular with Auth0

Create an `auth-config.ts` file under your Angular project directory and populate it as follows:

```typescript
// src/environments/auth-config.ts

export const AuthConfig = {
	domain: '',
	clientId: '',
	serverUrl: 'http://localhost:7070', // depending on the port you use in the next section
	 authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://menu.example.com', // we will be using this as part of the server setup
	},
};
```

Head back to your Auth0 application page. Follow these steps to get the `domain` and `clientId` values:

![Auth0 application settings to enable user authentication](https://images.ctfassets.net/23aumh6u8s0i/3jIw7AU2SbVOfAml3x6JNK/206be29f3784c5be87cee993dc8d7947/hello-world-client-settings.png)

1. Click on the "Settings" tab, if you haven't already.

2. Use the "Domain" value from the "Settings" as the value of `domain` in `auth-config.ts`.

3. Use the "Client ID" value from the "Settings" as the value of `clientId` in `auth-config.ts`.

For more information on setting up Auth0 for Angular applications, refer to this [blogpost](https://auth0.com/blog/complete-guide-to-angular-user-authentication/#Connect-Angular-with-Auth0)

> Make sure that the `Allowed Callback URLs`, `Allowed Logout URLs`, and `Allowed Web Origins` in the `Application URIs` section of your app on Auth0 is set to the url of your running app. By default this app runs on `http://localhost:4040`. You can modify the port by updating the `port` in the [`angular.json`](./angular.json).

### Run the project

With the Auth0 configuration set, run the Angular application by issuing the following command:

```bash
npm start
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the application.

## Advanced Auth0 Set Up

### Connecting to an external API

The external API used in this Angular sample is the ["Menu API: Express Sample"](https://github.com/auth0-cookbook/api_express_typescript_menu).

Follow the instructions on that `README` of that repository to set up and run the API. You can read a detailed writeup on how to setup the server side with Auth0 in this [blogpost](https://auth0.com/blog/node-js-and-typescript-tutorial-secure-an-express-api/).

> Make sure that the **Identifier** of the API is set to the same value as the `audience` of the `AuthConfig` in the previous section (`https://menu.example.com`).

You can use the Auth0 Dashboard to create an `admin` role and assign it the following permissions:

- `create:items`
- `delete:items`
- `read:items`
- `update:items`

Then, you can assign the `admin` role to any user that you want to access the `/admin` endpoint.

If you need help doing so, check out the following resources:

- [Create roles](https://auth0.com/docs/authorization/rbac/roles/create-roles)

- [Create permissions](https://auth0.com/docs/get-started/dashboard/add-api-permissions)

- [Add permissions to roles](https://auth0.com/docs/authorization/rbac/roles/add-permissions-to-roles)

- [Assign roles to users](https://auth0.com/docs/users/assign-roles-to-users)
