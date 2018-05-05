<template>
    <el-row gutter="20" type="flex" justify="center">
      <el-col :span="18">
      <Form />
      <h2 class="expenses">Subscriptions</h2>
      <el-col :span="12" v-for="payment in $store.state.payments" v-bind:key="payment.id">
        <transition name="el-fade-in">
          <el-card style="margin-bottom: 20px" shadow="hover">
          <div slot="header">
            <el-row type="flex" justify="space-between">
                <b>{{ payment.name }}</b>
                <el-button @click="$store.commit('removePayment', payment.id)" style="float: right; padding: 3px 0" type="text">Remove</el-button>
            </el-row>
          </div>
          <p>Price: <b>{{ payment.price }}$</b></p>
          <p>Frequency: <b>{{ $store.getters.getFrequency(payment.period) }}</b></p>
        </el-card></transition>
      </el-col>
    </el-col>
    </el-row>

</template>

<script>
import Form from '~/components/Form.vue';

export default {
    components: {
        Form
    },
    data() {
        return {
            loading: !this.$store.state.payments.length
        };
    },
    methods: {}
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

