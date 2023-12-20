<script>
export default {
    name: 'Description',
}
</script>

<template>
    <section class="text-center p-5">
        <h1 class="text-uppercase text-white fw-bold">World class Fintness</h1>
        <img src="../assets/img/divider-xx-red.png" alt="divider" class="my-5">
        <p class="lh-lg">At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped <br>
            to help you reach your goals of a healthy and fit lifestyle.
        </p>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section {
    background-color: $primarybgcolor;

    p {
        color: $textsecondarycolor
    }
}
</style>