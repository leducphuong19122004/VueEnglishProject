<template>
    <component :is="view" @passAnswer="passAnswer($event)" :result="this.result"/>
</template>
<script>
import ExamQuestion from '../components/TestComponent/ExamQuestion'
import ResultTest from '../components/TestComponent/ResultTest'
import {checkAnswer} from '../utils/checkAnswer'

export default {
    components: {
        ExamQuestion,
        ResultTest
    },
    data() {
        return {
            view: null,
            result: {}
        }
    },
    watch: {
        $route (to) {
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
    },
    methods: {
        passAnswer(answers) {
           const result = checkAnswer(answers);
           this.result = result;
        }
    }
}
</script>