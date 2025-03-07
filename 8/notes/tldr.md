Explanation of the Code
index.js:

-This is the main entry point of your application.
- It imports the Express framework and creates an Express application instance.
- It imports the login and signup routes from the Routes directory.
- It defines a root route (/) that sends a "Hello Lab" message.
- It uses the login and signup routes for /login and /signup paths respectively.
- It defines a dynamic route /display/:uname/:pwd that captures uname and pwd from the URL and logs them along with any query parameters.
- Finally, it starts the server on port 8080.
- Routes/login.js:
- 
- This file defines the login route.
- It creates an Express router instance.
- It defines GET and POST handlers for the root path (/) of the login route, both sending a "Login Page" message.
- It exports the router instance.
- Routes/signup.js:
- 
- This file defines the signup route.
- It creates an Express router instance.
- It defines GET and POST handlers for the root path (/) of the signup route, both sending a "Signup Page" message.
- It exports the router instance.
- Testing the Application
- After starting the server, you can test the routes using a web browser or a tool like Postman:
- 
- Open http://localhost:8080/ to see "Hello Lab".
- Open http://localhost:8080/login to see "Login Page".
- Open http://localhost:8080/signup to see "Signup Page".
- Open http://localhost:8080/display/username/password to see "Values Received: username" and check the console for logged values.