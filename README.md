# Szevents

## Description

This is a full-stack web application built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [MongoDB](https://www.mongodb.com/atlas) and [Tailwind](https://tailwindcss.com/). The application allows users to create, view, and update events. This project was developed for "Projektmunka 2." subject in the university.

## Features

- User authentication
- User profiles
- Event CRUD (Create, Read, Update, Delete)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later recommended)
- A MongoDB account and cluster set up
- Google Cloud account for OAuth 2.0 credentials
- An Uploadthing account for image upload functionality

## Project Structure

- `app/`: Contains the application's pages and API routes.
- `components/`: Reusable React components.
- `models/`: Data models for MongoDB.
- `public/`: Static files like images.
- `styles/`: Global CSS styles.
- `utils/`: Utility functions and configurations.

## Environment Variables

Set up your environment variables by creating a `.env` file based on the `.example.env` template. Here is a list of required variables and their purposes:

- `GOOGLE_CLIENT_ID`: Your Google Cloud Console client ID for OAuth 2.0.
- `GOOGLE_CLIENT_SECRET`: The client secret associated with your Google Client ID.
- `MONGODB_URI`: Your MongoDB cluster connection URI.
- `UPLOADTHING_APP_ID`: Your Uploadthing ID.
- `UPLOADTHING_SECRET`: Your Uploadthing API key for image upload functionality.

## Technologies

- Next.js version: 14.0.3
- Next-auth version: 4.24.5
- React version: 18.2.0
- Tailwind version: 3.3.3
- UploadThing version: 5.7.4

## Getting Started

To get a local copy up and running follow these simple steps:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/dokesz/next-szevents.git
   ```
2. **Install dependencies**
   ```sh
   cd szevents
   npm install
   ```
3. **Run the app**
   ```sh
   npm run dev
   ```
   The application should now be running on `http://localhost:3000`.

## Contributing

We welcome contributions to the Szevents project. If you're interested in contributing, please fork the repository and submit a pull request with your proposed changes. See our contributing guidelines for more information on how to get started.

## License

This project is license under the [`MIT License`](https://opensource.org/license/mit/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
