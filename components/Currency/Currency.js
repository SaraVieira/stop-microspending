import { mapState } from 'vuex';

export default {
    data() {
        return  {
            currency: {}, //TODO: initialize at USD if no local storage
        }
    },
    methods: {
        setCurrency(val) {
            this.$store.commit('changeCurrency', this.currencies[val])
        }
    },
    computed: {
        ...mapState({
          currencies: state => state.currencies,
        }),
    },
};
