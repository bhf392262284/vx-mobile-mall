<template>
  <div class="details">
    <div class="head">
      <h3>{{detailsPage.title}}</h3>
    </div>
    <div class="content" v-html="detailsPage.content"></div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      detailsPage: {}
    };
  },
  onLoad(options) {
    let id = options.id;
    this.$http("topic/" + id).then(res => {
      this.detailsPage = res.data.article;
    });
  }
};
</script>

<style scoped>
.details .head {
  background-color: #f8f8f8;
}
.details .head h3 {
  padding: 5px;
  margin: 18px 0;
  font-size: 18.72px;
}
.content {
  width: 100%;
  font-size: 14px;
}
.content img {
  width: 100%;
}
</style>
