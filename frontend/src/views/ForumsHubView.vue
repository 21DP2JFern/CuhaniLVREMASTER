<template>
    <Header />

    <div id="forum-container">
        <h1 id="forums-header">Forums</h1>
        <Line id="line" />
        <button class="forums" id="cs">
            <p class="Game">Counter-Strike</p>
        </button>
        <button class="forums" id="mc">
            <p class="Game">Minecraft</p>
        </button>
        <button class="forums" id="val">
            <p class="Game">Valorant</p>
        </button>
        <button class="forums" id="fort">
            <p class="Game">Fortnite</p>
        </button>
        <button class="forums" id="lethal">
            <p class="Game">Lethal company</p>
        </button>
        <button class="forums" id="beam">
            <p class="Game">BeamNG.drive</p>
        </button>
        <button class="forums" id="forza">
            <p class="Game">Forza</p>
        </button>
        <button class="forums" id="wrc">
            <p class="Game">EA WRC</p>
        </button>
        <button class="forums" id="assetto">
            <p class="Game">Assetto Corsa</p>
        </button>
        <button class="forums" id="pubg">
            <p class="Game">PUBG</p>
        </button>
        <button class="forums">
            <p class="Game"></p>
        </button>
        <button class="forums">
            <p class="Game"></p>
        </button>
        <button class="forums">
            <p class="Game"></p>
        </button>
        <button class="forums">
            <p class="Game"></p>
        </button>
        <button class="forums">
            <p class="Game"></p>
        </button>
    </div>

</template>
<style>
#forum-container{
    width: 60vw;
    height: 78vh;
    background-color: var(--color-dark-red);
    border-radius: 25px;
}

#forums-header{
    font: "Inter";
    color: white;
    font-size: 45px;
    font-weight: 500;
    text-align: center;
}

#line{
    margin-top: 5px;
    width: 56.3vw;
}

.forums{
    height: 200px;
    width: 200px;
    background-color: var(--color-black);
    display:inline-table;
    margin-left: 25px;
    margin-top: 20px;
    border-radius: 15px;
    border: none;
}

.Game{
    font: "Inter";
    color: white;
    font-size: 20px;
    
}

#cs{
    background-image: url('..assets/cs.jpg');
}


</style>

<script>
import Header from '../components/Header.vue'
import Line from '../components/line.vue'

export default{
    name: "Forums_hub",
    components:{
        Header,
        Line
    }
}
</script>