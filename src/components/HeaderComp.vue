<template>
  <header>
      <div class="container">
        <!-- Logo -->
        <div class="logo">
            <img src="../assets/img/logo-dark.png" alt="Logo">
        </div>

        <!-- Navbar -->
        <nav>
            <ul>
                <li v-for="(link, index) in menuLinks" :key="index" :id="link.active? 'active' : '' ">
                    <a :href="link.url"> {{link.name}} <font-awesome-icon icon="fa-solid fa-chevron-down" v-if="link.dropdown"/> </a>
                </li>
            </ul>
        </nav>

        <!-- Other Links -->
        <div class="links">
            <!-- Search -->
            <div class="search">
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </a>
            </div>

            <!-- Icons -->
            <div class="icons">
                <a v-for="(icon,index) in iconLinks" :key="index" :href="icon.url">
                    <font-awesome-icon :icon="icon.iconName" />
                </a>
            </div>
            

        </div>

      </div>
  </header>
</template>

<script>
export default {
    name: "HeaderComp",
    data() {
        return {
            menuLinks: [
                {
                    name: "home",
                    url: "#",
                    active: false,
                    dropdown: false
                },
                {
                    name: "landing",
                    url: "#",
                    active: true,
                    dropdown: true
                },
                {
                    name: "pages",
                    url: "#",
                    active: false,
                    dropdown: true
                },
                {
                    name: "docs",
                    url: "#",
                    active: false,
                    dropdown: true
                },
            ],
            iconLinks: [
                {
                    iconName: "fa-brands fa-github",
                    url: "#"
                },
                {
                    iconName: "fa-brands fa-stack-overflow",
                    url: "#"
                },
                {
                    iconName: "fa-regular fa-user",
                    url: "#"
                },
                
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/colors.scss';
    @import '../assets/style/general.scss';

    header {
        padding: 1rem;
        background-color: $lightgray_bg;

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .logo {
                width: 150px;

                img {
                    object-fit: contain;
                    width: 100%;
                }
            }

            nav {

                ul {
                    display: flex;

                    li {
    
                        text-transform: uppercase;
                        color: $menu_txt;
                        margin: 0 1.5rem;
    
                        &#active {
                            color: $blue_txt;
                        }
                    }
                }
            }

            .links {
                display: flex;
                align-items: center;

                .search {

                    a {
                        color: $lightgray_txt;
                        margin-right: 0.75rem;
                    }
                }

                .icons {
                    display: flex;

                    a {
                        @include lightblue-tag;

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 2.25rem;
                        height: 2.25rem;
                        border-radius: 0.5rem;
                        box-shadow: 0px 2px 4px $lightblueborder_btn;

                        margin: 0 0.25rem;

                        &:hover {
                            background-color: $blue_txt;
                            color: $white_txt;
                        }
                    }
                }

            }
        }
    }


</style>
