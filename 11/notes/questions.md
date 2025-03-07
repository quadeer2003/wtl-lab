### **3. Critical Questions**

#### **Q1: What are functional components in React, and how do they differ from class components?**
- **Answer**:  
  Functional components are simple JavaScript functions that return JSX. They are lightweight and typically used for rendering UI. Class components are more complex, have additional features like lifecycle methods, and are mostly used when stateful behavior is required (though this is changing with hooks in functional components).

---

#### **Q2: How are props passed in React components, and what’s the benefit of using them?**
- **Answer**:  
  Props are passed from parent components to child components as attributes. They allow data sharing between components, promoting reusability and modularity of code.

---

#### **Q3: How can you handle form data and submit it in React?**
- **Answer**:  
  Form data can be handled using controlled components (where the form input's value is bound to state) or by capturing event data on form submission.

---

#### **Q4: What is the purpose of the `key` prop in React lists, and why is it important?**
- **Answer**:  
  The `key` prop helps React identify which items in the list have changed, been added, or removed. It improves performance by enabling efficient re-rendering.

---

#### **Q5: What is the advantage of using a `map()` function to render lists in React?**
- **Answer**:  
  `map()` allows you to dynamically generate UI elements from an array, making your component flexible and scalable with minimal code.

---

#### **Q6: What are the implications of not using `key` in list rendering in React?**
- **Answer**:  
  If `key` is not used, React will face difficulties when reordering, adding, or removing list items, which can lead to inefficient rendering or bugs.

---

#### **Q7: How does React handle event binding and what is the purpose of using arrow functions for events?**
- **Answer**:  
  React automatically binds event handlers to the component instance. Arrow functions maintain the correct `this` context, so event handlers work as expected without the need for manual binding.

---

#### **Q8: What is the role of the `onClick` event in React, and how is it different from traditional JavaScript event handling?**
- **Answer**:  
  `onClick` is used in React to handle user clicks. Unlike traditional JavaScript, React uses camelCase for event names and passes the event handler as a function.

---

#### **Q9: What happens when you submit a form without handling the form data in React?**
- **Answer**:  
  If a form is submitted without handling the data, the page will reload by default, losing any data entered unless handled with a custom event handler (usually with `event.preventDefault()`).

---

#### **Q10: How can the `StudentsData` component be improved to handle dynamic data from an API or database?**
- **Answer**:  
  You can use React hooks (like `useEffect`) to fetch data asynchronously from an API and update the component's state with the retrieved data, which will re-render the component.

---

