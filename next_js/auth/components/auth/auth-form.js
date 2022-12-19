import { useRef, useState } from 'react';
import classes from './auth-form.module.css';
import { signIn } from "next-auth/react"


async function createUser(email, password){
  const response = await fetch('api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.message || "Something went wrong");
  }

  return data
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  const enteredEmailRef = useRef();
  const enteredPwdRef = useRef();

  async function submitHandler(event){
    event.preventDefault();

    const enteredEmail = enteredEmailRef.current.value;
    const enteredPwd = enteredPwdRef.current.value;

    if(isLogin){
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPwd
      })
      
      console.log(result)
    }else{
      try{
        const result = await createUser(enteredEmail, enteredPwd); 
        console.log(result)
      }catch(error){
        console.log(error)
      }
      
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={enteredEmailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required  ref={enteredPwdRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
