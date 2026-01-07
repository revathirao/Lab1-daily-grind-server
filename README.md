## What is the difference between res.send() and res.sendFile()? When would you use one over the other?

## res.send()

Used to send text, HTML strings, JSON, or small responses
Write the content directly in your code
Example:
res.send("Welcome to The Daily Grind!");

Use res.send() when:
Sending simple text
Sending JSON data from an API
Sending dynamically generated content

## res.sendFile()

Used to send actual files (HTML, images, PDFs, etc.)
Requires an absolute file path
Example:

res.sendFile(path.join(\_\_dirname, "public", "index.html"));

Use res.sendFile() when:
Serving HTML pages
Serving images or downloadable files
Or using file saved on disk

## ------------------------------------------------------------

## 2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'

Path module is neccessary because :
The path module creates absolute paths
It works correctly on all operating systems (Windows, Mac, Linux)
It prevents file-not-found errors
path.join(\_\_dirname, "public", "index.html")

## What could go wrong if you just used a relative path like 'public/index.html'

res.sendFile("public/index.html"); // relative path
Problems:
The server might be started from a different directory
Relative paths depend on the current working directory
Paths behave differently on different OS
Can cause file not found errors

## -------------------------------------------------------------

## 3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?

# Step 1: Create foldr public/

Create a new file:
public/menu.html

# step 2: Add a route in server.js

app.get("/menu", (req, res) => {
res.sendFile(path.join(\_\_dirname, "public", "menu.html"));
});

# Step 3: Test in browser
run: node server.js
Visit:
http://localhost:3000/menu
