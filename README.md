This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# next-firebase-tailwind

This project is a Next.js application that utilizes Tailwind CSS for styling and Firebase for backend services.

## Technologies Used

Here are the core technologies used in this project:

- **Next.js**: Next.js is a React framework that enables features like server-side rendering and generating static websites for React based web applications. It's a production-ready framework that helps developers to create fast, robust, and feature-rich applications.

- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. It's highly customizable and offers deeper control over styles.

- **Firebase**: Firebase is a Backend-as-a-Service (BaaS) that provides powerful features for building web and mobile applications. It offers real-time database, different APIs, multiple authentication types and hosting platform.

## Getting Started

Before you start, make sure you have Node.js (^18.16) and Yarn installed on your machine.

### Steps

1. Clone the repository:

```bash
   git clone https://github.com/david-potgieter/next-firebase-tailwind.git
```

2. Navigate into the project directory:

```bash
    cd next-firebase-tailwind
```

3. Install the dependencies:

```bash
    yarn get-started
```

4. Start NextJS dev:

```bash
    yarn dev
```

5. Start functions dev:

```bash
    yarn dev:func
```

6. Start Firebase emulators:

```bash
    yarn dev:em
```

### Available Scripts

In the project directory, you can run the following scripts:

- `yarn dev`: Runs the app in the development mode.
- `yarn build`: Builds the app for production.
- `yarn start`: Runs the built app in production mode.
- `yarn lint`: Runs the linter.
- `yarn predev:func`: Builds the functions.
- `yarn dev:func`: Runs the functions.
- `yarn predev:em`: Kills the port.
- `yarn dev:em`: Starts the firebase emulators.
