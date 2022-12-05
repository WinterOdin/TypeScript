import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event){
    event.preventDefault();

    const emailInput = emailInputRef.current.value;
    const feedbackInput = feedbackInputRef.current.value;

    const reqBody = {email: emailInput, text: feedbackInput}

    fetch('api/feedback',{
      method: "POST",
      body: JSON.stringify({reqBody}),
      headers:{
        'Content-Type': "application/json"
      }
    });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}>

          </textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
}

export default HomePage;
