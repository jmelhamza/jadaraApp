const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send(' hi ana hamza mn server express');
    app.listen(3000, () => {
        console.log('✅ السيرفر خدام على http://localhost:3000');
      });