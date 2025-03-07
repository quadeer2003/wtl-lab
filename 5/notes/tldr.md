### Lines of Code Ensuring Validation:

1. **Roll Number Validation**:
   - `var rn = document.getElementById('roll');`
   - `if(rn.value == "") { alert("Roll No Cannot be Empty"); return false; }`
   - `if (rn.value.search(/[0-9]{4}-[0-9]{2}-[0-9]{3}-[0-9]{3}$/) != 0) { alert('Invalid Roll Number'); return false; }`
   
   **Explanation**: This checks if the roll number is empty and shows an alert if it is. It also validates the format of the roll number (e.g., `xxxx-xx-xxx-xxx`) using a regular expression. If the format doesn't match, it alerts the user and prevents form submission.

2. **Student Name Validation**:
   - `var sn = document.getElementById("sname");`
   - `if (sn.value == "" || sn.value.search(/[A-Z a-z]*$/) != 0) { alert('Invalid Name'); return false; }`
   
   **Explanation**: This checks if the student’s name field is empty or contains invalid characters. It ensures the name contains only letters (no numbers or special characters) by using a regular expression.

3. **Password and Confirm Password Validation**:
   - `var pass = document.getElementById('pwd');`
   - `var cpass = document.getElementById('cpwd');`
   - `if (pass.value == "" || cpass.value == "" || pass.value != cpass.value) { alert("Password do not Match"); pass.focus(); return false; }`
   
   **Explanation**: This ensures that both the password and confirm password fields are filled out. It also checks that both password fields match. If they don’t, it alerts the user and prevents submission.

4. **Phone Number Validation**:
   - `var pho = document.getElementById("ph");`
   - `if (pho.value.search(/[0-9]{10}$/) != 0) { alert('Invalid Phone Number'); return false; }`
   
   **Explanation**: This validates the phone number field to ensure that it contains exactly 10 digits, using a regular expression.

5. **Email Validation**:
   - `var em = document.getElementById("email");`
   - `if (em.value.search(/[A-Z a-z 0-9._]*@[A-Z a-z]*\.[A-Z a-z]*$/) == 0) { return true; } else { alert("Not a valid e-mail address"); return false; }`
   
   **Explanation**: This checks if the email input follows a valid format (e.g., `user@example.com`) using a regular expression. If it’s invalid, it alerts the user and prevents submission.

### Summary:
The validation logic in this code ensures that:
- The roll number is not empty and matches a specific format.
- The student name is not empty and contains only alphabetic characters.
- The password and confirm password fields match.
- The phone number is a valid 10-digit number.
- The email is in a valid email format.

If any validation fails, an alert is shown and the form submission is prevented using `return false`.