<script setup>
import { ref } from 'vue';
import SmallCard from '../components/ProjectSmallCard.vue';

const projects = ref([
    {
        id: 1,
        image: new URL('../assets/images/epita.png', import.meta.url).href,
        title: 'EPITA',
        description: 'Actuellement étudiant en informatique à EPITA, je me spécialise en Intelligence Artificielle et Machine Learning.',
        link: 'https://www.epita.fr',
        linkText: 'EPITA',
    },
    {
        id: 2,
        image: new URL('../assets/images/ai.png', import.meta.url).href,
        title: 'Intelligence Artificielle',
        description: 'Passionné par l\'informatique et les nouvelles technologies, je suis également un grand amateur de cuisine.',
        link: 'https://www.epita.fr',
        linkText: 'AI',
    },
]);
</script>

<template>
    <div class="work">
        <h2 class="work-title">Mes travaux</h2>
        <div class="work-cards">
            <SmallCard
                v-for="project in projects"
                :key="project.id"
                :image="project.image"
                :title="project.title"
                :description="project.description"
                :link="project.link"
                :linkText="project.linkText"
            />
        </div>
    </div>
</template>
