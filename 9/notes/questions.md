### **3. Critical Questions**

#### **Q1: What is EJS, and why is it used here?**
- **Answer**:  
  EJS (Embedded JavaScript) is a template engine for rendering dynamic HTML pages. It allows us to embed JavaScript into HTML, making it ideal for displaying data dynamically.


#### **Q2: What is the purpose of the `set` methods in the code?**
- **Answer**:  
  The `app.set` methods configure the application:
  - `view engine`: Specifies the template engine (EJS).
  - `views`: Specifies the folder where EJS templates are stored.


#### **Q3: How does the `res.render` function work?**
- **Answer**:  
  The `res.render` function renders an EJS template and passes data to it. In this case, it renders `memo.ejs` with the `data` array.



#### **Q4: Why is `<% %>` used in the EJS template?**
- **Answer**:  
  `<% %>` is used for embedding JavaScript code inside an EJS template, enabling us to iterate over the `data` array and display its contents dynamically.



#### **Q5: What will happen if the `views` folder is not properly set?**
- **Answer**:  
  The server will not find the EJS template and throw an error. The `views` folder must be correctly specified using `app.set("views", ...)`.



#### **Q6: How can you handle errors if `data` is empty?**
- **Answer**:  
  Add a condition in the EJS template to display a message if `data` is empty:
  ```html
  <% if (data.length === 0) { %>
      <tr><td colspan="5" align="center">No Data Available</td></tr>
  <% } %>
  ```



#### **Q7: How do you extend this code to add new subjects dynamically?**
- **Answer**:  
  Implement a POST route to accept new subject details and append them to the `data` array. Example:
  ```javascript
  app.post("/add", (req, res) => {
      data.push(req.body);
      res.redirect("/");
  });
  ```



#### **Q8: What is the role of the `forEach` method in this template?**
- **Answer**:  
  The `forEach` method iterates through the `data` array and dynamically generates table rows for each entry.



#### **Q9: How can you make the server listen on a different port?**
- **Answer**:  
  Change the port number in the `app.listen` method:
  ```javascript
  app.listen(3000);
  ```



#### **Q10: How can you style the EJS output?**
- **Answer**:  
  Add an external CSS file:
  - Save the CSS in a folder (e.g., `public/styles.css`).
  - Serve the static files using:
    ```javascript
    app.use(express.static("public"));
    ```
  - Link the CSS file in the EJS template:
    ```html
    <link rel="stylesheet" href="/styles.css">
    ```

