const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// Connecting to MongoDB database
mongoose
  .connect("mongodb://localhost/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Creating a schema and model for the contact form submission
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

// Serving static files from the React build directory
app.use(express.json());

// API endpoint to handle contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Creating a new contact document
  const contact = new Contact({
    name,
    email,
    message,
  });

  // Saving the contact form submission to the database
  contact
    .save()
    .then(() => {
      console.log("Contact form submitted:", contact);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error saving contact form submission:", error);
      res.sendStatus(500);
    });
});

// Serving React app for other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio", "build", "index.html"));
});

// Starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
