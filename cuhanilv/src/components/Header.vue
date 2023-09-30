<template>
    <div id="Header">
        <h1 id="cuhani-text">ČUHANI</h1>

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

 #cuhani-text{
    font-size: 35px;
    font-weight: bold;
    display:flex;
    position:relative;
    left: 46.5vw;
 }
</style>

<script>
export default{
    name:"Header"
}
</script>
