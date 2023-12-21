<script>
export default {
    name: 'Goals',
}
</script>

<template>
    <section>
        <!-- left side -->
        <div class="container d-flex justify-content-around align-items-center py-4">
            <div class="text-container mt-3">
                <h3 class="text-white fw-bold">Achive Your Fitness Goals</h3>
                <p class="text-white">Flexible membership packages to suit all levels of athlete and achive your fitness
                    goals
                </p>
            </div>
            <!-- /left side -->
            <!-- right side -->
            <div class="button-container">
                <button class="btn text-uppercase rounded-0 px-4">Join Us</button>
            </div>
            <!-- /right side -->
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section {
    background-image: url(../assets/img/home-parallax.jpg);
    background-position: left top 20%;
    background-repeat: no-repeat;
    background-size: cover;

    button {
        border: 1px solid $textprimarycolor;
        color: $textprimarycolor;
    }
}
</style>