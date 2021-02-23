<template>
  <v-container>
    <v-row>
      <v-col cols="6" sm="6" md="4" lg="3"> <div class="test">test</div></v-col>
      <v-col cols="6" sm="6" md="4" lg="3"> <div class="test">test</div></v-col>
      <v-col cols="6" sm="6" md="4" lg="3"> <div class="test">test</div></v-col>
      <v-col cols="6" sm="6" md="4" lg="3" v-if="$vuetify.breakpoint.mdOnly"> <div class="test">test</div></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  mounted() {
    console.log(this.$vuetify.breakpoint);
  },
};
</script>
<style scope>
.test {
  background: #eee;
}
</style>