<template>
  <div>
    <!-- <h1>在这里展示页面的详细信息</h1> -->
    <!-- 文章详情 -->
    <van-nav-bar
      title="文章详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="innerText">
      <van-cell :title="getTextObj.title" id="title" />
      <!-- <van-row>
        <van-col span="8">
          <van-image
            width="100"
            height="100"
            fit="cover"
            :src="getTextObj.aut_photo"
          />
        </van-col>
        <van-col span="8">
          <van-cell :title="getTextObj.aut_name" :label="getTextObj.pubdate" />
        </van-col>
        <van-col span="8">span: 8</van-col>
      </van-row> -->

      <van-swipe-cell>
        <van-card
          :title="getTextObj.aut_name"
          :desc="getTextObj.pubdate"
          :thumb="getTextObj.aut_photo"
        >
        </van-card>
        <div id="text">
          <div v-html="getTextObj.content" id="innerBox"></div>
        </div>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { getInnerText } from "@/api";
export default {
  components: {},
  data() {
    return {
      // 获取传递过来的id
      article_id:
        this.$route.params.id ||
        JSON.parse(window.localStorage.getItem("article_id")),
      // 获取指定的文章信息
      getTextObj: {},
    };
  },
  computed: {},
  methods: {
    // 获取文章指定详细信息
    getText: async function () {
      const res = await getInnerText(this.article_id);
      console.log(res);
      if (res.status === 200) {
        this.getTextObj = res.data.data;
      }
    },
    // 返回上一级
    onClickLeft: function () {
      this.$router.back();
    },
  },
  created() {},
  mounted() {
    this.getText();
    // console.log(this.$route.params.id);

    // 将当前页的信息存储到 local中
    window.localStorage.setItem("article_id", this.article_id);
  },
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  color: #fff;
  background: #0077ff;
}
#title {
  font-weight: 800;
}
.box {
  border-radius: 50%;
}
::v-deep {
  element.style {
    font-size: 14px;
  }
  h3 {
    font-size: 0.2rem;
    font-weight: 500;
  }
  .van-col {
    background: rgb(155, 155, 155);
  }
  .van-card__thumb img {
    border-radius: 1.22rem;
  }
  .van-card__content > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .van-card__title {
    font-weight: 600;
    font-size: 0.2rem;
  }
  .van-card__thumb {
    width: 2rem;
    height: 2rem;
  }
  .van-image {
    display: flex;
    justify-items: center;
  }
  #text {
    width: 100vw;
    font-size: 0.14rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 100%;
    }
    #innerBox {
      width: 90vw;
      margin: auto;
    }
  }
}
</style>
