const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.render('index');
  } catch (err) {
    next(err);
  }
});

module.exports = router;