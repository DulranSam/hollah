const adminModel = require("../models/admin");

const updateAdmin = async (req, res) => {
  try {
    const { id } = req?.params;
    const { username, password, mail } = req?.body;
    if (!id) return res.status(400).json({ Alert: "No ID" });

    const existing = await adminModel.findOne({ _id: String(id) });
    if (!existing) {
      return res.status(404).json({ Alert: "Invalid ID" });
    } else {
      await existing.updateOne({ $or: { username, password, mail } });
      return res.status(200).json({ Alert: "Updated" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ Alert: "Server Failure!" });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req?.params;

    if (!id) return res.status(400).json({ Alert: "No ID" });

    const existing = await adminModel.findOne({ _id: String(id) });
    if (!existing) {
      return res.status(404).json({ Alert: "Invalid ID" });
    } else {
      await existing.deleteOne();
      return res.status(200).json({ Alert: "Deleted" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ Alert: "Server Failure!" });
  }
};

module.exports = { updateAdmin, deleteAdmin };
