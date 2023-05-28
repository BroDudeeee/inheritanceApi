import Reference from "../models/Reference.js";

const getReferences = async (req, res) => {
  try {
    const references = await Reference.find({});
    res.status(200).json(references);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createReferences = async (req, res) => {
  try {
    const newReference = await Reference.create(req.body);
    res.status(201).json(newReference);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getReferences, createReferences };
