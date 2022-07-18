import React from "react";
import Question from "./Components/Question";
import questions from "./data";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      div: null,
      displayQuestions: true,
    };
    this.handleSubmitResult = this.handleSubmitResult.bind(this);
    this.clickSubmitBtn = this.clickSubmitBtn.bind(this);
    this.clickRetryBtn = this.clickRetryBtn.bind(this);
    this.helloDiv = this.helloDiv.bind(this);
  }

  handleSubmitResult(selectedAnswer) {
    if (selectedAnswer.isCorrect) {
      this.setState((prevState) => {
        return { score: prevState.score + 1 };
      });
      // this.setState({ score: 4 });
    }
  }

  helloDiv() {
    return (
      <div>
        <h1>{this.state.score}</h1>
      </div>
    );
  }

  clickSubmitBtn(event) {
    this.setState({
      div: this.helloDiv(),
      displayQuestions: !this.state.displayQuestions,
    });
    console.log(this.state);
  }
clickRetryBtn(){
  this.setState({
    displayQuestions: !this.state.displayQuestions,
  })
}
  render() {
    return (
      <div className="container">
        {this.state.displayQuestions ? (
          <>
            <h1 className="title">Start to Take Quiz</h1>
            <div className="questions">
              {questions.map((question) => {
                return (
                  <Question
                    key={question.id}
                    onResult={this.handleSubmitResult}
                    {...question}
                  />
                );
              })}
            </div>
            <div className="formSubmit">
              <button onClick={this.clickSubmitBtn} className="btn submit-btn">
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="result-container">
            <h1>The Result of Your Quiz</h1>
            <p> You scored {this.state.score} points out of 20 questions</p>
            <div className="formSubmit">
              <button onClick={this.clickRetryBtn} className="btn retry-btn">
                Retry Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
