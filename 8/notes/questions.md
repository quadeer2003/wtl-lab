
### **3. Critical Questions**

#### **Q1: How does `app.use` differ from `app.get` in Express.js?**
- **Answer**:  
  - `app.use`: Mounts middleware functions or route handlers at a specific path.  
  - `app.get`: Defines a route handler for `GET` requests at a specific path.

---

#### **Q2: What is the role of `module.exports` in Node.js?**
- **Answer**:  
  `module.exports` is used to export objects, functions, or variables from a module so they can be used in other files using `require`.

---

#### **Q3: What happens if `/login` or `/signup` routes are missing?**
- **Answer**:  
  The server will return a 404 error for those routes. Ensure the route modules exist and are correctly referenced in `app.js`.

---

#### **Q4: Why do we use `req.params` and `req.query`?**
- **Answer**:  
  - `req.params`: Accesses route parameters in dynamic routes (e.g., `/:uname/:pwd`).  
  - `req.query`: Accesses query string parameters appended to the URL (e.g., `?key=value`).

---

#### **Q5: How can you secure sensitive data like passwords passed through dynamic routes?**
- **Answer**:  
  Avoid passing sensitive data in URLs. Use POST requests with a secure connection (HTTPS) and encrypt sensitive data before sending.

---

#### **Q6: What are the benefits of using route modules (e.g., `login.js`, `signup.js`)?**
- **Answer**:  
  Route modules improve code organization by separating route logic into independent files, making the codebase easier to manage and scale.

---

#### **Q7: How does Express handle HTTP methods (`GET`, `POST`, etc.) differently?**
- **Answer**:  
  Each method (`app.get`, `app.post`, etc.) handles specific types of HTTP requests. For example:
  - `GET`: Retrieve data.
  - `POST`: Submit data to the server.

---

#### **Q8: What would happen if you define a `POST` route but send a `GET` request?**
- **Answer**:  
  The server will not match the route and will likely return a 404 error, as the HTTP method doesn't match.

---

#### **Q9: How do you handle errors in Express routes?**
- **Answer**:  
  Use middleware or a custom error handler. Example:
  ```javascript
  app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
  });
  ```

---

#### **Q10: How can you handle JSON data in POST requests?**
- **Answer**:  
  Use the built-in `express.json()` middleware:
  ```javascript
  app.use(express.json());
  ```
  This parses incoming JSON requests and makes the data available in `req.body`.

