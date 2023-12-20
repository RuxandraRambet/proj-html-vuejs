<script>
export default {
    name: 'IconsSection',
}
</script>

<template>
    <div class="icon-section">
        <div class=" container">
        <div class="row p-5">
            <div class="col text-center">
                <font-awesome-icon icon="fa-solid fa-link-slash" />
                <h5 class="text-white fw-bold fs-6">Strength & Conditioning</h5>
                <img src="../assets/img/divider-x-red.png" alt="devider X">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem culpa, laborum aliquam quam sit
                    mollitia.
                </p>
            </div>
            <div class="col text-center">
                <font-awesome-icon icon="fa-solid fa-bicycle" />
                <h5 class="text-white fw-bold fs-6">Fitness & Cardio</h5>
                <img src="../assets/img/divider-x-red.png" alt="devider X">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem culpa, laborum aliquam quam sit
                    mollitia.
                </p>
            </div>
            <div class="col text-center">
                <font-awesome-icon icon="fa-solid fa-cloud" />
                <h5 class="text-white fw-bold fs-6">Flexibility & Rest</h5>
                <img src="../assets/img/divider-x-red.png" alt="devider X">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem culpa, laborum aliquam quam sit
                    mollitia.
                </p>
            </div>
            <div class="col text-center">
                <font-awesome-icon icon="fa-solid fa-heart-pulse" />
                <h5 class="text-white fw-bold fs-6">Health & Diet</h5>
                <img src="../assets/img/divider-x-red.png" alt="devider X">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem culpa, laborum aliquam quam sit
                    mollitia.
                </p>
            </div>
        </div>
    </div>
    </div>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.icon-section {
    background-image: url(../assets/img/gym_bkgd_bw-compressor.jpg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
}
.fa-link-slash,
.fa-bicycle,
.fa-cloud,
.fa-heart-pulse {
    color: #d5625f;
    border-radius: 50%;
    border: 1px solid #d5625f;
    padding: 10px;
}
p {
    color: $textsecondarycolor ;
}
</style>
