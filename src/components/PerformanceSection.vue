<script>
export default {
    name: 'Performances',
}
</script>

<template>
    <section>
        <div class="container pt-5">
            <!-- Title and divider container -->
            <div class="section-top pt-5 text-center">
                <h2 class="text-uppercase text-white fw-bold">High Performance Facilities</h2>
                <img src="../assets/img/divider-xx-red.png" alt="divider X" class="pt-3 pb-4">
            </div>
            <!-- /Title and divider container -->
            <!-- Images container -->
            <div class="d-flex flex-wrap img-container">
                <img src="../assets/img/home-image1.jpg" alt="Facility Img">
                <img src="../assets/img/home-image2.jpg" alt="Facility Img">
                <img src="../assets/img/home-image3.jpg" alt="Facility Img">
                <img src="../assets/img/home-image4.jpg" alt="Facility Img">
                <img src="../assets/img/home-image54.jpg" alt="Facility Img">
                <img src="../assets/img/home-image6.jpg" alt="Facility Img">
            </div>
            <!-- /Images container -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section {
    background-color: $primarybgcolor;

    .img-container img {
        margin: 20px;
        width: calc((100% / 3) - 40px);
    }
}
</style>