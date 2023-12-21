<script>
export default {
    name: 'FooterBottom'
}
</script>

<template>
    <!-- footer bottom -->
    <div class="bottom-section p-5">
        <div class="container d-flex justify-content-between align-items-center">
            <!-- left-side -->
            <div class="copyright">
                <font-awesome-icon icon="fa-regular fa-copyright" />
                <span class="ps-2 ">Copyright 2012 - 2020 &nbsp|&nbsp Avada Theme by Theme Fusion &nbsp|&nbsp All Rights
                    Reserved &nbsp|&nbsp Powered by WordPress</span>
                <span></span>
            </div>
            <!-- left-side -->

            <!-- right-side -->
            <div class="social">
                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                <a href="#"> <font-awesome-icon icon="fa-brands fa-twitter" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </div>
            <!-- /right side -->
        </div>
    </div>
    <!-- /footer bottom -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.bottom-section {
    background-color: $secondarybgcolor;
}

.copyright {
    color: $textsecondarycolor;
}

.fa-copyright {
    font-size: 13px;
}
.social a {
    border: 1px solid transparent;
    padding: 10px 15px;
    background-color: #ee6059;
    color: white;
    display: inline-block;
    margin-right: 10px;
    font-size: 20px;
}
</style>