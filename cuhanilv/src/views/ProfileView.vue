<template>
<Header />
<div id="profile-box">
    <div id="profile-info-box">
        <div id="profile-pic-container">
            <img src="../assets/profile-pic.png" id="profile-pic">
        </div>
        <button id="edit-but">Edit Profile</button>
        <p id="username">USERNAME</p>
        <p id="name">NAME</p>
        
    </div>
    <Line id="Uline" />
    
</div>
</template>

<style>
#profile-box{
    background-color: var(--color-element);
    width: 45vw;
    height: 80vh;
    border-radius: 25px;
}

#profile-info-box{
    width:100%;
    height: 40%;
}

#profile-pic{
    height: 20vh;
    width: 11vw;
}
#profile-pic-container{
    position:relative;
    left: 30px;
    top: 30px;
    height: 20.5vh;
    width: 11.5vw;
    border: black 2px solid;
}

#edit-but{
  height:40px;
  width: 150px;
  border: none;
  border-radius: 25px;
  display:flex;
  position:relative;
  top: 40px;
  left: 60px;
  display: table-cell;
  vertical-align: middle;
  background-color: var(--color-red);
  color: var(--color-text);
  font: "Inter";
  font-size: 16px;
  font-weight: 550;
}

#username{
    font: "inter";
    font-size: 35px;
    position:relative;
    margin-top:-215px;
    left: 280px;
}

#name{
    font: "inter";
    font-size: 30px;
    position:relative;
    margin-top:0px;
    left: 280px;
}


#Uline{

    
        
}
</style>

<script>
import Header from '../components/Header.vue'
import Line from '../components/line.vue'

export default{
    name: "Home",
    components:{
        Header,
        Line
    }
}
</script>