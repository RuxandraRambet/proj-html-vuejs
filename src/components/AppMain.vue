<script>
import DescriptionSection from './DescriptionSection.vue';
import SignUpSection from './SignUpSection.vue';
import IconsSection from './IconsSection.vue';
import ResultsSection from './ResultsSection.vue';
import PerformanceSection from './PerformanceSection.vue';
import QuoteSection from './QuoteSection.vue';
import TrainersSection from './TrainersSection.vue';
import ArticlesSection from './ArticlesSection.vue'
export default {
    name: 'AppMain',
    components: {
        DescriptionSection,
        SignUpSection,
        IconsSection,
        ResultsSection,
        PerformanceSection,
        QuoteSection,
        TrainersSection,
        ArticlesSection,
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
        <QuoteSection/>
        <TrainersSection/>
        <ArticlesSection/>

    </main>
</template>

<style scoped>

</style>