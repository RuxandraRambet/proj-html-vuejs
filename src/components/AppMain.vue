<script>
import DescriptionSection from './DescriptionSection.vue';
import SignUpSection from './SignUpSection.vue';
import IconsSection from './IconsSection.vue';
import ResultsSection from './ResultsSection.vue';
import PerformanceSection from './PerformanceSection.vue';
export default {
    name: 'AppMain',
    components: {
        DescriptionSection,
        SignUpSection,
        IconsSection,
        ResultsSection,
        PerformanceSection,
    }
}
</script>

<template>
    <main>
        <DescriptionSection />
        <SignUpSection />
        <IconsSection/>
        <ResultsSection/>
        <PerformanceSection/>
    </main>
</template>

<style scoped>

</style>