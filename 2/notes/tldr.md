### Explanation of the Files wrt 1 st folder:

#### `index.html`
- **Purpose**: Displays information about the Computer Science and Engineering Department.
- **Key Changes**:
  - Includes **internal styling** and links to an external stylesheet (`styles.css`) for consistent design across pages.
  - Updated header:
    - Department name styled with a blue font.
    - Subheading ("Computer Science and Engineering Department") in purple using the external stylesheet.
  - **Layout Improvements**:
    - Content is divided into two main sections using styled `div` elements:
      - `divleft`: A navigation menu on the left.
      - `divright`: Contains the department's introduction and detailed information.
    - Image aligned to the left for a cleaner presentation.

---

#### `mission.html`
- **Purpose**: Displays the mission statement of the department.
- **Key Features**:
  - Uses the same header and layout as the previous version.
  - Links to the `styles.css` file for styling.
  - Displays the department’s mission within a bordered `table` element.
- **Reused Features**:
  - Navigation menu links to `index.html`, `vision.html`, and `mission.html`.
  - Includes the department image (`csed.jpeg`) and mission description.

---

#### `vision.html`
- **Purpose**: Displays the vision statement of the department.
- **Key Features**:
  - Shares the same structure and styling as `mission.html`.
  - Highlights the department’s vision, emphasizing its goal to prepare professionals for the evolving needs of society.
  - Includes navigation and styling similar to other pages.

---

#### `styles.css`
- **Purpose**: Provides consistent styling for all pages.
- **Details**:
  - `body`: Sets a **powder blue background color** for the pages.
  - `h3`: Changes heading level 3 text to **green**.
  - `div`: Adds a **solid border** to all `div` elements.
  - `p`: Styles paragraphs with:
    - **Red text color**.
    - **Courier font family** for a technical look.
    - Font size of **18px**.
  - `img`: Floats images to the left for better alignment with text.
  - `.divleft`:
    - Creates a **fixed-width navigation menu** on the left.
    - Adds **padding** for better spacing.
  - `.divright`: Allocates 88% of the width for the main content area.
  - `#divl`: Adds a **grey background color** to the left navigation menu.

---

### Improvements Over the Previous Version:
1. **Styling Consistency**:
   - All pages now use `styles.css` for a unified look and feel.

2. **Separation of Concerns**:
   - Styling moved to a dedicated CSS file for better maintainability.

3. **Modern Layout**:
   - `div`-based layout replaces tables in `index.html`, offering more flexibility and readability.

4. **Improved Readability**:
   - Bold and italic styles added to emphasize key terms.
   - Left-aligned images create a visually appealing layout.

5. **Reusability**:
   - Common elements (headers, navigation, and images) are styled uniformly across pages.

---
