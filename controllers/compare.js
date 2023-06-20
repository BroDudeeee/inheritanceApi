import stringSimilarity from "string-similarity";
import Question from "../models/Question.js";

const compare = async (req, res) => {
  try {
    const questions = await Question.find();
    const matches = await stringSimilarity.findBestMatch(
      req.body.question,
      questions.map((quest) => quest.question)
    );
    console.log(matches.bestMatch.rating);
    if (matches.bestMatch.rating < 0.3) {
      return res.status(200).json("سافكر في اجابه المره القادمه🙄");
    } else {
      const question = await Question.findOne({
        question: matches.bestMatch.target,
      });

      res.status(200).json(question.answer);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { compare };
