<template>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="price-label">{{ totals.material.toFixed(2) }}€</div>
        <b-form-group :label="$t('Material')" class="mb-0">
            <b-form-group
                id="material-quantity-group"
                :label="$t('Quantity')"
                label-for="materialQuantity"
                label-cols-sm="4"
            >
                <b-input-group>
                    <template #append>
                        <b-input-group-text>g</b-input-group-text>
                    </template>
                    <b-form-input
                        id="materialQuantity"
                        v-model="form.materialQuantity"
                        type="number"
                        step="0.01"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group
                id="material-group"
                :label="$t('Cost')"
                label-for="material"
                label-cols-sm="4"
            >
                <b-input-group>
                    <template #append>
                        <b-input-group-text>€/kg</b-input-group-text>
                    </template>
                    <b-form-input
                        id="materialCost"
                        v-model="form.materialCost"
                        type="number"
                        step="0.01"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
        </b-form-group>
        <div class="price-label">{{ totals.electricity.toFixed(2) }}€</div>
        <b-form-group :label="$t('Electricity')" class="mb-0 mt-4">
            <b-form-group
                label-cols-sm="4"
                :label="$t('Consumption')"
                label-for="consumption"
            >
                <b-input-group>
                    <template #append>
                        <b-input-group-text>W</b-input-group-text>
                    </template>
                    <b-form-input
                        id="consumption"
                        v-model="form.consumption"
                        type="number"
                        step="0.01"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group
                label-cols-sm="4"
                :label="$t('Cost')"
                label-for="electricityCost"
            >
                <b-input-group>
                    <template #append>
                        <b-input-group-text>€/kWh</b-input-group-text>
                    </template>
                    <b-form-input
                        id="electricityCost"
                        v-model="form.electricityCost"
                        type="number"
                        step="0.01"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group
                label-cols-sm="4"
                :label="$t('Printing time')"
                label-for="printingTime"
            >
                <b-input-group>
                    <template #append>
                        <b-input-group-text>h</b-input-group-text>
                    </template>
                    <b-form-input
                        id="printingTime"
                        v-model="form.printingTime"
                        type="number"
                        step="0.01"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
        </b-form-group>

        <div class="price-label">{{ totals.labor.toFixed(2) }}€</div>
        <b-form-group :label="$t('Labor')" class="mb-0 mt-4">
            <b-form-group
                label-cols-sm="4"
                :label="$t('Processing time')"
                label-for="processingHours"
            >
                <b-input-group>
                    <template #append>
                        <b-input-group-text>h</b-input-group-text>
                    </template>
                    <b-form-input
                        id="processingHours"
                        v-model="form.processingHours"
                        type="number"
                        step="0.01"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
            <b-form-group
                label-cols-sm="4"
                :label="$t('Price/hour')"
                label-for="laborCost"
            >
                <b-input-group>
                    <template #append>
                        <b-input-group-text>€/h</b-input-group-text>
                    </template>
                    <b-form-input
                        id="laborCost"
                        v-model="form.laborCost"
                        type="number"
                        step="0.01"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
        </b-form-group>
        <div class="price-label">{{ totals.others.toFixed(2) }}€</div>
        <b-form-group :label="$t('Others')" class="mb-4 mt-4">
            <b-form-group
                label-cols-sm="4"
                :label="$t('Failure rate')"
                label-for="failureRate"
            >
                <b-input-group>
                    <template #append>
                        <b-input-group-text>%</b-input-group-text>
                    </template>
                    <b-form-input
                        id="failureRate"
                        v-model="form.failureRate"
                        type="number"
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
        </b-form-group>

        <footer>
            <b-button class="mr-3" type="submit" variant="outline-primary">{{
                $t('Calculate')
            }}</b-button>
            <b-button type="reset" variant="outline-danger">{{
                $t('Reset')
            }}</b-button>
            <span class="total-label"
                >{{ $t('Total') }}: {{ totals.total.toFixed(2) }}€</span
            >
        </footer>
    </b-form>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'Carp3tForm',
    data() {
        return {
            show: true,
            totals: {
                material: 0,
                electricity: 0,
                labor: 0,
                others: 0,
                total: 0,
            },
            form: {
                materialCost: null,
                materialQuantity: null,
                electricityCost: null,
                consumption: null,
                laborCost: null,
                processingHours: null,
                printingTime: null,
                failureRate: null,
            },
        };
    },
    methods: {
        onSubmit(evt) {
            this.totals = {
                material:
                    ((this.form.materialCost || 0) / 1000) *
                    (this.form.materialQuantity || 0),
                electricity:
                    ((this.form.consumption || 0) / 1000) *
                    (this.form.electricityCost || 0) *
                    (this.form.printingTime || 0),
                labor:
                    (this.form.processingHours || 0) *
                    (this.form.laborCost || 0),
                others: 0,
                total: 0,
            };

            Vue.set(
                this.totals,
                'others',
                ((this.form.failureRate || 0) / 100) *
                    (this.totals.material +
                        this.totals.electricity +
                        this.totals.labor)
            );

            Vue.set(
                this.totals,
                'total',
                this.totals.material +
                    this.totals.electricity +
                    this.totals.labor +
                    this.totals.others
            );

            evt.preventDefault();
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form = {
                materialCost: null,
                materialQuantity: null,
                electricityCost: null,
                consumption: null,
                laborCost: null,
                processingHours: null,
                printingTime: null,
                failureRate: null,
            };
            this.totals = {
                material: 0,
                electricity: 0,
                labor: 0,
                others: 0,
                total: 0,
            };
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
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 1000px) {
        width: 95%;
    }

    label.col-form-label {
        font-size: 0.9rem;
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
    .price-label,
    .total-label {
        font-variant: small-caps;
        color: theme-color('primary');
    }

    .input-group-text {
        background-color: transparent;
        color: #adadad;
        border-left-color: transparent;
    }

    .form-control {
        border-right-color: transparent;
    }

    .price-label {
        position: relative;
        top: 48px;
        right: 0;
        text-align: right;
        font-size: 0.95rem;
        &:first-child {
            top: 25px;
        }
    }

    .total-label {
        font-weight: bold;
        font-variant: inherit;
        font-size: 1rem;
    }

    footer {
        display: flex;
        align-items: center;
        .total-label {
            flex-grow: 1;
            text-align: right;
        }
    }
}
</style>
