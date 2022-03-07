<template>
    <section>
        <!-- Info -->
        <div class="info">
            <h2>Key Features</h2>
            <p>Start working with <span class="highlight">Landrick</span> that can provide everything you neeed to generate awareness, drive traffic, connect.</p>
        </div>
        <!-- Feature Cards -->
        <div class="features">
            <FeaturesCard v-for="(feature, index) in features" :key="index" :icon="feature.icon" :title="feature.name" :description="feature.description" :fullDescription="feature.fullDescription"/>
        </div>
    </section>
</template>

<script>
import FeaturesCard from '../cards/FeaturesCard.vue'

export default {
    name: "KeyFeatures",
    components: {
        FeaturesCard
    },
    data() {
        return {
            features : [
                {
                    icon: "fa-solid fa-layer-group",
                    name: "Modular",
                    description: "Composed in a pseudo-Latin language which more or less corresponds.",
                    fullDescription: "#"
                },
                {
                    icon: "fa-brands fa-chromecast",
                    name: "Responsive",
                    description: "Composed in a pseudo-Latin language which more or less corresponds.",
                    fullDescription: "#"
                },
                {
                    icon: "fa-regular fa-square-plus",
                    name: "Customizable",
                    description: "Composed in a pseudo-Latin language which more or less corresponds.",
                    fullDescription: "#"
                },
                {
                    icon: "fa-solid fa-maximize",
                    name: "Scalable",
                    description: "Composed in a pseudo-Latin language which more or less corresponds.",
                    fullDescription: "#"
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/colors.scss';
    @import '../../assets/style/general.scss';

    .info {
        width: 50%;
    }

    .features {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>