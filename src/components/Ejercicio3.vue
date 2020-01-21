<template>
  <ol>
    <todoitem v-for="item in lista" v-bind:todo="item" v-bind:key="item.id"></todoitem>
  </ol>
</template>
<script>
import todoitem from "./todoitem";
export default {
  components: {
    todoitem
  },
  data: () => {
    return {
      lista: [{ id: 1, text: "uno" }, { id: 2, text: "dos" }]
    };
  }
};
</script>
