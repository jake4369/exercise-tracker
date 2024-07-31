# freeCodeCamp - Back End Development and APIs Projects

## Project 4 - Exercise Tracker

View project spec on freeCodeCamp - [https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker]

Live project - [https://exercise-tracker-7da3.onrender.com/]

## Run on your local machine

To set up and run the URL Shortener Microservice on your local machine, you'll need to follow these steps. This includes setting up the necessary dependencies, connecting to MongoDB, and running the application.

Here's a step-by-step guide:

### Step 1: Clone the Repository

First, clone the project repository to your local machine. Open a terminal and run:

```
git clone https://github.com/jake4369/exercise-tracker.git
cd exercise-tracker
```

### Step 2: Install Dependencies

Next, install the necessary dependencies. Make sure you have Node.js and npm installed. You can install the dependencies by running:

```
npm install
```

### Step 3: Set Up MongoDB

Ensure you have MongoDB installed and running on your local machine. You can download and install MongoDB from the official MongoDB website.

Once MongoDB is installed, start the MongoDB service

```
mongodb
```

Alternatively, if you are using MongoDB Atlas, you can create a database cluster there and get the connection string.

### Step 4: Configure Environment Variables

Create a .env file in the root directory of the project. This file will hold your environment variables, including your MongoDB connection string. Add the following content to the .env file:

```
MONGO_URI=mongodb://localhost:27017/exercisetracker
PORT=3000
```

Replace mongodb://localhost:27017/exercisetracker with your MongoDB connection string if you are using MongoDB Atlas.

### Step 5: Run the Application

Start the application by running:

```
npm start
```

### Step 6: Test the Application

Open Your Application
Open your web browser and navigate to http://localhost:3000. You should see your application running. From here, you can:

Create a New User: Use the provided form on the home page to add a new user.
Add a New Exercise: Use the form on the home page to add an exercise for an existing user.
View User Exercises
To view a list of a user's exercises, navigate to:

```
http://localhost:3000/api/users/:_id/exercises
```

Replace :\_id with the actual user ID.

##### View User Log

To view a complete user log, navigate to:

```
http://localhost:3000/api/users/:_id/logs
```

Replace :\_id with the actual user ID.

Retrieve Specific Log Entries
You can also filter and limit the log entries using query parameters. To do this, use the following format:

```
http://localhost:3000/api/users/:_id/logs?from=yyyy-mm-dd&to=yyyy-mm-dd&limit=number
```

- from: Start date for filtering logs (in yyyy-mm-dd format).
- to: End date for filtering logs (in yyyy-mm-dd format).
- limit: The maximum number of logs to return (integer).

#### Examples:

To get logs for a user with ID 12345 from January 1, 2024, to July 31, 2024, with a maximum of 10 entries:

```
http://localhost:3000/api/users/12345/logs?from=2024-01-01&to=2024-07-31&limit=10
```

To retrieve logs from February 1, 2024, with no date range limit and a maximum of 5 logs:

```
http://localhost:3000/api/users/12345/logs?from=2024-02-01&limit=5
```

This flexibility allows you to tailor the log output according to specific dates and the number of entries you need.
