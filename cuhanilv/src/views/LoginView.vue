
import { RouterLink } from 'vue-router';
<template>
  <div class="LoginWindow">
   <h1 id="header">ČUHANI</h1>  
   <form>
    <div id="input-container">
        <input type="text" placeholder="E-MAIL" id="email">
        <input type="password" placeholder="PASSWORD" id="password">
        <RouterLink to="/Forgot" id="ForgotPass">Forgot password</RouterLink>
        
    </div>
    <RouterLink to="/home" id="home">
      <button id="login-but">LOGIN</button>
    </RouterLink>
    <p>Dont have an account?</p>

    <RouterLink to="/register" id="register">Register</RouterLink>
   </form> 
  </div>
</template>

<style scoped>
@media (min-width: 480px){
body{
  place-items: center;
}
.LoginWindow{
  width: 450px;
  height: 600px;
  background-color: var(--color-element);
  border-radius: 25px;
  box-shadow: 0px 0px 300px 50px var(--color-element);
  display:block;
}

#header{
  font:"Inter";
  font-size: 80px;
  font-weight: bold;
  display:flex;
  position:relative;
  left: 69px;
  top: 40px;
  width:300px;
  margin:0;
  padding:0;
}

#input-container{
  width:300px;
  height: 240px;
  display: block;
  position: relative;
  top: 45px;
  left: 77px;
  
}

input{
  height: 70px;
  width:300px;
  border-radius: 25px;
  border:0;
  font-size: 20px;
  text-indent: 20px;
  font:"Inter";
  color: var(--color-text);
  background-color: var(--color-light-dark-red);
}

input::placeholder{
  color: var(--color-text);
  font-size: 17px;
}

#email{
  margin-top: 0;
  
}

#password{
  margin-top: 20px;
  
}

#ForgotPass{
  margin-left: 10px;
  font: "Inter";
  font-size: 13px;
  color: var(--color-underline-gray);
}

#login-but{
  height:45px;
  width: 150px;
  border: none;
  border-radius: 25px;
  display:flex;
  position:relative;
  left: 150px;
  display: table-cell;
  vertical-align: middle;
  background-color: var(--color-red);
  color: var(--color-text);
  font: "Inter";
  font-size: 18px;
}

#login-but:hover{
  transform: scale(1.10);
  border: 1px white solid;
}

#home{
  text-decoration: none;
}

p{
  top: 23px;
  left: 145px;
  font-size: 16px;
  display:flex;
  position:relative;
}

#register{
  left: 195px;
  top: 25px;
  font-size: 18px;
  display:flex;
  position:relative;
  color: var(--color-text);
}

}

</style>
