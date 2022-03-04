<template>
    <main>
        <div class="container">
            <KeyFeatures />
            <QuickstartComp />
            <ToolsComp />
        </div>
    </main>
</template>

<script>
import KeyFeatures from '../components/partials/KeyFeatures.vue'
import QuickstartComp from '../components/partials/QuickstartComp.vue'
import ToolsComp from '../components/partials/ToolsComp.vue'

export default {
    name: "MainComp",
    components: {
        KeyFeatures,
        QuickstartComp,
        ToolsComp
    }

}
</script>

<style lang="scss" scoped>
    @import '../assets/style/colors.scss';
    @import '../assets/style/general.scss';

</style>