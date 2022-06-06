<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="迅捷头条-登录" color="#ffffff" />
    <!-- 表单部分 -->
    <van-form validate-first @submit="subFrom">
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="mobile"
        label="手机号"
        name="asyncValidator"
        placeholder="请输入正确的手机号"
        :rules="[
          {
            validator: asyncValidator,
            message: '请输入正确手机号',
            required: true,
          },
        ]"
      />

      <van-field
        v-model="password"
        name="pattern"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ pattern, message: '请输入合法密码', required: true }]"
      />

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>

      <div style="margin: 16px">
        <van-button round block type="info" @click="toMobileLogin"
          >手机验证码登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      // 手机号
      mobile: "",
      //密码
      password: "",

      //   密码的正则
      pattern:
        /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
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
    subFrom: function (value) {
      console.log(value);
    },

    // 采用手机号验证码登录
    toMobileLogin: function () {
      this.$router.push("/loginMobile");
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
::v-deep {
  .van-nav-bar {
    background: rgb(25, 137, 250);
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
