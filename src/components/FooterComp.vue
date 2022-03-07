<template>
  <footer>   
    <div class="top">
        <div class="container">
            <div class="landrick">
                <div class="logo">
                    <img src="../assets/img/logo-light.png" alt="logo">
                </div>
                <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <div class="social">
                    <a v-for="(social,index) in socials" :key="index" :href="social.url">  
                        <font-awesome-icon :icon="social.icon" />
                    </a>
                </div>
            </div>
            <div class="lists">
                <ul v-for="(list, index) in lists" :key="index">
                    <h3>{{list.name}}</h3>
                    <li v-for="(item,index) in list.list" :key="index">
                        <a :href="item.url"> <font-awesome-icon icon="fa-solid fa-chevron-right" /> {{item.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="newsletter">
                <h3>Newsletter</h3>
                <p>Sign up and receive the latest tips via email.</p>
                <span class="tag">Write your email <span class="red">*</span> </span>
                <div class="input">
                    <font-awesome-icon icon="fa-regular fa-envelope" class="icon"/> 
                    <input type="text" placeholder="Your email: ">
                </div>
                <button class="dark-btn">Subscribe</button>
            </div>
        </div>
    </div>

    <div class="bottom">
        <div class="container">
            <div class="credits">
                <span>	&#169; 2020 Landrick. Design with <span class="red">&#9829;</span> by Shreethemes.</span>
            </div>
            <div class="cards">
                <a v-for="(card,index) in cards" :key="index" :href="card.link">
                    <img :src="require('../assets/img/' + card.url)" :alt="card.name">
                </a>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "FooterComp",
    data() {
        return {
            socials : [
                {
                    name: "Facebook",
                    url: "#",
                    icon: "fa-brands fa-facebook-f"
                },
                {
                    name: "Instagram",
                    url: "#",
                    icon: "fa-brands fa-instagram"
                },
                {
                    name: "Facebook",
                    url: "#",
                    icon: "fa-brands fa-twitter"
                },
                {
                    name: "Facebook",
                    url: "#",
                    icon: "fa-brands fa-linkedin-in"
                },
                
            ],               
            lists: [
                {
                    name: "Company",
                    list: [
                        {
                            name: "About us",
                            url: "#"
                        },
                        {
                            name: "Services",
                            url: "#"
                        },
                        {
                            name: "Team",
                            url: "#"
                        },
                        {
                            name: "Pricing",
                            url: "#"
                        },
                        {
                            name: "Project",
                            url: "#"
                        },
                        {
                            name: "Careers",
                            url: "#"
                        },
                        {
                            name: "Blog",
                            url: "#"
                        },
                        {
                            name: "Login",
                            url: "#"
                        }
                    ]
                },
                {
                    name: "Useful Links",
                    list: [
                        {
                            name: "Terms of Services",
                            url: "#"
                        },
                        {
                            name: "Privacy Policy",
                            url: "#"
                        },
                        {
                            name: "Documentation",
                            url: "#"
                        },
                        {
                            name: "Changelog",
                            url: "#"
                        },
                        {
                            name: "Components",
                            url: "#"
                        },
                    ]
                }
            ],
            cards: [
                {
                    name: 'American Express',
                    url: 'american-ex.png',
                    link: "#"
                },
                {
                    name: 'Discover',
                    url: 'discover.png',
                    link: "#"
                },
                {
                    name: 'Mastercard',
                    url: 'master-card.png',
                    link: "#"
                },
                {
                    name: 'PayPal',
                    url: 'paypal.png',
                    link: "#"
                },
                {
                    name: 'Visa',
                    url: 'visa.png',
                    link: "#"
                },
                
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    @import '../assets/style/colors.scss';
    @import '../assets/style/general.scss';

    footer {
        background-color: $blue_bg;
        color: $white_txt;

        .top {

            .container {
                padding: 2rem 0;
                display: flex;
                justify-content: space-between;
    
                h3 {
                    color: $white_txt;
                    margin-top: 0;
                }
    
                .landrick {
                    width: 30%;
    
                    .logo {
                        width: 130px;
        
                        img {
                            object-fit: contain;
                            width: 100%;
                        }
                    }
    
                    .social {
                        display: flex;
    
                        &>* {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 30px;
                            height: 30px;
                            border: 1px solid $lightgray_txt;
                            color: $lightgray_txt;
                            border-radius: 6px;
                            margin-right: 0.25rem;
                        }
                    }
                }
                
                .lists {
                    display: flex;
    
                    ul {
                        margin-right: 5rem;
    
                        li {
                            color: $lightgray_txt;
                            line-height: 1.75rem;
                        }
                    }
                }
    
                .newsletter {
                    display: flex;
                    flex-direction: column;
    
                    .tag {
                        color: $lightgray_txt;
                    }
    
                    .input {
                        position: relative;
    
                        input {
                            background-color: $darkinput_bg;
                            border: none;
                            border-radius: 10px;
                            padding: 1rem 1rem 1rem 3rem;
                            font-size: 1rem;
                            margin: 1rem 0;
                            color: $lightgray_txt;
                            width: 100%;
    
                        }
    
                        .icon {
                            position: absolute;
                            top: 50%;
                            left: 1rem;
                            transform: translate(0, -50%);
                            color: $lightgray_txt;
                        }
    
                    }
                }
            }
        }

        .bottom {
            border-top: 1px solid $blue_txt;

            .container {
                padding: 2rem 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .credits {
                    color: $lightgray_txt;
                }

                .cards {
                    display: flex;

                    a {
                        width: 30px;
                        margin-right: 5px;

                        img {
                            object-fit: contain;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

</style>