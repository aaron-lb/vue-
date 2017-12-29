<template>
    <!--照片详情页面-->
    <div id='tmpl'>
        <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">

        <comment :id='id'></comment>

    </div>

</template>

<script>
import comment from "../subcom/comment.vue";
import common from "../../kits/common.js";
export default {
  components: {
    comment: comment
  },
  data() {
    return {
      id: "",
      list: [
        {
          src: "https://placekitten.com/600/400",
          w: 600,
          h: 400
        }
      ]
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getInfo(this.id);
  },
  methods: {
    getInfo(id) {
      var url = common.apidomain + "/v2/movie/subject/" + id;
      this.$http.jsonp(url).then(res => {
        if (res.status != 200) {
          alert("请求失败");
          return;
        }
        this.list[0].src = res.body.images.large;
      });
    }
  }
};
</script>

<style scoped>

</style>