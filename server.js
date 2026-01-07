const express = require("express"); //import express

const path = require("path"); //Import path (built-in Node module)

const app = express(); // creating an instance of express

const port = 3000; //  Define port number
//middleware
app.use(express.static(path.join(__dirname, "public")));

// Routes
//Route for homepage
app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Route for contact page
app.get("/contact", (req, res) => {
   res.sendFile(path.join(__dirname, "public", "contact.html"));
});

//Start the server
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});



// node.js - res.sendFile absolute path - Stack Overflow
// res.sendFile(path.resolve("./public/index.html")) just for information