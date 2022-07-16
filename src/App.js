import React from "react";
import Question from "./Components/Question";
import questions from "./data";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      div:null
    };
    this.handleFormSubmit = this.handleSubmitResult.bind(this);
    this.clickSubmitBtn = this.clickSubmitBtn.bind(this);
  }

  handleSubmitResult(selectedAnswer) {
    if (selectedAnswer.isCorrect) {
      console.log(selectedAnswer.isCorrect)
      this.setState((prevScore) => {
        return {
          newScore: prevScore+1,
        };
      });
    }
  }
  
  clickSubmitBtn(event){
    this.setState({
      div: "hello"
    });
    }
  
  render() {
    
    return (
      <div className="container">
        <h1 className="title">Quiz</h1>
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
          <button onClick = {this.clickSubmitBtn} className="submit-btn">Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
