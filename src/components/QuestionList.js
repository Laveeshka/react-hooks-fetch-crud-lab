import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {


  const questionsLi =questions.map(question => <QuestionItem key={question.id} question={question}></QuestionItem>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsLi}</ul>
    </section>
  );
}

export default QuestionList;
