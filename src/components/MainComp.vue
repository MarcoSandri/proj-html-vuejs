<template>
    <main>
        <div class="container">
            <KeyFeatures />
            <QuickstartComp />
        </div>
    </main>
</template>

<script>
import KeyFeatures from '../components/partials/KeyFeatures.vue'
import QuickstartComp from '../components/partials/QuickstartComp.vue'

export default {
    name: "MainComp",
    components: {
        KeyFeatures,
        QuickstartComp
    }

}
</script>

<style lang="scss" scoped>
    @import '../assets/style/colors.scss';
    @import '../assets/style/general.scss';

</style>