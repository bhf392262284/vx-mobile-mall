<template>
  <div id="index">
    <van-tabs @change="clickTabs">
      <van-tab title="推荐">
        <div class="rap">
          <div class="Popular">
            <span>热门推荐</span>
          </div>
          <div class="list-describe">
            <img :src="imageURL" alt />
            <div class="list-head">
              <div>
                <h4>红米8A</h4>
                <p>5000mAh大电量 / 最高可选4GB+64GB版本</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>16</span>.00
              </div>
            </div>
          </div>
          <div class="list-describe">
            <img :src="imageURL" alt />
            <div class="list-head">
              <div>
                <h4>红米8A</h4>
                <p>5000mAh大电量 / 最高可选4GB+64GB版本</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>16</span>.00
              </div>
            </div>
          </div>
        </div>
        <div class="rap">
          <div class="Popular">
            <span>热门推荐</span>
          </div>
          <div class="list-describe">
            <img :src="imageURL" alt />
            <div class="list-head">
              <div>
                <h4>红米8A</h4>
                <p>5000mAh大电量 / 最高可选4GB+64GB版本</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>16</span>.00
              </div>
            </div>
          </div>
          <div class="list-describe">
            <img :src="imageURL" alt />
            <div class="list-head">
              <div>
                <h4>红米8A</h4>
                <p>5000mAh大电量 / 最高可选4GB+64GB版本</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>16</span>.00
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="手机">手机</van-tab>
      <van-tab title="电视">电视</van-tab>
      <van-tab title="笔记本">笔记本</van-tab>
      <van-tab title="家电">家电</van-tab>
      <van-tab title="居家">居家</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      imageURL: "../../static/img/ipad.jpeg"
    };
  },
  methods: {
    clickTabs(e) {
      console.log(e.mp.detail);
    }
  },
  created() {}
};
</script>

<style scoped>
#index .list-describe {
  box-sizing: border-box;
  padding: 8px 16px;
  display: flex;
}
#index .Popular {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
}
#index .Popular::after {
  content: "";
  border-bottom: 1px solid #ebedf0;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 16px;
  transform: scaleY(0.5);
}
#index .rap {
  background-color: #fff;
}
#index .list-describe img {
  height: 88px;
  width: 88px;
  background-color: red;
}
#index .list-describe .list-head {
  display: flex;
  margin-left: 6px;
  font-size: 12px;
  flex-direction: column;
  justify-content: space-between;
}
#index .list-describe .list-head p {
  padding-top: 2px;
}
#index .list-describe .list-head h4 {
  color: #323233;
}
#index .list-describe .list-head p {
  color: #646566;
}
#index .list-describe .list-head span {
  flex-shrink: 1;
}
.fsize span {
  display: inline-block;
  font-size: 16px;
}
.fsize i {
  display: inline-block;
}
</style>
