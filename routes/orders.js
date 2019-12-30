const express = require("express");
// const axios = require("axios");
const router = express.Router();
const { createMollieClient } = require("@mollie/api-client");
// const auth = require("../middeleware/auth");
// const admin = require("../middeleware/admin");
// const validateObjectId = require("../middeleware/validateObjectId");

router.get("/", async function(req, res) {
  res.send("active");
  // const genres = await Genre.find({});
  // res.send(genres);
});

router.post("/", async function(req, res) {
  const mollieClient = createMollieClient({
    apiKey: "test_C7HBBTMHxbxfKFpUE4Gq5FAUT6gnE9"
  });
  let result = {};
  const extraParams = {
    locale: "nl_BE",
    orderNumber: "533433",
    redirectUrl: "https://example.org/redirect",
    webhookUrl: "https://example.org/webhook"
  };
  const request = { ...req.body, ...extraParams };
  try {
    const mollieResponse = await mollieClient.orders.create(request);
    result = mollieResponse._links.checkout.href;
  } catch (error) {
    result = error;
  }
  // const result = validate(genreRequest);
  // if (result.error) return res.status(400).send(result.error.details);
  res.send(result);
});

// router.get("/:id", validateObjectId, async function(req, res) {
//   const genre = await Genre.findById(req.params.id);
//   if (!genre) return res.status(404).send("The genre with the id is not found");
//   res.send(genre);
// });

// router.delete("/:id", [auth, admin, validateObjectId], async function(
//   req,
//   res
// ) {
//   const id = req.params.id;
//   const genre = await Genre.findById(id);
//   if (!genre) return res.status(404).send("The genre with the id is not found");
//   await Genre.deleteOne({ _id: id });
//   res.send(genre);
// });

module.exports = router;
