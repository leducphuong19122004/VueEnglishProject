<template>
    <button-login-signup></button-login-signup>
    <sidebar-page></sidebar-page>
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