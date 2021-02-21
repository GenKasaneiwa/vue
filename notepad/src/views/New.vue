<template>
<!-- templateに入れるのも慣例 -->
  <div class="new">
    <!-- #divに名前をつけるのも慣例 -->
    <Header>Edit Memo</Header>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="save">保存する</button>
  </div>
</template>

<style scoped>
/* このページだけに適用 scoped */
textarea {
  width: 100%;
  height: 10em;
}
button {
  border: 1px border #333;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin: 10px 0 0 0;
}
</style>

<script>
import Header from "@/components/Header.vue"

export default {
  //export defaultは決り文句 main.jsが扱えるように外に出すイメージ
  name: "new",
  components: {
    Header
  },
  data: function() {
    return {
      memoBody: ""
    }
  },
  methods: {
    save: function(){
      //こっちはメソッドのsave
      this.$store.commit("save", {
        // id: 2,
        body: this.memoBody
      });
      this.$router.push("/");
      //↑location.hrefみたいなもの
    }
  }
}
</script>