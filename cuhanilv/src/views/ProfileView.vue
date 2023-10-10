<template>
<Header />
<div id="profile-box">

</div>
</template>

<style>
#profile-box{
    background-color: var(--color-element);
    width: 45vw;
    height: 80vh;
    border-radius: 25px;
}
</style>

<script>
import Header from '../components/Header.vue'

export default{
    name: "Home",
    components:{
        Header
    }
}
</script>