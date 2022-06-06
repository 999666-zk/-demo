<template>
  <div v-cloak class="inner">
    <!-- 这里进行相关数据的渲染 -->
    <!-- {{ id }} -->
    <van-loading v-if="loading" color="#1989fa" class="loading" />
    <template v-else>
      <van-swipe-cell v-for="item in dataList" :key="item.art_id">
        <van-card :title="item.title">
          作者:{{ item.aut_name }} 评论:{{ item.comm_count }}
        </van-card>
        <template #right>
          <van-button
            square
            text="不感兴趣"
            type="danger"
            class="delete-button"
          />
        </template>
      </van-swipe-cell>
    </template>
  </div>
</template>

<script>
import { allPinDaoItemList } from "@/api";
export default {
  props: { id: Number },
  components: {},
  data() {
    return {
      // 当前时间戳
      queryInfo: {
        channel_id: this.id,
        timestamp: new Date(),
      },
      // 获得的数据的列表
      dataList: [],
      // 加载
      loading: false,
    };
  },
  computed: {},
  methods: {
    getItemList: async function () {
      const res = await allPinDaoItemList(this.queryInfo);
      // console.log(data);
      if (res.status === 200) {
        // 不再进行加载了
        this.loading = false;
        this.dataList = res.data.data.results;
        console.log(this.dataList);
      }
    },
  },
  created() {},
  mounted() {
    this.loading = true;
    this.getItemList();
  },
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.loading {
  text-align: center;
  margin-top: 2.2rem;
}
</style>
