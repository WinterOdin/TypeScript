import classes from './profile-form.module.css';
import { useRef, useState } from 'react';


function ProfileForm(props) {
  
  const [isInvalid, setIsInvalid] = useState(false);

  const newPwdRef = useRef();
  const oldPwdRef = useRef();

  function submitHandler(event){
    event.preventDefault();

    const newPwd = newPwdRef.current.value;
    const oldPwd = oldPwdRef.current.value;

    props.onChangePassword({
      newPassword: newPwd,
      oldPassword: oldPwd
    });

    if (
      newPwd === oldPwd ||
      newPwd.length > 7 ||
      newPwd || oldPwd ||
      !newPwd.trim() === '' ||
      !oldPwd.trim() === ''
     ){
      setIsInvalid(true);
      return;
    }
    


  };



  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPwdRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPwdRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
