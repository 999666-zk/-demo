<template>
  <div v-cloak class="inner">
    <!-- 这里进行相关数据的渲染 -->
    <!-- {{ id }} -->
    <van-loading v-if="loading" color="#1989fa" class="loading" />
    <template v-else>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loadinges"
          :finished="finished"
          finished-text="没有更多了"
        >
          <van-swipe-cell v-for="item in dataList" :key="item.art_id">
            <van-card
              :title="item.title"
              :desc="`作者：${item.aut_name}\n评论：${item.comm_count}`"
              :thumb="
                item.cover.type != 0
                  ? item.cover.images[0]
                  : 'http://toutiao.itheima.net/resources/images/28.jpg'
              "
              @click="getInnerText(item.art_id)"
            >
            </van-card>
            <!-- {{ item.cover.images instanceof Array }} -->
            <template #right>
              <van-button
                square
                text="不感兴趣"
                type="danger"
                class="delete-button"
              />
            </template>
          </van-swipe-cell>

          <!-- --------------- -->
        </van-list>
      </van-pull-refresh>
    </template>
  </div>
</template>

<script>
import { allPinDaoItemList } from "@/api";
import { Toast } from "vant";
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
      // 关于下拉刷新页面
      loadinges: false,
      finished: false,
      refreshing: false,
    };
  },
  computed: {},
  methods: {
    // 获取列表信息
    getItemList: async function () {
      const res = await allPinDaoItemList(this.queryInfo);
      // console.log(data);
      if (res.status === 200) {
        // 不再进行加载了
        this.loading = false;
        // 下拉刷新
        this.refreshing = false;
        this.dataList = res.data.data.results;
        console.log(this.dataList);
      }
    },
    // 下拉刷新
    onRefresh: function () {
      setTimeout(async () => {
        // 请求新的数据
        this.dataList = [];
        if (this.getItemList()) {
          Toast("刷新成功");
        } else {
          Toast("刷新失敗");
        }
      }, 1000);
      // console.log(this.$route);
      // 发送请求数据
    },

    // 详情页面
    getInnerText: function (id) {
      this.$router.push({ name: "text", params: { id } });
    },
  },
  created() {
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
.van-button {
  height: 100%;
}
</style>
