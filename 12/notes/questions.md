
### **Critical Questions**

#### **Q1: What is the role of `componentDidMount` in the React lifecycle?**
- **Answer**:  
  `componentDidMount` is a lifecycle method that runs after the component is initially rendered to the DOM. It is ideal for fetching data or performing any operations that should occur once the component is ready.

---

#### **Q2: How does `fetch()` work in React for data retrieval, and what does the `.json()` method do?**
- **Answer**:  
  `fetch()` sends a GET request to the specified URL and returns a promise. The `.json()` method converts the response to JSON format. It is useful when the server returns JSON data that needs to be processed.

---

#### **Q3: Why is `cors` used in the backend, and what does it do?**
- **Answer**:  
  `cors` is middleware used to handle cross-origin requests. It allows the backend to accept requests from different origins (e.g., the React app running on `localhost:3000` to access the server on `localhost:8080`).

---

#### **Q4: What would happen if the backend server is not running when the React app attempts to fetch data?**
- **Answer**:  
  The fetch request will fail, and the browser will likely show a CORS error or a network error, depending on the setup and the state of the backend server.

---

#### **Q5: What is the purpose of using `setState` in the `App.js` file?**
- **Answer**:  
  `setState` is used to update the component's state. This triggers a re-render of the component with the updated data, ensuring the UI reflects the latest information.

---

#### **Q6: Why is it important to use `key` when rendering lists in React, and why is it not included in the current code?**
- **Answer**:  
  React requires a unique `key` prop to identify each item in a list. This helps React optimize rendering and avoid unnecessary re-renders. Although not included in the current code, it should be added to the `<div>` tags inside the `map()` method.

---

#### **Q7: How could you handle errors during data fetching in React, and why is it important?**
- **Answer**:  
  You could use `.catch()` to handle errors, such as network failures or invalid responses. It’s important to prevent the app from crashing and provide a graceful fallback (like a loading indicator or error message).

---

#### **Q8: Why might the internal and external marks be displayed in a single row instead of aligned with individual student rows in the table?**
- **Answer**:  
  The current implementation places all student names, internal marks, and external marks in a single row, which can misalign the data. Instead, each student should have its own row in the table, and their corresponding marks should be displayed in separate columns.

---

#### **Q9: How can the `refreshStudents` method be improved for better error handling or user feedback?**
- **Answer**:  
  `refreshStudents` can be improved by adding error handling, like a `try-catch` block or `.catch()` to catch any fetch errors. You can also display a loading spinner or message to indicate that data is being loaded.

---

#### **Q10: What modifications would you make to ensure the data is updated properly when clicking the "Display Internal Marks" and "Display External Marks" buttons?**
- **Answer**:  
  Instead of updating the entire `state` each time, you could update only the specific part of the state (e.g., internal or external marks) when the respective button is clicked. Additionally, you could ensure that only the relevant data is rendered for each student.

---

