const express = require("express");
const router = express.Router();
const model = require("../models/items");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const items = await model.find();
      return res.status(200).json(items);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ Alert: "Couldn't get data!" });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, description, quantity, price } = req?.body;
      if (!name || !quantity || !price)
        return res.status(400).json({ Alert: "Name/Quantity/Price missing!" });

      const existence = model.find({
        $or: { name: name, quantity: quantity, price: price },
      });

      if (!existence) {
        await model.create({
          name,
          description,
          quantity,
          price,
        });
        return res.status(201).json({ Alert: `${name} Added` });
      } else {
        return res.status(409).json({ Alert: `${name} already Exists!` });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ Alert: "Server Error!" });
    }
  });

router
  .route("/:id")
  .put(async (req, res) => {
    try {
      const { id } = req?.params;
      const { name, description, quantity, price } = req?.body;
      if (!id) return res.status(403).json({ Alert: "ID required!" });

      const existence = await model.findOne({ _id: String(id) });
      if (!existence) {
        return res.status(403).json({ Alert: "Invalid ID" });
      } else {
        await existence.updateOne({ name: name, description, quantity, price });
        return res.status(200).json(existence);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ Alert: "Server failure!" });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req?.params;
      if (!id) return res.status(403).json({ Alert: "ID required!" });

      const existence = await model.findOne({ _id: String(id) });
      if (!existence) {
        return res.status(403).json({ Alert: "Invalid ID" });
      } else {
        await existence.deleteOne();
        return res.status(200).json("Deleted!");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ Alert: "Server failure!" });
    }
  });

module.exports = router;
