const express = require('express');
const app = express();

// هادي route رئيسية
app.get('/', (req, res) => {
    res.send('👋 hi ana hamza mn server express');
});

// تشغيل السيرفر
app.listen(3000, () => {
    console.log(' server khddam hna http://localhost:3000');
});
