<template>
    <div class="menu">
        <button class="tab" @click="toggleSettings">
            <font-awesome-icon icon="fa-solid fa-gear" />
        </button>
        <h3 class="highlight">Settings</h3>
        <div class="option">
            <input type="radio" value="one" id="one" name="options"> <label for="one">Option one</label>
        </div>
        <div class="option">
            <input type="radio" value="two" id="two" name="options"> <label for="two">Option two</label>
        </div>
        <div class="option">
            <input type="radio" value="three" id="three" name="options"> <label for="three">Option three</label>
        </div>
        <div class="option">
            <input type="radio" value="four" id="four" name="options"> <label for="four">Option four</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "SettingsComp",
    data() {
        return {
            settings: false
        }
    },
    methods: {
        toggleSettings() {
            this.settings = !this.settings;
            this.$emit('settings', this.settings);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/colors.scss';
    @import '../assets/style/general.scss';

    .menu {
        width: 200px;
        height: 180px;
        border: 1px solid $lightblueborder_btn;
        border-radius: 0 0 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        padding-top: 1rem;
        padding-left: 1rem;
        background-color: $white_txt;

        .tab {
            color: $blue_txt;
            position: absolute;
            right: 0;
            top: -1px;
            transform: translate(100%, 0);
            padding: 10px;
            background-color: $white_txt;
            border-color: $lightblueborder_btn;
            border-width: 1px;
            border-style: solid solid solid none;
            border-radius: 0 50% 50% 0;
            cursor: pointer;

            &:hover {
                background-color: $blue_txt;
                color: $white_txt;
            }
        }
    }

</style>