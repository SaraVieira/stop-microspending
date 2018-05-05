<template>
  <el-form ref="form" :model="form">
     <el-alert
      v-if="$store.state.payments.length"
      :closable="false"
      title="Monthly Spending"
      type="info"
      :description="getValue">
    </el-alert>
    <h2>Add an Expense</h2>
   <section><el-form-item label-position="top" label="Payment Name">
     <el-input required placeholder="Ex: Netflix" v-model="form.name"></el-input>
   </el-form-item>
    <el-form-item label-position="top" label="Price">
        <el-input required type="number" placeholder="Ex: 10" v-model="form.price"></el-input>
    </el-form-item>
    <el-form-item label-position="top" label="Frequency of Payment">
      <el-select required classname="select" size="large" filterable v-model="form.period" placeholder="Select Frequency">
        <el-option
          v-for="item in $store.state.periods"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
    </el-select>
  </el-form-item>
  </section>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Add</el-button>
  </el-form-item>
  </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                period: '',
                price: ''
            }
        };
    },
    computed: {
        getValue() {
            return `${
                this.$store.getters.getTotalSpending
            }$! That is a lot of money!`;
        }
    },
    methods: {
        onSubmit() {
            const values = Object.assign({}, this.form);
            this.$store.commit('addPayment', values);
            this.form.name = '';
            this.form.price = '';
            this.form.period = '';

            this.$notify({
                title: 'Added',
                message: 'Your Subscription was added with success',
                type: 'success'
            });
        }
    }
};
</script>
<style scoped lang="scss">
section {
    display: flex;
    justify-content: space-between;

    & > div {
        flex-basis: 30%;
    }
}
.el-select {
    width: 100%;
}
</style>
