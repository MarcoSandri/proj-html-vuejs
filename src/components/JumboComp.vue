<template>
    <div class="jumbotron">

        <!-- Top -->
        <div class="info">
            <div class="container">
                <div class="description">
                    <span class="label">Development</span>
                    <h1>A Complete Developer Toolset</h1>
                    <p>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                    <button class="blue-btn">Get Started</button>
                    <button class="transparent-btn">Documentation</button>
                    <p>Current Version: v2.6.0</p>
                </div>
                <div class="image">
                    <img src="../assets/img/about.png" alt="about">
                </div>
            </div>
        </div>
        <!-- Bottom -->
        <div class="companies">
            <div class="container">
                <div class="company" v-for="(company,index) in companies" :key="index">
                    <img :src="require('../assets/img/companies/' + company.url)" :alt="company.name">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JumboComp',
    data() {
        return {
            companies: [
                {
                    name: 'Amazon',
                    url: "amazon.svg"
                },
                {
                    name: 'Google',
                    url: "google.svg"
                },
                {
                    name: 'Lenovo',
                    url: "lenovo.svg"
                },
                {
                    name: 'Paypal',
                    url: "paypal.svg"
                },
                {
                    name: 'Shopify',
                    url: "shopify.svg"
                },
                {
                    name: 'Spotify',
                    url: "spotify.svg"
                },
                
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/colors.scss';
    @import '../assets/style/general.scss';

    .jumbotron {

        .info {
            background-color: $lightgray_bg;
            padding: 6rem 0;
            border-bottom: 1px solid $lightblue_btn;

            .container {
                display: flex;
                align-items: center;
            
                .description {
                    width: 50%;
                    padding-right: 5rem;
    
                    .label {
                        @include lightblue-tag;
                        border-radius: 100vh;
                        padding: 0.1rem 0.5rem;
                        font-size: 0.75rem
                    }

                    button {
                        margin-right: 1rem;
                        margin-bottom: 1rem;
                    }
                }
    
                .image {
                    width: 50%;
                }
            }
        }

        .companies {
            background-color: $lightgray_bg;
            padding: 3rem 0;
            position: relative;
            border-radius: 0 0 50% 50%;

            .container {
                display: flex;
                justify-content: space-between;
    
                .company {
                    width: 100px;
    
                    img {
                        object-fit: contain;
                        width: 100%;
                    }
                }
            }
        }
    }

</style>