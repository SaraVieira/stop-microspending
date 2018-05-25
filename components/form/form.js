import { mapState } from 'vuex'
import formatCurrency from '~/plugins/currency';

export default {
    data() {
        var checkNumberisPositive = (rule, value, callback) => {
            if (value < 0) {
                callback(new Error('Price must be positive'));
            } else {
                callback();
            }
        };
        return {
            form: {
                name: null,
                period: null,
                price: null,
                invalid: false
            },
            rules: {
                period: [
                    {
                        required: true,
                        message: 'Please a frequency',
                        trigger: 'change'
                    }
                ],
                name: [
                    {
                        required: true,
                        message: 'Please input an expense',
                        trigger: 'blur'
                    }
                ],
                price: [
                    { validator: checkNumberisPositive, trigger: 'change' },
                    { validator: checkNumberisPositive, trigger: 'blur' },
                    {
                        min: 1,
                        max: 5,
                        message: 'That is too big of a number',
                        trigger: 'change'
                    },
                    {
                        required: true,
                        message: 'Please input a price',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    computed: {
        getValue() {
            return `${
                formatCurrency(this.$store.getters.getTotalSpending, this.$store.state.currency)
            }! That is a lot of money!`;
        },
        disabled() {
            return !(this.form.name && this.form.price && this.form.period);
        },
        ...mapState({
          periods: state => state.periods,
        })
    },
    methods: {
        clearForm() {
            this.form.name = '';
            this.form.price = '';
            this.form.period = '';
        },
        onSubmit() {
            this.$refs.form.validate(v => {
                if (v) {
                    this.form.invalid = false;
                    const values = Object.assign({}, this.form);
                    this.$store.commit('addPayment', values);
                    this.clearForm();

                    this.$notify({
                        title: 'Added',
                        message: 'Your Subscription was added with success',
                        type: 'success'
                    });
                } else {
                    this.form.invalid = true;
                    return false;
                }
            });
        }
    }
};
