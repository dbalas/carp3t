<template>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-card bg-variant="light">
            <b-form-group
                label-cols-lg="3"
                :label="$t('material')"
                label-class="font-weight-bold pt-0"
                class="mb-0"
            >
                <b-form-group
                    id="material-group"
                    :label="$t('cost')"
                    label-for="material"
                    label-cols-sm="4"
                    label-align-sm="right"
                >
                    <b-form-input
                        id="material"
                        v-model="form.material"
                        type="text"
                        required
                        placeholder="€/kg"
                    ></b-form-input>
                </b-form-group>
            </b-form-group>
        </b-card>
        <b-card bg-variant="light">
            <b-form-group
                label-cols-lg="3"
                :label="$t('electricity')"
                label-class="font-weight-bold pt-0"
                class="mb-0"
            >
                <b-form-group
                    label-cols-sm="4"
                    :label="$t('cost')"
                    label-align-sm="right"
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
                    label-align-sm="right"
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
        </b-card>

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
    name: 'Form',
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
form {
    width: 50%;
    max-width: 600px;
    margin: auto;

    .col-form-label {
        text-transform: capitalize;
    }

    .card {
        margin-bottom: 1rem;
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
