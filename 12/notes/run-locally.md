- Create folder "12"
- Inside folder "12" create folder RestService
- Inside folder "12" create folder spa

- //For RestService
- Open VS Code
- Goto file->open folder "12", open "RestService" folder and select folder "RestService"
- 
- Open terminal and execute:
- //In College Proxy: npm config set proxy http://10.2.0.25:3128
- Run npm init -y
- Run npm install express
- Run npm install cors

- Click new file in the explorer window
- Name the file as index.js
- Type the code from index.js file
- copy the files emarks.json, imarks.json and students.json


- Goto Terminal->New Terminal
- In the terminal run node index.js
- 
- Open webbrowser and check url :
- http://localhost:8080/students
- http://localhost:8080/imarks
- http://localhost:8080/emarks

 
- //For SPA
- Open VS Code
- Goto file->open folder "12", open "spa" folder and select folder "spa"
- 
- Open terminal and execute:
- //In College Proxy: npm config set proxy http://10.2.0.25:3128
- npm install -g create-react-app
- npx create-react-app . //make sure folder 10 is empty
- npm start
- 
- wait till installation completes and subfolders and files are created
- Open src and open App.js file
- Remove all statements from App.js file
- Save the App.js file and Reload the page in the web browser
- Type the code from App.js file
