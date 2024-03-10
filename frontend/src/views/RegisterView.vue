import { RouterLink } from 'vue-router';
<template>
  <div class="RegWindow">
   <h1 id="header">ČUHANI</h1>  
   <form @submit.prevent="register">
    <div id="input-container">
        <input type="email" placeholder="E-mail" id="email" v-model="email" required>
        <input type="text" placeholder="name" id="name" v-model="name" required>
        <input type="password" placeholder="Password" id="password" v-model="password" required>
        <input type="password" placeholder="Confirm password" id="con-password" v-model="password_confirmation" required>

    </div>
    
   </form> 
   <RouterLink to="/" id="login">
      <button id="reg-but">REGISTER</button>
    </RouterLink>
  </div>
</template>

<script>
    import axios from 'axios';

    export default{
      data(){
        return{
          email: "",
          name: "",
          password: "",
          password_confirmation: ""
        };
      },

      methods:{
        async register(){
          try{
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
              email: this.email, 
              name: this.name,
              password: this.password,
              password_confirmation: this.password_confirmation
            });

            console.log(response.data);
            console.log("sagaja");
            this.$router.push("/login");
          }catch(error){
            console.error("error during registration!", error);
            alert("AAAAAAAAAA nesanaca!");
          }
        },
      },
    };
</script>

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