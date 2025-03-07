### Explanation of the `index.js` File

#### Purpose:
This Node.js script demonstrates server-side programming and file operations. It creates a basic HTTP server, displays system information, reads from a file, and performs file creation, writing, appending, and renaming.

---

#### Key Functionalities:

1. **Dependencies Imported**:
   - **`http`**: Used to create the HTTP server.
   - **`os`**: Provides information about the operating system.
   - **`fs`**: Handles file system operations.

---

2. **HTTP Server Creation**:
   - **Method Used**: `http.createServer()`.
   - **Details**:
     - Responds with a 200 status code and `Content-Type: text/html`.
     - Writes information such as:
       - Greeting (`Hello Web Technologies Lab`).
       - Current date and time (`Date()`).
       - System details like:
         - **Platform**: The OS platform (e.g., `win32` or `linux`).
         - **Architecture**: System architecture (e.g., `x64`).
         - **HostName**: The hostname of the computer.
         - **OS Type**: The operating system type (e.g., `Linux` or `Windows_NT`).
     - Reads the contents of `content.txt` and includes it in the response using `fs.readFileSync`.
   - **Port**: The server listens on port `8080`.

---

3. **File System Operations**:
   - The script demonstrates basic file manipulations:
   
   **a. Creating a File**:
   - **Method**: `fs.open()`.
     - Creates `myfile1.txt` in **write mode (`'w'`)**.
     - Logs "Saved!" to the console after successful creation.

   **b. Writing to a File**:
   - **Method**: `fs.writeFile()`.
     - Creates `myfile3.txt` (or overwrites it if it already exists).
     - Writes the text "Hello Lab" to the file.
     - Logs "Saved!" to the console upon success.

   **c. Appending to a File**:
   - **Method**: `fs.appendFile()`.
     - Appends the text "Hello Web" to `myfile1.txt`.
     - Logs "Saved!" to the console upon success.

   **d. Renaming a File**:
   - **Method**: `fs.rename()`.
     - Renames `myfile3.txt` to `myfile4.txt`.
     - Logs "File Renamed!" to the console if successful.

---

#### Execution Flow:
1. The HTTP server starts on port 8080.
2. Upon receiving a request:
   - Responds with system information and the content of `content.txt`.
3. File operations are performed after the server setup:
   - `myfile1.txt` is created and appended with content.
   - `myfile3.txt` is written with content and then renamed to `myfile4.txt`.

---

