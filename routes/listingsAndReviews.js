const express = require("express");
const ListingsAndReviews = require("../models/ListingsAndReviews");

const router = express.Router();

router.get("/listings", async (req, res) => {
  const data = await ListingsAndReviews.find()
    .limit(Number(req.query["limit"]))
    .skip(Number(req.query["skip"]))
    .lean();

  res.send(data);
});

module.exports = router;
