import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            currencies: state => state.currencies,
            currency: state => state.currency
        })
    },
    methods: {
        setCurrency(val) {
            this.$store.commit('changeCurrency', this.$store.state.currencies[val])
        }
    },
};
