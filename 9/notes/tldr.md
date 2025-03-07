### 

memo.ejs


- `<html>`, `<head>`, `<title>`, `<body>`: Standard HTML tags to structure the document.
- `<center><h1>Marks Memo</h1>`: Centers and displays the main heading.
- `<table width="60%" border="1">`: Creates a table with 60% width and a border.
- `<tr>`: Defines a row in the table.
- `<th>`: Defines a header cell in the table.
- `<% data.forEach(function(data) { %>`: EJS syntax to iterate over the `data` array.
- `<tr align="center">`: Defines a centered row for each item in `data`.
- `<td><%= data.id %></td>`: EJS syntax to insert the `id` property of the current `data` item.
- `<td><%= data.code %></td>`: EJS syntax to insert the `code` property of the current `data` item.

### 

index.js



- `var express = require("express");`: Imports the Express module.
- `var ejs = require("ejs");`: Imports the EJS module.
- `var app = express();`: Creates an Express application.
- `var data = [...]`: Defines an array of objects representing the data model.
- `app.set("view engine", "ejs");`: Sets EJS as the templating engine.
- `app.set("views", __dirname + "/views");`: Sets the directory for the views.
- `app.get("/", (req, res) => { res.render("memo", { data }); });`: Defines a route for the root URL that renders the 

memo.ejs

 template with the `data` array.
- `app.listen(8082);`: Starts the server on port 8082.