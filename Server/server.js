const express = require("express");

const app = express();

const port = 4000;

// Listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port}!!`);
});


// Routes
app.get("/", (request, response) => {
    response.json({msg: 'welcome to the app!'});
});
