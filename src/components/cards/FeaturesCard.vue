<template>
    <div class="card">
        <!-- Icon on hover -->
        <font-awesome-icon :icon="icon" class="background"/>
        <!-- Icon on top -->
        <div class="icon">
            <font-awesome-icon :icon="icon" />
        </div>
        <!-- Title -->
        <span>{{title}}</span>
        <!-- Description -->
        <p>{{description}}</p>
        <!-- Link to full page -->
        <a :href="fullDescription" class="highlight">Read More <font-awesome-icon icon="fa-solid fa-chevron-right" /></a>
    </div>
</template>

<script>
export default {
    name: "FeaturesCard",
    props: {
        title: String,
        description: String,
        fullDescription: String,
        icon: String
    }

}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/general.scss';
    @import '../../assets/style/colors.scss';

    .card {
        border: 1px solid $lightblueborder_btn;
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        width: 270px;
        position: relative;
        overflow: hidden;

        &:hover .background{
            display: block;
        }

        .background {
            display: none;
            position: absolute;
            top:50%;
            color: $lightblue_btn;
            opacity: 0.3;
            font-size: 300px;
            z-index: -1;
            transform: translate(0, -50%);

        }
        .icon {
            background-color: $lightblue_btn;
            color: $blue_txt;
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            border-radius: 6px;
            margin-bottom: 1.5rem;

        }

        span {
            color: $dark_txt;
        }

        a {
            text-decoration: none;
        }
    }
</style>