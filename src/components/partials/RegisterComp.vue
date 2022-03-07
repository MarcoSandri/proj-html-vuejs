<template>
    <section>
        <div class="register">

            <!-- Info -->
            <div class="info">
                <h2>Want to be among the first to find out?</h2>
                <p>Start working with <span class="highlight">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <!-- Email form -->
            <form class="input">
                <input type="email" placeholder="Email Address">
                <input type="submit" class="blue-btn round-btn" value="Get Started">
            </form>
        </div>

    </section>
</template>

<script>
export default {
    name: "RegisterComp"
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/colors.scss';
    @import '../../assets/style/general.scss';

    .register {
        width: 50%;
        text-align: center;
        margin: auto;

        .input {
            position: relative;

            input[type=email] {
                width: 100%;
                padding: 1rem 2rem;
                border-radius: 100vh;
                border: 1px solid $lightblueborder_btn;
                font-family: inherit;
                font-size: 1rem;
            }

            input[type=submit] {
                position: absolute;
                right: 7px;
                top: 50%;
                transform: translate(0, -50%);
            }
        }
    }


</style>