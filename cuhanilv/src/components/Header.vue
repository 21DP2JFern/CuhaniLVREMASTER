<template>
   <div id="Header">
      <button id="menu-but" @click="openmenu()"><img src="../assets/menu.png" id="menu-img"></button>

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
 #Header{
   position: absolute;
   top:0;
   left:0;
   width: 100vw;
   height: 5vh;
   background-color: var(--color-element);
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
export default{
  name:"Header",
  methods: {
  openmenu() {
    var x = document.getElementById("sidebar");
    var computedStyle = window.getComputedStyle(x);
    if (computedStyle.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
}
};


</script>
