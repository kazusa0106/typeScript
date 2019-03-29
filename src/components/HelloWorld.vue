<template>
  <div class="hello">
    <h1 @click="name">{{ msg }}</h1>
    {{url}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

function identity<T>(arg: T): T {
  return arg;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() msg!: string;
  url: string = "sdfsdfsd";

  name() {
    console.log();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
