<template>
    <div id="carp3t-app">
        <carp3t-form></carp3t-form>
    </div>
</template>

<script>
import Carp3tForm from '@/components/Carp3tForm';
export default {
    name: 'App',
    beforeMount() {
        const params = new URLSearchParams(window.location.search);
        if (params.has('lang')) this.$root.$i18n.locale = params.get('lang');
    },
    components: {
        Carp3tForm,
    },
};
</script>

<style lang="scss">
@import '@/assets/variables';
@import 'node_modules/bootstrap/scss/bootstrap.scss';

#carp3t-app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 15px;

    textarea:focus,
    button:focus,
    input[type='text']:focus,
    input[type='password']:focus,
    input[type='datetime']:focus,
    input[type='datetime-local']:focus,
    input[type='date']:focus,
    input[type='month']:focus,
    input[type='time']:focus,
    input[type='week']:focus,
    input[type='number']:focus,
    input[type='email']:focus,
    input[type='url']:focus,
    input[type='search']:focus,
    input[type='tel']:focus,
    input[type='color']:focus,
    .uneditable-input:focus {
        outline: 0;
        outline: thin dotted \9;
        box-shadow: none !important;
    }

    input::placeholder {
        color: #e0e0e0 !important;
    }
}
</style>
