<template>
  <ul>
    <li v-for="item in fragments" :key="item.id">
      <div class="item-content">
        {{ item.content }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fragments: [
        {
          id: "1",
          title: "xx",
          content: "世人谓我恋长安，其实只恋长安某。-> 我想，其实也没关系",
          created_at: "2018-11-23",
          tags: ["xx", "yy"],
          links: {
            music_type: [""],
            book_type: [""],
            video_type: [""]
          }
        },
        {
          id: "2",
          title: "yy",
          content: "世人都在辛辛苦苦拼死拼活，那不是努力只是劳动。所谓努力是指主动而有目的的行动。 												— — 挪威森林",
          created_at: "2018-11-23",
          tags: ["xx", "yy"],
          links: {
            music_type: [""],
            book_type: [""],
            video_type: [""]
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-content {
    margin: 20px;
  }

  li {
    list-style: none;
  }
</style>
