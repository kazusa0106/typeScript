<template>
  <div class="home">
    <div class="desk">
      <Score v-for="user in userList" :key="user.id" :user="user"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Score from "@/components/score.vue";
import User from "@/model/user";

@Component({
  components: {
    Score
  }
})
export default class Home extends Vue {
  userList: Array<User> = [];

  components: any = {
    Score
  };

  mounted() {
    for (let i = 0; i <= 3; i++) {
      this.userList.push({
        id: i,
        score: 25000,
        kaze: i
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .desk {
    width: 700px;
    height: 700px;
    background: black;
  }
}
</style>
