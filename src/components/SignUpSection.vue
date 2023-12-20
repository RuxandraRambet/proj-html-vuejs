<script>
export default {
    name: 'SignUp',

}
</script>

<template>
    <section>
        <div class="container">
            <div class="row py-5">
                <div class="col-6 py-5 text-center">
                    <div class="img-container">
                        <img src="../assets/img/home_img-compressor.jpg" alt="compressor img">
                    </div>
                </div>
                <div class="col-6 py-5">
                    <h3 class="fw-bold text-white mb-5">Sign Up For A Free Training Session!</h3>
                    <div class="mb-4">
                        <label for="name" class="form-label">Name..*</label>
                        <input type="text" class="form-control rounded-0 bg-dark" id="name">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control rounded-0 bg-dark" id="email">
                    </div>
                    <button class="btn w-100 rounded-0 text-uppercase mt-4 text-white" type="button">Start Now!</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section {
    background-color: $secondarybgcolor;

    label {
        color: $textsecondarycolor ;
    }
    input {
        border-color: $textsecondarycolor;
    }
    button {
        background-color: #ee6059;
    }
}
</style>