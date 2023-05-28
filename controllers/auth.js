import bcrypt from "bcrypt";
import User from "../models/User.js";

const login = async (req, res) => {
  try {
    const user = await User.findOne({ ID: req.body.ID });
    if (!user) return res.status(401).json("No user found!");
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(403).json("Wrong credintials!");
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const register = async (req, res) => {
  try {
    const { password, ...others } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ ...others, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
export { login, register, getUsers };
