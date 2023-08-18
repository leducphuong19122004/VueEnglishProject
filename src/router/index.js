import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import VocabularyPage from '../views/VocabularyPage.vue';
import GrammarPage from '../views/GrammarPage.vue';
import ExamsPage from '../views/ExamsPage.vue';

import IntroVocabulary from '../components/VocabularyComponent/IntroVocabulary.vue'
import VocabularyList from '../components/VocabularyComponent/VocabularyList.vue'

import ContentGrammarPage from '../views/ContentGrammarPage.vue'
import IntroGrammar from '../components/GrammarComponent/IntroGrammar.vue'

import LessonNumber1 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber1.vue'
import LessonNumber2 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber2.vue'
import LessonNumber3 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber3.vue'
import LessonNumber4 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber4.vue'
import LessonNumber5 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber5.vue'
import LessonNumber6 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber6.vue'
import LessonNumber7 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber7.vue'
import LessonNumber8 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber8.vue'
import LessonNumber9 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber9.vue'
import LessonNumber10 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber10.vue'
import LessonNumber11 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber11.vue'
import LessonNumber12 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber12.vue'
import LessonNumber13 from '../components/GrammarComponent/GrammarLessonComponent/LessonNumber13.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/vocabulary',
        name: 'vocabulary',
        component: VocabularyPage,
        children : [
            {path: '', component: IntroVocabulary, name: 'IntroVocabulary'},
            {path: ':id', component: VocabularyList, name: 'VocabularyList'},
        ]
    },
    {
        path: '/grammar',
        name: 'grammar',
        component: GrammarPage,
        children : [
            {path: '', component: IntroGrammar, name: 'IntroGrammar'},
            {path: 'lesson', component: ContentGrammarPage, name: 'ContentGrammarPage', children: [
                {path: '1', component: LessonNumber1, name: 'LessonNumber1'},
                {path: '2', component: LessonNumber2, name: 'LessonNumber2'},
                {path: '3', component: LessonNumber3, name: 'LessonNumber3'},
                {path: '4', component: LessonNumber4, name: 'LessonNumber4'},
                {path: '5', component: LessonNumber5, name: 'LessonNumber5'},
                {path: '6', component: LessonNumber6, name: 'LessonNumber6'},
                {path: '7', component: LessonNumber7, name: 'LessonNumber7'},
                {path: '8', component: LessonNumber8, name: 'LessonNumber8'},
                {path: '9', component: LessonNumber9, name: 'LessonNumber9'},
                {path: '10', component: LessonNumber10, name: 'LessonNumber10'},
                {path: '11', component: LessonNumber11, name: 'LessonNumber11'},
                {path: '12', component: LessonNumber12, name: 'LessonNumber12'},
                {path: '13', component: LessonNumber13, name: 'LessonNumber13'}
            ]}
        ]
    },
    {
        path: '/exams',
        name: 'exams',
        component: ExamsPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
