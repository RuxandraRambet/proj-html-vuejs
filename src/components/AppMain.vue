<script>
import DescriptionSection from './DescriptionSection.vue';
import SignUpSection from './SignUpSection.vue';
export default {
    name: 'AppMain',
    components: {
        DescriptionSection,
        SignUpSection,
    }
}
</script>

<template>
    <main>
        <DescriptionSection />
        <SignUpSection />
    </main>
</template>

<style scoped>

</style>