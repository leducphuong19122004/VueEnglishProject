<template>
    <div class="page-404">
        <div class="title-alert">
            <h1>404</h1>
        </div>
        <div class="image">
            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="">
        </div>
        <div class="sub-title">
            <p>The page you are looking for is not available !</p>
            <button>Go to Home</button>
        </div>
    </div>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Geologica&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.page-404{ 
    width: 100vw;
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
}
.title-alert h1 {
    text-align: center;
    font-size: 120px;
    font-family: 'Press Start 2P', cursive;
    margin-top: 50px;
    margin-bottom: -60px;
}
.image {
    text-align: center;
    position: relative;
    z-index: -1;
}
.sub-title {
    text-align: center;
    margin-top: -130px;
}
.sub-title p {
    font-family: din-round,sans-serif;
    font-size: 20px;
}
.sub-title button {
    text-decoration: none;
    padding: 15px;
    border-radius: 15px;
    background-color: #4ee70c;
    box-shadow: 0 4px #0a9d25;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    text-transform: uppercase;
    color: white ;
    border: none;
    font-family: 'Geologica', sans-serif;
}
.sub-title button:hover {
    opacity: 0.8;
}

</style>