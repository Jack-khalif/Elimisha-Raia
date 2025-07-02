import React, { useState } from "react";
import { CheckCircle, XCircle, Trophy, Clock, ArrowRight, ArrowLeft, BookOpen } from "lucide-react";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quiz = {
    title: "Bill of Rights - Basic Quiz",
    description: "Test your knowledge about fundamental rights in the Kenyan Constitution",
    totalQuestions: 5,
    timeLimit: 300, // 5 minutes
    questions: [
      {
        question: "What is the minimum age for voting in Kenya?",
        options: ["16 years", "18 years", "21 years", "25 years"],
        correct: 1,
        explanation:
          "According to Article 83 of the Constitution, every citizen who is 18 years or older has the right to vote.",
      },
      {
        question: "Which article in the Constitution deals with the right to education?",
        options: ["Article 43", "Article 53", "Article 27", "Article 35"],
        correct: 0,
        explanation:
          "Article 43 guarantees every person the right to education, including free and compulsory basic education.",
      },
      {
        question: "What does 'Harambee' mean in the context of Kenya's national philosophy?",
        options: ["Unity", "Pulling together", "Peace", "Justice"],
        correct: 1,
        explanation:
          "Harambee means 'pulling together' and represents the spirit of mutual assistance and community cooperation.",
      },
      {
        question: "How many counties does Kenya have?",
        options: ["45", "46", "47", "48"],
        correct: 2,
        explanation: "Kenya has 47 counties as established by the Constitution of 2010 for devolved governance.",
      },
      {
        question: "What is the official language of Kenya according to the Constitution?",
        options: ["English", "Kiswahili", "Both English and Kiswahili", "Local languages"],
        correct: 2,
        explanation: "Article 7 states that both English and Kiswahili are the official languages of Kenya.",
      },
    ],
  };

  const handleAnswerSelect = (value) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(newAnswers[currentQuestion + 1] || "");
    } else {
      setQuizCompleted(true);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (Number.parseInt(answer) === quiz.questions[index].correct) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreColor = (score) => {
    const percentage = (score / quiz.totalQuestions) * 100;
    if (percentage >= 80) return "text-feedback-success";
    if (percentage >= 60) return "text-feedback-warning";
    return "text-feedback-error";
  };

  const getScoreBadge = (score) => {
    const percentage = (score / quiz.totalQuestions) * 100;
    if (percentage >= 80) return { text: "Excellent!", color: "bg-feedback-success" };
    if (percentage >= 60) return { text: "Good Job!", color: "bg-feedback-warning" };
    return { text: "Keep Learning!", color: "bg-feedback-error" };
  };

  if (quizCompleted && showResult) {
    const score = calculateScore();
    const badge = getScoreBadge(score);

    return (
      <div className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md border-2 p-8 text-center">
            <div className="mb-6">
              <div className={`w-20 h-20 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Quiz Completed!</h1>
              <span className={`${badge.color} text-white text-lg px-4 py-2 rounded-full`}>{badge.text}</span>
            </div>

            <div className="mb-8">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(score)}`}>
                {score}/{quiz.totalQuestions}
              </div>
              <p className="text-xl text-neutral-500">
                You got {((score / quiz.totalQuestions) * 100).toFixed(0)}% correct
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-neutral-500">Correct Answers</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">+{score * 10}</div>
                <div className="text-sm text-neutral-500">Points Earned</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">5:00</div>
                <div className="text-sm text-neutral-500">Time Taken</div>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <h3 className="text-xl font-semibold text-center">Review Your Answers</h3>
              {quiz.questions.map((question, index) => {
                const userAnswer = Number.parseInt(answers[index]);
                const isCorrect = userAnswer === question.correct;

                return (
                  <div key={index} className={`border-2 rounded-lg p-4 ${isCorrect ? "border-feedback-success/20 bg-feedback-success/10" : "border-feedback-error/20 bg-feedback-error/10"}`}>
                    <div className="flex items-start space-x-3">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-feedback-success mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-feedback-error mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium mb-2">{question.question}</p>
                        <p className="text-sm text-neutral-500 mb-2">
                          <strong>Your answer:</strong> {question.options[userAnswer] || 'Not answered'}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-feedback-success mb-2">
                            <strong>Correct answer:</strong> {question.options[question.correct]}
                          </p>
                        )}
                        <p className="text-sm text-neutral-700 bg-white p-2 rounded border-l-4 border-accent-yellow">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-green hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg text-lg">
                Take Another Quiz
              </button>
              <button className="bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold py-3 px-6 rounded-lg text-lg">
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md mb-6 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary-green" />
                <span>{quiz.title}</span>
              </h2>
              <p className="text-sm text-neutral-500">{quiz.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Clock className="w-4 h-4" />
                <span>5:00</span>
              </div>
              <span className="px-3 py-1 text-sm rounded-full border border-neutral-300 bg-transparent text-neutral-500">
                {currentQuestion + 1} of {quiz.totalQuestions}
              </span>
            </div>
          </div>
          <div className="w-full bg-neutral-300 rounded-full h-2 mt-4">
            <div className="bg-primary-green h-2 rounded-full" style={{ width: `${((currentQuestion + 1) / quiz.totalQuestions) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-6 p-6">
          <h3 className="text-xl font-bold">Question {currentQuestion + 1}</h3>
          <p className="text-lg text-neutral-700 mt-2 mb-6">{quiz.questions[currentQuestion].question}</p>
          <div className="space-y-4">
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                  selectedAnswer === index.toString()
                    ? "border-primary-green bg-primary-green/10"
                    : "border-neutral-300 hover:border-primary-green/50"
                }`}
                onClick={() => handleAnswerSelect(index.toString())}
              >
                <input 
                  type="radio" 
                  name="quiz-option" 
                  value={index.toString()} 
                  checked={selectedAnswer === index.toString()} 
                  onChange={() => handleAnswerSelect(index.toString())}
                  className="h-4 w-4 text-primary-green border-neutral-300 focus:ring-primary-green cursor-pointer"
                />
                <label className="flex-1 cursor-pointer text-base">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button 
            onClick={handlePrevious} 
            disabled={currentQuestion === 0}
            className="bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-bold py-2 px-4 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: quiz.totalQuestions }, (_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index < currentQuestion ? "bg-primary-green" : index === currentQuestion ? "bg-accent-yellow" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext} 
            disabled={!selectedAnswer}
            className="text-white bg-primary-green hover:bg-opacity-80 font-bold py-2 px-4 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion === quiz.totalQuestions - 1 ? "Finish Quiz" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
