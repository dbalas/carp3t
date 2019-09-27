<template>
    <div id="app">
        <grouped-form></grouped-form>
    </div>
</template>

<script>
import GroupedForm from '@/components/GroupedForm';
export default {
    name: 'App',
    components: {
        GroupedForm,
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
