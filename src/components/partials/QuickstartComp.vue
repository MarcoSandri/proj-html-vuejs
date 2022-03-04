<template>
    <section>
        <div class="info">
            <span class="highlight">Quickstart</span>
            <h2>Awesome isn't it? Let's dive in!</h2>
            <p>Start working with <span class="highlight">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>
        <CodeCard />
        <ul>
            <li><font-awesome-icon icon="fa-regular fa-circle-check" class="green"/> Organize your data</li>
            <li><font-awesome-icon icon="fa-regular fa-circle-check" class="green"/> Work with any team</li>
        </ul>
    </section>
</template>

<script>
import CodeCard from '../cards/CodeCard.vue'

export default {
    name: "QuickstartComp",
    components: {
        CodeCard
    }
}

</script>

<style lang="scss" scoped>
    @import '../../assets/style/colors.scss';
    @import '../../assets/style/general.scss';

    section {
        margin: auto;
        max-width: 60%;

        .info {
            text-align: center;
        }

        ul {

            li {
                display: inline;
                margin-right: 2rem;
                color: $lightgray_txt;
            }
        }


    }

</style>