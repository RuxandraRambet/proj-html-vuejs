<script>
import DescriptionSection from './DescriptionSection.vue';
import SignUpSection from './SignUpSection.vue';
import IconsSection from './IconsSection.vue';
import ResultsSection from './ResultsSection.vue'
export default {
    name: 'AppMain',
    components: {
        DescriptionSection,
        SignUpSection,
        IconsSection,
        ResultsSection,
    }
}
</script>

<template>
    <main>
        <DescriptionSection />
        <SignUpSection />
        <IconsSection/>
        <ResultsSection/>
    </main>
</template>

<style scoped>

</style>