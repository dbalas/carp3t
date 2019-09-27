<template>
    <div id="app">
        <carp3t-form></carp3t-form>
    </div>
</template>

<script>
import Carp3tForm from '@/components/Carp3tForm';
export default {
    name: 'App',
    components: {
        Carp3tForm,
    },
};
</script>

<style lang="scss">
@import '@/assets/variables';
@import 'node_modules/bootstrap/scss/bootstrap.scss';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
