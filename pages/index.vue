<template>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :md="18" :sm="22">
      <Form />
      <h2 class="expenses">Subscriptions</h2>
      <el-row v-if="loading" type="flex" justify="center">
        <ClipLoader color="#2b487a" />
      </el-row>
      <p v-if="!($store.state.payments || []).length && !loading">No expenses! Good! You did good in life!</p>
      <el-col v-if="!loading" :md="12" :sm="24" v-for="payment in payments" v-bind:key="payment.id">
        <el-card style="margin-bottom: 20px" shadow="hover">
          <div slot="header">
            <el-row type="flex" justify="space-between">
              <b>{{ payment.name }}</b>
              <el-button @click="$store.commit('removePayment', payment.id)" style="float: right; padding: 3px 0" type="text">Remove</el-button>
            </el-row>
          </div>
          <p>Price:
            <b>{{ payment.price | currency($store.state.currency) }}</b>
          </p>
          <p>Frequency:
            <b>{{ $store.getters.getFrequency(payment.period) }}</b>
          </p>
        </el-card>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import Form from '~/components/form';
import localStorage from '~/plugins/localStorage';
import { mapState } from 'vuex'

export default {
    components: {
        Form,
        ClipLoader
    },
    data() {
        return {
            loading: true
        };
    },
    mounted: function() {
        this.$nextTick(function() {
            this.$store.commit('createPayments', localStorage.get());
            this.loading = false;
        });
    },
    computed: {
      ...mapState({
        payments: state => state.payments
      })
    },
};
</script>
<style lang="scss">
.expenses {
    margin-bottom: 20px;
}

.el-alert {
    margin-bottom: 20px;

    .el-alert__title {
        font-size: 18px;
        line-height: 1.5;
    }

    p.el-alert__description {
        font-size: 16px;
        line-height: 1.5;
        color: #303133;
    }
}
</style>
