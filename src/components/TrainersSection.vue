<script>
export default {
    name: 'Trainers',
}
</script>

<template>
    <section>
        <div class="container py-5">
            <!-- Title and divider container -->
            <div class="section-top pt-5 text-center">
                <h2 class="text-uppercase text-white fw-bold">Meet Our Trainers</h2>
                <img src="../assets/img/divider-xx-red.png" alt="divider X" class="pt-3 pb-4">
            </div>
            <!-- /Title and divider container -->

            <!-- Columns -->
            <div class="row gap-4 py-5">
                <div class="col">
                    <div class="col-top">
                        <img src="../assets/img/trainer1.jpg" alt="Trainer 1" class="w-100">
                    </div>
                    <div class="col-bottom p-5">
                        <h6 class="text-white fw-bold">Ann Baker</h6>
                        <p class="text-white fw-bold">Personal Trainer</p>
                        <p class="description lh-lg my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                            voluptatibus, voluptates nam,
                            asperiores.
                        </p>
                        <div class="social">
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                            <a href="#"> <font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="col-top">
                        <img src="../assets/img/trainer3.jpg" alt="Trainer 2" class="w-100">
                    </div>
                    <div class="col-bottom p-5">
                        <h6 class="text-white fw-bold">Anne Warren</h6>
                        <p class="text-white fw-bold">Personal Trainer</p>
                        <p class="description lh-lg my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                            voluptatibus, voluptates nam,
                            asperiores.
                        </p>
                        <div class="social">
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                            <a href="#"> <font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="col-top">
                        <img src="../assets/img/trainer4.jpg" alt="Trainer 3" class="w-100">
                    </div>
                    <div class="col-bottom p-5">
                        <h6 class="text-white fw-bold">Peter Rice</h6>
                        <p class="text-white fw-bold">Personal Trainer</p>
                        <p class="description lh-lg my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                            voluptatibus, voluptates nam,
                            asperiores.
                        </p>
                        <div class="social">
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                            <a href="#"> <font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Columns -->

            <!-- Button -->
            <div class="btn-container text-center mt-4 mb-5">
                <button class="btn rounded-0 text-uppercase py-4 px-5">View all trainers</button>
            </div>
            <!-- /Button -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section {
    background-color: $secondarybgcolor;

    .col {
        background-color: $primarybgcolor;
        padding-left: 0;
        padding-right: 0;
    }

    .description {
        color: $textsecondarycolor;
    }

    .social a {
        border: 1px solid transparent;
        border-radius: 5px;
        padding: 10px 15px;
        background-color: $secondarybgcolor;
        color: white;
        display: inline-block;
        margin-right: 10px;
        font-size: 20px;
    }
    
    button {
        border: 1px solid $textsecondarycolor;
        color: $textsecondarycolor;
    }
}</style>