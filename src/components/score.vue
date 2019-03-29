<template>
  <div class="score">
    <div>{{kazeName}}</div>
    <div>{{user.score}}</div>
    <template v-if="showAgariType">
      <div @click="agari">自摸</div>
      <div @click="agari">荣和</div>
    </template>
    <div @click="agari">和</div>
    <div>流局</div>
    <div @click="liich">立直</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import User from "@/model/user";

const kazeDict = ["東", "南", "西", "北"];

@Component
export default class Score extends Vue {
  @Prop() user!: User;
  get kazeName() {
    return kazeDict[this.user.kaze];
  }
  showAgariType: Boolean = false;
  liich() {}
  agari() {
    this.showAgariType = true;
  }
  ron(point: number) {
    this.showAgariType = false;
    this.user.score += point;
  }
  zimo(point: number) {
    this.showAgariType = false;
    this.user.score += point;
  }
  minusPoint(point: number) {
    this.user.score -= point;
  }
}
</script>


<style lang="scss" scoped>
.score {
  color: white;
}
</style>
