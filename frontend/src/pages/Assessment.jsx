import React, { useState } from "react";

const questions = [
  {
    q: "What is machine learning?",
    options: ["Cooking method", "AI technique", "UI style", "Database query"],
    correct: 1,
  },
  {
    q: "Which is a programming language used in AI?",
    options: ["Python", "HTML", "Excel", "CSS"],
    correct: 0,
  },
];

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (i) => {
    if (i === questions[step].correct) setScore(score + 1);
    setStep(step + 1);
  };

  if (step >= questions.length) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Your Score: {score}/{questions.length}</h1>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">{questions[step].q}</h2>
      {questions[step].options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(i)} className="block w-full bg-gray-200 hover:bg-gray-300 p-2 my-1 rounded">
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Assessment;
