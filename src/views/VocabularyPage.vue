<template>
    <button-login-signup></button-login-signup>
    <sidebar-page></sidebar-page>
    <router-view></router-view>
</template>
<script>
    import SidebarPage from '../components/SidebarPage'
    import ButtonLoginSignup from '../components/ButtonLoginSignup'

    export default {
        components : {
            ButtonLoginSignup,
            SidebarPage
        }
    }
</script>

