<script>
export default {
    name: 'Results',

}
</script>

<template>
    <section>
        <div class="container py-5">
            <!-- Title and divider container -->
            <div class="section-top text-center mt-5 mb-4">
                <h2 class="text-uppercase text-white fw-bold">Real World Results</h2>
                <img src="../assets/img/divider-xx-red.png" alt="divider X">
            </div>
            <!-- /Title and divider container -->
            <!-- first row -->
            <div class="row gap-4">
                <div class="col d-flex p-3">
                    <img src="../assets/img/review_1-compressor.jpg" alt="user review img">
                    <div class="review-text ms-3">
                        <p class="fst-italic">"The trainers at Avada Gym have helped me reach my fitness goals beyond
                            anything I could of hoped
                            for. I love it!"
                        </p>
                        <h6>- Tara Smith</h6>
                    </div>

                </div>
                <div class="col d-flex p-3">
                    <img src="../assets/img/review_3-compressor-2.jpg" alt="user review img">
                    <div class="review-text ms-3">
                        <p class="fst-italic">"The atmosphere at Avada Gym is amazing, the people are even better. All in
                            all, it is a great place to work out."
                        </p>
                        <h6>- Simon Chel</h6>
                    </div>
                </div>
            </div>
            <!-- /first row -->
            <!-- second row -->
            <div class="row gap-4 mt-4 mb-5">
                <div class="col d-flex p-3">
                    <img src="../assets/img/review_2-compressor.jpg" alt="user review img">
                    <div class="review-text ms-3">
                        <p class="fst-italic">"The facilities at Avada Gym stood out to me the most. They are well
                            maintained and have high quality equipment."
                        </p>
                        <h6>- Jen Wirth</h6>
                    </div>

                </div>
                <div class="col d-flex p-3">
                    <img src="../assets/img/review_4-compressor-2.jpg" alt="user review img">
                    <div class="review-text ms-3">
                        <p class="fst-italic">"No bad things to say about Avada Gym, they are top notch at every corner and
                            truly take care of their customers."
                        </p>
                        <h6>- Jeff Glum</h6>
                    </div>
                </div>
                <!-- /second row -->
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section {
    background-color: $primarybgcolor;
}

.col {
    background-color: $secondarybgcolor;

    .review-text {
        color: $textsecondarycolor;
    }
}
</style>