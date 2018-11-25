
<template>
  <Timeline pending>
    <TimelineItem v-bind:color='choose_dot_color()' v-for="item in milestoneList" :key="item.id">
      <span class="title"> {{ item.title }}</span>
      <!-- <el-row :gutter="20">
        <el-col :span="19">{{ item.title }}</el-col>
        <el-col :span="5">
          <span class="plain">{{ item.created_at + ": " + day_ago_show(item.created_at) }}</span>
          </el-col>
      </el-row> -->

      <p class="content">
        {{ item.content }}
      </p>


      <el-tag size="mini"
              v-bind:type="choose_tag_type()"
              v-for="(tag, index) in item.tags"
              :key="`${item.id}-tag-${index}`"
              class="self-tag">
        {{ tag }}
      </el-tag>


    </TimelineItem>

    <!-- 自定义末节点 -->
    <TimelineItem>
      <i class="el-icon-success" slot='dot'></i>
      <a href="#">查看更多</a>
    </TimelineItem>
  </Timeline>
</template>

<script>
import { Timeline, TimelineItem } from '../components/timeline'

const DotUseColor = ['blue', 'red', 'green']
const DotUseColorLength = DotUseColor.length

const TagUseType = ['', 'success', 'info', 'warning', 'danger']
const TagUseTypeLength = TagUseType.length

const TimeInterval = 86400 // seconds

export default {
  name: 'Milestone',
  components: {
    Timeline,
    TimelineItem
  },
  data () {
    return {
      milestoneList: [],
      now_date: Date.now()
    }
  },
  mounted () {
    this.BaseApi.milestone.getMilestoneList((res) => {
      this.milestoneList = res.data.dataList;
    })
  },
  compute: {

  },
  methods: {
    compute_day_ago: function (time) {
      let day_ago = null
      if (!!time) {
        let many_second = (this.now_date - new Date(time)) / 1000
        day_ago = Math.floor((many_second / TimeInterval))
      }

      return day_ago
    },
    day_ago_show: function (time) {
      let day_ago = this.compute_day_ago(time)

      return day_ago ? `${day_ago}天前` : ''
    },
    random_value: function (len) {
      return Math.floor(Math.random() * len)
    },
    choose_dot_color: function () {
      // 随机选择tail颜色
      return DotUseColor[this.random_value(DotUseColorLength)]
    },
    choose_tag_type: function () {
      // 随机选择tag颜色
      return TagUseType[this.random_value(TagUseTypeLength)]
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font-weight: bold; // 无效了~~~
    font-size: 16px;
  }

  .content {
    font-size: 14px;
    padding-left: 5px;
    line-height: 30px;
  }

  .self-tag {
    margin-right: 5px;
  }

  .plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    padding: 8px;
  }

  a {
    text-decoration: none;
  }
</style>
