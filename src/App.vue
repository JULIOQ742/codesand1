<template>
  <div>
    <!--<img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
    <Ejercicio1/>
    <Ejercicio2/>
    <Ejercicio3/>-->
    <h1>Ejercicios</h1>
    <div>
      <ol>
        <li v-for="opcion in opciones" :key="opcion.id">
          <router-link :to="opcion.a">{{opcion.texto}}</router-link>
        </li>
      </ol>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
/**/

export default {
  name: 'App',
  /*components: {
    // HelloWorld
    Ejercicio1,
    Ejercicio2,
    Ejercicio3
  },*/
  data: () => {
    return {
      opciones: [
        { id: 1, a: '/ej1', texto: 'Ejercicio 1' },
        { id: 2, a: '/ej2', texto: 'Ejercicio 2' },
        { id: 3, a: '/ej3', texto: 'Ejercicio 3' }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
