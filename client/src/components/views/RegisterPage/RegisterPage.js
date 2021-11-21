import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

import { registerUser } from '../../../_actions/user_action';

function RegisterPage(props) {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPassword = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Name, Email, Password, ConfirmPassword);

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야합니다.');
    }

    let body = {
      name: Name,
      email: Email,
      password: Password,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        props.history.push('/login');
      } else {
        alert('Failed to sign up');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        onSubmit={onSubmitHandler}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPassword}
        />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
