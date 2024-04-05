import { useState } from "react";
import { arrowdown, arrowup } from "../helpers/icons";

const InterviewAccord = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question-answer-card">
      <h2 className="question">
        {question.question.toUpperCase()}
        <span onClick={handleClick}>{showAnswer ? arrowup : arrowdown}</span>
      </h2>
      <div className="answer">
        {showAnswer && (
          <div>
            {question.img && <img src={question.img} alt="Question Image" />}
            <p>{question.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewAccord;



// import { useState } from "react";
// import { arrowdown, arrowup } from "../helpers/icons";

// const InterviewAccord = ({ question }) => {
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleClick = () => {
//     setShowAnswer(!showAnswer);
//   };

//   return (
//     <div className="question-answer-card">
//       <h2 className="question">
//         {question.question.toUpperCase()}
//         <span onClick={handleClick}>{showAnswer ? arrowup : arrowdown}</span>
//       </h2>
//       <div className="answer">
//         {showAnswer && question.img ? (
//           <img src={question.img} alt={question.question} />
//         ) : showAnswer ? (
//           <p>{question.answer}</p>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default InterviewAccord;



// import { useState } from "react";
// import { arrowdown, arrowup } from "../helpers/icons";

// const InterviewAccord = ({ question }) => {
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleClick = () => {
//     setShowAnswer(!showAnswer);
//   };

//   return (
//     <div className="question-answer-card">
//       <h2 className="question">
//         {question.question.toUpperCase()}
//         <span onClick={handleClick}>{showAnswer ? arrowup : arrowdown}</span>
//       </h2>
//       <div className="answer">
//       {showAnswer && <p>{question.answer}</p>}
//       </div>
//     </div>
//   );
// };

// export default InterviewAccord;
