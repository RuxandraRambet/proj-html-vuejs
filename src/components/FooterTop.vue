<script>
export default {
    name: 'FooterTop',
    data() {
        return {
            info: [
                '12345 North Main Street',
                'New York, NY 555555',
                'Phone: 1-800.55.6789',
                'Email: info@your-domain.com'
            ],
            questions: [
                'Train with free weights or your body weight?',
                'Nutritional advice that will keep you training',
            ],
            schedule: [
                'Weekdays Monday - Friday',
                '09:00 - 19:00',
                'Weekends Saturday - Sunday',
                '09:00 - 21:00'
            ]

        }
    }

}
</script>

<template>
    <!-- footer top -->
    <div class="top-section">
        <div class="container">
            <div class="columns d-flex p-5">
                <!-- col 1 -->
                <div class="col lh-lg">
                    <ul>
                        <h6 class="text-uppercase mb-4">come find us</h6>
                        <li v-for="item in info">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <!-- col 2 -->
                <div class="col lh-lg">
                    <ul>
                        <h6 class="text-uppercase mb-4">recent posts</h6>
                        <li class="d-flex border-bottom  border-secondary py-2" v-for="item in questions">
                            <span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span> {{ item }}
                        </li>
                    </ul>
                </div>
                <!-- col 3 -->
                <div class="col lh-lg">
                    <ul>
                        <h6 class="text-uppercase mb-4">Opening times</h6>
                        <li v-for="item in schedule">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <div class="col mt-3">
                    <img src="../assets/img/gym_ad-compressor-200x133.jpg" alt="Ad">
                </div>
            </div>
        </div>
    </div>
    <!-- /footer top -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.top-section {
    background-color: $primarybgcolor;

    h6 {
        color: rgb(83, 81, 81);
    }

    li {
        color: $textsecondarycolor;
    }

    .fa-chevron-right {
        font-size: 12px;
        margin-right: 5px;
    }
}
</style>