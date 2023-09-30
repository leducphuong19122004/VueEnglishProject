<template>
    <div class="not-login" v-if="!this.login">
        <div class="login-btn">
            <a href="/login"><span>Login</span></a>
        </div>
        <div class="signup-btn">
            <a href="/sign-up"><span>Sign up</span></a>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState([
                'login'
            ])
        },
    }
</script>
<style scoped>
a{
    text-decoration: none;
}

.not-login {
    display: flex;
    position: fixed;
    right: 0;
    top : 0;
    width: 224px;
    height: 64px;
    margin: 10px 20px 0px 0px;
    justify-content: space-around;
    z-index: 1;

}

.not-login div {
    display: flex;
    align-items: center;
}

.not-login div a {
    font-family: 'Geologica', sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    text-transform: uppercase;
    color: white ;
    width: 100px;
    height: 40px;
    border-radius: 15px;
    background-color: #4ee70c;
    box-shadow: 0 4px #0a9d25;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
}
.not-login div a:hover {
    opacity: 0.9;
}
</style>