<script>
import JumboSection from './JumboSection.vue';
export default {
    name: 'AppHeader',
    components: {
        JumboSection,
    },
    data() {
        return {
            menu: [
                {
                    name: 'Home',
                    link: '#'
                },
                {
                    name: 'About Us',
                    link: '#'
                },
                {
                    name: 'Facilities',
                    link: '#'
                },
                {
                    name: 'Membership',
                    link: '#'
                },
                {
                    name: 'Testimonials',
                    link: '#'
                },
                {
                    name: 'Blog',
                    link: '#'
                },
            ]

        }
    }
}
</script>

<template>
    <header class="position-relative">
        <div class="container-fluid">
            <!-- NavBar -->
            <nav class="d-flex justify-content-between align-items-center p-4">
                <!-- Logo -->
                <div class="logo-container">
                    <img src="../assets/img/gym_logo_1x.png" alt="Avada Gym Logo">
                </div>
                <!-- /Logo -->
                <!-- Menu list -->
                <ul class="nav-menu d-flex gap-3">
                    <li v-for="item in menu" class="text-uppercase">
                        <a :href="item.link">{{ item.name }}</a>
                    </li>
                </ul>
                <!-- /Menu list -->
            </nav>
            <!-- /NavBar -->
            <!-- Jumbo -->
            <JumboSection />
            <!-- /Jumbo -->

        </div>

    
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    width: 100%;
    height: 700px;
    background-image: url(../assets/img/home-banner.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .logo-container {
        width: 150px;

        img {
            width: 100%;
            display: block;
        }
    }

    a {
        text-decoration: none;
        color: $textprimarycolor;

        &:hover {
            color: #d5625f;
        }
    }
}
</style>