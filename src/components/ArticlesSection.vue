<script>
export default {
    name: 'Articles',
}
</script>

<template>
    <section>
        <div class="container pt-5">
            <!-- Title and divider container -->
            <div class="section-top pt-5 text-center">
                <h2 class="text-uppercase text-white fw-bold">Performance News</h2>
                <img src="../assets/img/divider-xx-red.png" alt="divider X" class="pt-3 pb-4">
            </div>
            <!-- /Title and divider container -->
            <div class="row-rr d-flex justify-content-center"> 

                <!-- Devided in 3 main columns each containing 2 col-components -->
                <!-- column 1 -->
                <div class="column d-flex flex-column">
                    <div clsss="item">
                        <div class="item-top position-relative d-flex justify-content-center align-items-center">
                            <img src="../assets/img/blog1.jpg" alt="" class="w-100">
                            <!-- icons container show on hover -->
                            <div class="icons-container text-white position-absolute fs-3">
                                <font-awesome-icon icon="fa-solid fa-link" class="me-4" />
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </div>
                        </div>
                        <div class="item-bottom p-4">
                            <h6 class="text-white fw-bold">Train with free weights or your body weight?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nemo aut dolorum voluptas
                                sit, eligendi beatae[...]</p>
                        </div>
                    </div>
                    <div class="item mt-4">
                        <div class="item-top position-relative d-flex justify-content-center align-items-center">
                            <img src="../assets/img/blog4.jpg" alt="" class="w-100">
                            <!-- icons container show on hover -->
                            <div class="icons-container text-white position-absolute fs-3">
                                <font-awesome-icon icon="fa-solid fa-link" class="me-4" />
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </div>
                        </div>
                        <div class="item-bottom p-4">
                            <h6 class="text-white">Train with free weights or your body weight?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nemo aut dolorum voluptas
                                sit, eligendi beatae[...]</p>
                        </div>
                    </div>
                </div>
                <!-- /column1 -->
                <!-- column2 -->
                <div class="column d-flex flex-column">
                    <div clsss="item">
                        <div class="item-top position-relative d-flex justify-content-center align-items-center">
                            <img src="../assets/img/blog6.jpg" alt="" class="w-100">
                            <!-- icons container show on hover -->
                            <div class="icons-container text-white position-absolute fs-3">
                                <font-awesome-icon icon="fa-solid fa-link" class="me-4" />
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </div>

                        </div>
                        <div class="item-bottom p-4">
                            <h6 class="text-white fw-bold">Train with free weights or your body weight?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nemo aut dolorum voluptas
                                sit, eligendi beatae[...]</p>
                        </div>
                    </div>
                    <div class="item mt-4">
                        <div class="item-top position-relative d-flex justify-content-center align-items-center">
                            <img src="../assets/img/trainer3.jpg" alt="" class="w-100">
                            <!-- icons container show on hover -->
                            <div class="icons-container text-white position-absolute fs-3">
                                <font-awesome-icon icon="fa-solid fa-link" class="me-4" />
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </div>
                        </div>
                        <div class="item-bottom p-4">
                            <h6 class="text-white">Train with free weights or your body weight?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nemo aut dolorum voluptas
                                sit, eligendi beatae[...]</p>
                        </div>
                    </div>
                </div>
                <!-- /column2 -->
                <!-- column3 -->
                <div class="column d-flex flex-column">
                    <div clsss="item">
                        <div class="item-top position-relative d-flex justify-content-center align-items-center">
                            <img src="../assets/img/trainer4.jpg" alt="" class="w-100">
                            <!-- icons container show on hover -->
                            <div class="icons-container text-white position-absolute fs-3">
                                <font-awesome-icon icon="fa-solid fa-link" class="me-4" />
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </div>
                        </div>
                        <div class="item-bottom p-4">
                            <h6 class="text-white fw-bold">Train with free weights or your body weight?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nemo aut dolorum voluptas
                                sit, eligendi beatae[...]</p>
                        </div>
                    </div>
                    <div class="item mt-4">
                        <div class="item-top position-relative d-flex justify-content-center align-items-center">
                            <img src="../assets/img/trainer1.jpg" alt="" class="w-100">
                            <!-- icons container show on hover -->
                            <div class="icons-container text-white position-absolute fs-3">
                                <font-awesome-icon icon="fa-solid fa-link" class="me-4" />
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </div>
                        </div>
                        <div class="item-bottom p-4">
                            <h6 class="text-white">Train with free weights or your body weight?</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nemo aut dolorum voluptas
                                sit, eligendi beatae[...]</p>
                        </div>
                    </div>
                </div>
                <!-- /column3 -->
            </div>
            <!-- Button -->
            <div class="btn-container text-center mt-4 pb-5">
                <button class="btn rounded-0 text-uppercase py-2 px-5">Read all articles</button>
            </div>
            <!-- /Button -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section {
    background-color: $primarybgcolor;
    .column {
        margin: 15px;
        width: calc((100% / 3) - 30px);
    }

    p {
        color: $textsecondarycolor;
    }
    .item-bottom {
        background-color: $secondarybgcolor;
    }

    button {
        border: 1px solid $textsecondarycolor;
        color: $textsecondarycolor;
    }
    .icons-container {
        width: 100%;
        height: 100%;
        background: rgba(237, 85, 85, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
    }

    .item-top:hover .icons-container {
        visibility: visible;
    }
}
</style>