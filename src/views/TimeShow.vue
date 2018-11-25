<template>
  <el-row :gutter="20" class="card-row">
    <el-col :span="12" v-for="card in cards" :key="card.id">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span> {{ card.title }} </span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="item in card.times" :key="item.id" class="text item">
          <el-tag type="success">{{ item.begin_time }}</el-tag>
          -
          <el-tag type="success">{{ item.end_time }}</el-tag>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Week-1",
          times: [
            { id: '1', begin_time: '2018-11-11 07:00', end_time: '2018-11-11 22:40'},
            { id: '2', begin_time: '2018-11-13 08:30', end_time: '2018-11-13 23:30'},
            { id: '3', begin_time: '2018-11-15 07:50', end_time: '2018-11-15 21:45'},
            { id: '4', begin_time: '2018-11-17 12:00', end_time: '2018-11-17 23:40'}
          ]
        },
        {
          title: "Week-2",
          times: [
            { id: '1', begin_time: '2018-11-11 07:00', end_time: '2018-11-11 22:40'},
            { id: '2', begin_time: '2018-11-13 08:30', end_time: '2018-11-13 23:30'},
            { id: '3', begin_time: '2018-11-15 07:50', end_time: '2018-11-15 21:45'},
            { id: '4', begin_time: '2018-11-17 12:00', end_time: '2018-11-17 23:40'}
          ]
        },
        {
          title: "Week-3",
          times: [
            { id: '1', begin_time: '2018-11-11 07:00', end_time: '2018-11-11 22:40'}
          ]
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-bottom: 20px;
    // &:last-child {
    //   margin-bottom: 0;
    // }
  }
</style>