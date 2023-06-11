<template>
    <router-view></router-view>
</template>
<script>
import { getStore } from './utils/storage'
import { mapMutations } from 'vuex'

export default {
    methods : {
        ...mapMutations([
            'RECORD_USER_LOGIN'
        ])
    },
    created() {
        const status = getStore('status'); // status is string value
        if(status == "true") {
            this.RECORD_USER_LOGIN(true);
        }
    }
}
</script>
<style>
    @import './styles/public.css';
</style>