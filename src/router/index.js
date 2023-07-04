import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import VocabularyPage from '../views/VocabularyPage.vue';
import GrammarPage from '../views/GrammarPage.vue';
import ExamsPage from '../views/ExamsPage.vue';

import IntroVocabulary from '../components/VocabularyComponent/IntroVocabulary.vue'
import VocabularyList from '../components/VocabularyComponent/VocabularyList.vue'

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
        component: GrammarPage
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
