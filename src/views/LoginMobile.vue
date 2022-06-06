<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      title="迅捷头条-登录"
      color="#ffffff"
    />

    <van-form validate-first @submit="subFrom">
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="mobile"
        label="手机号"
        name="mobile"
        placeholder="请输入正确的手机号"
        :rules="[
          {
            validator: asyncValidator,
            message: '请输入正确手机号',
            required: true,
          },
        ]"
      >
        <van-button
          v-if="mobile.length == 11 && showCountdown == true"
          ref="smsCode"
          slot="button"
          size="mini"
          ><van-count-down
            :time="time"
            style="color: #777"
            @finish="countDownFinish"
        /></van-button>
        <van-button
          v-else-if="mobile.length == 11"
          @click="getSmsCode"
          slot="button"
          size="mini"
          >获取验证码</van-button
        >
        <van-button v-else disabled slot="button" size="mini"
          >获取验证码</van-button
        >
      </van-field>
      <van-field
        v-model="code"
        label="验证码"
        placeholder="验证码"
        name="code"
        :rules="[
          {
            required: true,
          },
        ]"
      >
      </van-field>

      <!-- 登录button -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { sendSSM } from "@/api";
export default {
  components: {},
  data() {
    return {
      // 手机号
      mobile: "",
      // 验证码
      code: "246810",
      time: 60, //倒计时的时间  毫秒级 60秒要*10000
      showCountdown: false, //是否显示倒计时
    };
  },
  computed: {},
  methods: {
    //   验证手机号
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(val));
        }, 1000);
      });
    },
    // 表单的提交
    subFrom: function () {
      // console.log(value);
    },

    // 发送验证码
    async getSmsCode() {
      this.showCountdown = true; //这里只是简单的显示倒计时逻辑获取验证码需要具体的接口
      // 请求 短信接口
      setTimeout(() => {
        this.time -= 1;
      }, 1000);
      const res = await sendSSM(this.mobile);
      console.log(res);
      if (res.data.status === 200) {
        Toast("验证码发送成功注意查收");
      }
    },
    countDownFinish() {
      //倒计时结束后的方法
      this.showCountdown = false; //隐藏倒计时
    },

    // left 返回上级
    onClickLeft: function () {
      this.$router.back();
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
