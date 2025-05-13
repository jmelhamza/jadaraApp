
import nodemon from "nodemon";
import e from "express";
const app = e();


app.get('/', (req, res) => {
    res.send('👋 hi ana hamza mn server express');
});


app.listen(3000, () => {
    console.log(' server is connected http://localhost:3000');
});
