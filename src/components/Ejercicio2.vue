<template>
  <container>
    <p>{{mensaje}}</p>
    <input v-model="mensaje">
  </container>
</template>
<script>
export default {
  data: () => {
    return {
      mensaje: "Mensaje2"
    };
  }
};
</script>
