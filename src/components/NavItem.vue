<template>
  <!--  -->
  <div>
    <van-tabs v-model="active" color="#0077ff">
      <van-tab
        v-for="(item, index) in PinDaoList"
        :title="item.name"
        :key="index"
      >
        <!-- 内容 {{ index }} -->
        <div class="main">
          <ItemBox :id="item.id"></ItemBox>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { allChannelListAPI } from "@/api";

import ItemBox from "@/components/ItemBox.vue";
export default {
  components: {
    ItemBox,
  },
  data() {
    return {
      // 获取频道列表
      PinDaoList: [],
      // active 选中的值
      active: Number(localStorage.getItem("activeIdx"))
        ? Number(localStorage.getItem("activeIdx"))
        : 0,
    };
  },
  computed: {},
  methods: {
    //   获取频道列表
    getList: async function () {
      const res = await allChannelListAPI();
      console.log(res);
      if (res.status === 200) {
        this.PinDaoList = res.data.data.channels;
      }
    },
  },
  created() {
    this.getList();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.van-tabs {
  position: relative;
  top: 46px;
}
</style>
