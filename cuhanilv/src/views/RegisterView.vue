import { RouterLink } from 'vue-router';
<template>
  <div class="RegWindow">
   <h1 id="header">ČUHANI</h1>  
   <form>
    <div id="input-container">
        <input type="text" placeholder="Username" id="user">
        <input type="text" placeholder="First name" id="Fname">
        <input type="text" placeholder="Last name" id="Lname">
        <input type="text" placeholder="E-mail" id="email">
        <input type="password" placeholder="Password" id="password">
        <input type="password" placeholder="Confirm password" id="con-password">

    </div>
    <RouterLink to="/" id="login">
      <button id="reg-but">REGISTER</button>
    </RouterLink>
   </form> 
  </div>
</template>

<style scoped>
.RegWindow{
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
  height: 370px;
  display: block;
  position: relative;
  top: 40px;
  left: 77px;
  
}

input{
  border-radius: 25px;
  border:0;
  font-size: 20px;
  text-indent: 20px;
  font:"Inter";
  color: var(--color-text);
  background-color: var(--color-light-dark-red);
  width:300px;
  margin-top: 5px;
  height: 60px;
}

input::placeholder{
  color: var(--color-text);
  font-size: 17px;
}

#Fname{
  margin-top: 5px;
  height: 60px;
  width:145px;
}

#Lname{
  margin-top: 5px;
  margin-left: 10px;
  height: 60px;
  width:145px;
}

#reg-but{
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

#login{
  text-decoration: none;
}

</style>