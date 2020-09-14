import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Login.css';
import auth from './firebase'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, Password] = useState('');
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth.
    signInWithEmailAndPassword(email, password);
  .then(auth => {
    history.push('/')
 })
  
   .catch(error => alert(error.meassage) )       



  const register = (e) => {
    e.preventDefault();
    auth.
      createUserWithEmailAndPassword(email, password)
      .then( (auth)=> {
        console.log(auth)
        if (auth){
          history.push('/')
        }
      })
      .catch(error => alert(error.meassage) )
  };

  return (
    <>
      <div className='login'>
        <h1>login page</h1>
        {/*  image  */}
        <Link to='/'>
          <h1 className='header__logo'>CycleZon</h1>
        </Link>
        <div className='login__container'>
          <h1>sign in</h1>
          <Form>
            <h5>E-mail</h5>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              className='loginSignInButton'
              onClick={signIn}></Button>
          </Form>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            beatae neque ratione officia corrupti in cupiditate earum alias
            facilis id qui doloremque dolores libero reprehenderit sed omnis
            praesentium, nemo animi!
          </p>
          <Button
            type='submit'
            className='registerButton'
            onClick={register}></Button>
        </div>
      </div>
    </>
  );
};

export default Login;
