### **3. Critical Questions**

#### **Q1: What is JSX, and why is it used in React?**
- **Answer**:  
  JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes it easier to visualize the UI structure in React applications.

---

#### **Q2: How does the `style` attribute in JSX differ from HTML?**
- **Answer**:  
  In JSX, the `style` attribute accepts an object with camelCase property names (e.g., `backgroundColor` instead of `background-color`).

---

#### **Q3: What is the role of `GetVision` in this code?**
- **Answer**:  
  `GetVision` is a functional component that encapsulates the vision section of the app. It makes the code modular and reusable.

---

#### **Q4: Why do we use curly braces `{}` in JSX?**
- **Answer**:  
  Curly braces are used to embed JavaScript expressions within JSX.

---

#### **Q5: How can the navigation links (`mynav`) be improved for better user experience?**
- **Answer**:  
  - Add `href` attributes pointing to actual pages.
  - Use a navigation bar component for better design and accessibility.

---

#### **Q6: What is the significance of `dd.toDateString()` in this app?**
- **Answer**:  
  It converts the current date object (`dd`) into a readable string format and displays it dynamically.

---

#### **Q7: How does the `App.css` file contribute to this application?**
- **Answer**:  
  It styles the components globally in the app. Any classes or styles defined in `App.css` will be applied where referenced.

---

#### **Q8: How can we pass dynamic data to `GetVision`?**
- **Answer**:  
  Use props to pass data:
  ```javascript
  <GetVision vision="Your Vision Statement" />
  ```
  Modify the `GetVision` component to accept props:
  ```javascript
  function GetVision(props) {
      return (
          <div>
              <h3>Vision</h3>
              <p>{props.vision}</p>
          </div>
      );
  }
  ```

---

#### **Q9: What happens if you try to use invalid JavaScript expressions in JSX?**
- **Answer**:  
  It results in a syntax error during compilation, as JSX strictly enforces valid JavaScript expressions.

---

#### **Q10: How can we improve this application for better maintainability?**
- **Answer**:  
  - Split components (e.g., `Header`, `Navigation`) into separate files.
  - Use React state to manage dynamic data instead of hardcoding values.
  - Replace inline styles with CSS modules or styled-components for scoped styling.

