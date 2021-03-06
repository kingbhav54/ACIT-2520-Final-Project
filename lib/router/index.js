const express = require('express');
const path    = require('path');

const router  = express.Router();
var pF = path.resolve(__dirname, "../../pages");

router.get('/', (req, resp) => {
  resp.render('main.hbs');
});

router.get('/login', (req, resp) => {
  resp.render('main.hbs');
});

router.post('/listings/getListings', (req, resp) => {
  console.log("Attempt to retrive listings");
  resp.send(true);
});

module.exports = router;
