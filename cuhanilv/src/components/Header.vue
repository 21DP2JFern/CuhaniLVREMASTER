<template>
    <div id="Header">
        <button id="menu-but"><img src="../assets/menu.png" id="menu-img"></button>
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
    width: 3vw;
    border: none;
    padding:0;
    background: transparent;
 }

 #menu-img{
    height:5vh;
    width:3vw;
 }

</style>

<script>
export default{
    name:"Header"
}
</script>
