<template>
  <el-form :rules="rules" ref="form" :model="form">
    <el-alert v-if="$store.state.payments.length" :closable="false" title="Monthly Spending" type="info" :description="getValue">
    </el-alert>
    <h2>Add an Expense</h2>
    <el-alert v-if="form.invalid" title="There are some problems in your form" type="error">
    </el-alert>
    <section class="inputs">
      <el-form-item prop="name" label-position="top" label="Payment Name/Website">
        <el-input required placeholder="Ex: Netflix" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="price" label-position="top" label="Price">
        <el-input required type="number" placeholder="Ex: 10" :min="0" v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item prop="period" label-position="top" label="Frequency of Payment">
        <el-select no-match-text="No matching frequencies" required classname="select" size="large" filterable v-model="form.period" placeholder="Select Frequency">
          <el-option v-for="item in $store.state.periods" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </section>
    <el-form-item>
      <el-button :disabled="disabled" type="primary" @click="onSubmit">Add</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
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
                this.$store.getters.getTotalSpending
            }$! That is a lot of money!`;
        },
        disabled() {
            return !(this.form.name && this.form.price && this.form.period);
        }
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
</script>
<style lang="scss">
.inputs {
    display: flex;
    justify-content: space-between;

    & > div {
        flex-basis: 30%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
}
.el-select {
    width: 100%;
}

.el-alert.el-alert--error {
    margin: 10px 0;
    margin-bottom: 0;

    & .el-alert__title {
        font-size: 12px;
    }
}
</style>
