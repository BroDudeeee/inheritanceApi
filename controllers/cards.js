import Card from "../models/Card.js";

const createCard = async (req, res) => {
  try {
    const newCard = await Card.create(req.body);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({ userId: req.body.userId });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { createCard, getCards };
