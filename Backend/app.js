const express = require("express");
const app = express();
const port = 4000;

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

const dataUser = require ('./routes/routerUser.js');
const dataAbsen = require ('./routes/routerAbsen.js');
const loginUser = require ('./routes/routesLogin.js')

// const dataabsen = require("./models/dataabsen.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

//
app.use( express.json());

app.use ('/', dataUser)
app.use ('/', dataAbsen)
app.use ('/', loginUser)



// jwt
// Middleware
