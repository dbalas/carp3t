<template>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group :label="$t('material')" class="mb-0">
            <b-form-group
                id="material-group"
                :label="$t('cost')"
                label-for="material"
                label-cols-sm="4"
            >
                <span class="price-label">{{ 500 }}€</span>
                <b-form-input
                    id="material"
                    v-model="form.material"
                    type="text"
                    required
                    placeholder="€/kg"
                ></b-form-input>
            </b-form-group>
        </b-form-group>
        <b-form-group :label="$t('electricity')" class="mb-0">
            <b-form-group
                label-cols-sm="4"
                :label="$t('cost')"
                label-for="electricityCost"
            >
                <b-form-input
                    id="electricityCost"
                    v-model="form.electricityCost"
                    type="text"
                    required
                    placeholder="€/kWh"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                label-cols-sm="4"
                :label="$t('consumption')"
                label-for="consumption"
            >
                <b-form-input
                    id="consumption"
                    v-model="form.consumption"
                    type="text"
                    required
                    placeholder="W"
                ></b-form-input> </b-form-group
        ></b-form-group>

        <div class="buttons">
            <b-button class="submit-btn" type="submit" variant="primary"
                >Calcular</b-button
            >
            <b-button type="reset" variant="danger">Reset</b-button>
        </div>
    </b-form>
</template>

<script>
export default {
    name: 'Carp3tForm',
    data() {
        return {
            show: true,
            form: {
                materialCost: '',
                electricityCost: null,
                consumption: null,
            },
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form.email = '';
            this.form.name = '';
            this.form.food = null;
            this.form.checked = [];
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
    },
};
</script>

<style lang="scss">
@import '@/assets/variables';

form {
    width: 50%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

    .col-form-label {
        text-transform: capitalize;
    }

    .form-row > div {
        position: inherit;
    }

    fieldset {
        position: relative;
    }

    legend {
        margin-bottom: 0.8rem !important;
    }

    legend,
    .price-label {
        font-variant: small-caps;
        color: theme-color('primary');
    }

    .price-label {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.95rem;
    }
}

.buttons {
    margin-top: 1rem;
    text-align: center;
}

.submit-btn {
    margin-right: 0.5rem;
}
</style>
