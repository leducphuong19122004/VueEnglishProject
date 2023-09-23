<template>
    <component :is="view" />
</template>
<script>
import ExamQuestion from '../components/TestComponent/ExamQuestion'
import ResultTest from '../components/TestComponent/ResultTest'

export default {
    components: {
        ExamQuestion,
        ResultTest
    },
    data() {
        return {
            view: null
        }
    },
    watch: {
        $route (to, from) {
            console.log(to);
            console.log(from);
            if(to.query.page) {
                this.view = 'ResultTest';
            }
        }
    },
    mounted() {
        const year = this.$route.query.year;
        const code = this.$route.query.code;
        if(year <= 2023 && year >= 2018 && code >= 401 && code <= 404 ){
            this.view = 'ExamQuestion';
        }
    }
}
</script>