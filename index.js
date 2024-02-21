const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("./public"));
// end stating templates

// middleware thing
app.use((req, res, next) => {
  console.log("middleware load");
  next();
});

// link stating
app.get("/", (req, res) => {
  res.render("index", { name: "Rajiv kumar" });
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/profile/:username", (req, res) => {
  res.render("profile", { pro: req.params.username });
});

app.get("/error", (req, res, next) => {
  throw Error("something wont wrong here! please back to the page!!!");
});


// error finding
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

// port starting
app.listen(port, () => {
  console.log(`Our Website hosting on This ${port} Port`);
});
