<template>
<div id="line"></div>
</template>

<style>
    #line{
        height: 3px;
        background-color: black;
        border-radius: 25px;
    }
</style>

<script>
import { RouterLink } from 'vue-router';

export default{
    name: "Line",
    components: { RouterLink }
};

</script>