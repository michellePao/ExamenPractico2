<template>
  <div id="container">
    <h1>Tareas</h1>
    <form @submit.prevent="agregarTarea">
      <label for="tarea">Tarea:</label>
      <input type="text" id="tarea" v-model="nuevaTarea" required />

      <label for="estado">Estado:</label>
      <select id="estado" v-model="nuevoEstado" required>
        <option value="" disabled>Seleccione estado</option>
        <option>Pendiente</option>
        <option>En progreso</option>
        <option>Completada</option>
      </select>

      <button type="submit">Agregar</button>
    </form>

    <table v-if="tareas.length">
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarea, index) in tareas" :key="index">
          <td>{{ tarea.nombre }}</td>
          <td>{{ tarea.estado }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <br />

  <div id="autor">
    <p><b>Desarrollado por: </b></p>
  </div>
</template>

<script>
export default {
  name: "TareaList",
  data() {
    return {
      nuevaTarea: "",
      nuevoEstado: "",
      tareas: [],
    };
  },
  methods: {
    agregarTarea() {
      this.tareas.push({ nombre: this.nuevaTarea, estado: this.nuevoEstado });
      this.nuevaTarea = "";
      this.nuevoEstado = "";
    },
  },
};
</script>

<style scoped>
#container {
  margin: auto;
  width: 50%;
  padding: 50px;
  border-radius: 50px;
  background-color: lightblue;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
}
input,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100px;
  padding: 8px;
  background-color: #213555;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #120f3b;
}
table,
th,
td {
  margin: auto;
  border-collapse: collapse;
  border: 1px solid black;
  padding: 10px;
  width: 50%;
  background-color: white;
}
#autor {
  text-align: center;
  margin: auto;
  width: 20%;
  background-color: #defcf9;
  color: #213555;
  padding: 5px;
}
</style>