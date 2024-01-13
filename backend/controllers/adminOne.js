const adminModel = require("../models/admin");

const getRequest = async (req, res) => {
  const admins = await adminModel.find();
  return res.status(200).json(admins);
};

const postRequest = async (req, res) => {
  const { username, password, mail } = req?.body;
  if (!username || !password || !mail)
    return res.status(400).json({ Alert: "Username/Password/Mail required!" });

  //see if username or mail is taken!
  const existing = await adminModel.find({
    $or: { username: username, mail: mail },
  });

  if (!existing) {
    await adminModel.create({
      username,
      password,
      mail,
    });

    return res.status(201).json({ Alert: `Account Created!` });
  } else {
    return res
      .status(409)
      .json({ Alert: `${username} or ${mail} already taken!` });
  }
};

module.exports = { getRequest, postRequest };
