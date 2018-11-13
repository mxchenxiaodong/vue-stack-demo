<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

    <el-form-item label="发生时间">
      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.happenedAt">
      </el-date-picker>
    </el-form-item>

    <el-form-item label="停车类型">
      <el-select v-model="ruleForm.parkFeeParkType" placeholder="请选择">
        <el-option
          v-for="item in parkTypeList"
          :key="item.value"
          :value="item.value"
          :label="item.label">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-switch
        v-model="ruleForm.parkFeeUseCustomCarPark"
        active-text="自填停放位置"
        inactive-text="否">
      </el-switch>
    </el-form-item>

    <el-form-item label="车辆">
      <el-select v-model="ruleForm.parkFeeCarParkId" placeholder="请输入至少4个字符">
        <el-option
          v-for="item in carList"
          :key="item.car_id"
          :value="item.car_id"
          :label="item.car_no">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item></el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        city: '',
        store: '',
        category: '',
        happenedAt: '2018-11-14',
        parkFeeBeginAt: '',
        parkFeeEndAt: '',
        parkFeeParkType: '',
        parkFeeParkDuration: '',
        parkFeeParkLocation: '',
        parkFeeStandardDay: '',
        parkFeeStandardHour: '',
        parkFeePrice: '',
        parkFeeHasInvoice: '',
        parkFeeCarParkId: '',
        parkFeeUseCustomCarPark: false,
        parkFeeCarStatus: '',
      },
      parkTypeList: [],
      carList: [],
      orderList: [],
      rules: {

      }
    }
  },
  mounted: function() {
    // 请求停车类型
    this.BaseApi.expense.getParkFeeParkType((res) => {
      this.parkTypeList = res.data.dataList;
    })
  },
  methods: {
    getCarList() {
      this.BaseApi.car.getCarList((res) => {
        this.carList = res.data.dataList;
      })
    },
    getOrderList() {
      this.BaseApi.order.getOrderList((res) => {
        this.orderList = res.data.dataList;
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit');
        } else {
          return false;
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>

</style>
