<template>
   <div id="Header">
        <button id="menu-but" @click="openmenu()"><img src="../assets/menu.png" id="menu-img"></button>
        <RouterLink to="/home">
            <h1 id="cuhani-text">ČUHANI</h1>
        </RouterLink>
        <RouterLink to="/profile">
            <button id="profile-but"><img src="../assets/profile-pic.png" id="profile-img"></button>
        </RouterLink>
   </div>
   <div id="sidebar">
        <div class="home">
            <RouterLink to="/home">
                <button class="button">Home</button>
            </RouterLink>
        </div>
        <div class="social">
            <RouterLink to="/friends">
                <button class="button">Social</button>
            </RouterLink>
        </div>
        <div class="games">
            <RouterLink to="/games">
                <button class="button">Games</button>
            </RouterLink>
        </div>
        <div class="wallet">
            <RouterLink to="/wallet">
                <button class="button">Wallet</button>
            </RouterLink>
        </div>
        <div class="log-out">
            <RouterLink to="/">
                <button class="button">Log Out</button>
            </RouterLink>
        </div>
    </div>
</template>

<style>
#Header {
    position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 5vh;
   background-color: var(--color-element);
   box-shadow: 0px 0px 250px 50px var(--color-element);
   text-align: center;
 }

 #cuhani-text {
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 150px;
    font: "Inter";
    color: var(--color-text);
    font-weight: 600;
    font-size: 3.5vh;
    font-size: 3.5vh;
 }

 #menu-but{
   height: 5vh;
   width:50px;
   padding:0;
   background: transparent;
   border:0;
 }

 
 #menu-img{
   height: 5vh;
   width:50px;
   top:0;
   left:0;
   display:flex;
   position: absolute;
 }

 #profile-but{
    position: absolute;
    right: 0;
    top:0;
    height: 5vh;
    width: 50px;
    background: transparent;
    border: none;
 }

 #profile-img{
    height: 4.6vh;
    width:50px;
    top:0;
    left:0;
    display:flex;
    position: absolute;
 }

 #sidebar{
  height: 520px; 
  width: 300px;
  background-color: var(--color-element);
   z-index: 2;
   top: 5vh;
   left: 0;
   border-bottom-right-radius: 25px;
   position: absolute;
   display: none;
}

.button{
    height: 100px;
    width: 100%;
    position: relative;
    color: white;
    background-color: var(--color-element);
    padding: 10px;
    text-align: left;
    border: none;
    font: 'Inter';
    font-size: 18px;
    text-align: center;
    }
</style>

<script>
import { RouterLink } from 'vue-router';

export default{
    name: "Header",
    methods: {
        openmenu() {
            var x = document.getElementById("sidebar");
            var computedStyle = window.getComputedStyle(x);
            if (computedStyle.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
    },
    components: { RouterLink }
};


</script>
