<script>
export default {
  data() {
    return {
      fileContent: '',
      tableData: [],
      headers: ['NOMBRE', 'APELLIDO', 'EDAD', 'CIUDAD', 'TELEFONO'],
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.readFile(file);
      }
    },
    readFile(file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fileContent = reader.result;
        this.processFileContent();
      };
      reader.readAsText(file);
    },
    processFileContent() {
      const lines = this.fileContent.split('\n');
      this.tableData = lines.map((line) => line.split(','));
    },
  },
};
</script>

<template>
  <div>
    <input type="file" @change="handleFileChange" accept=".txt" />
    
    <table v-if="tableData.length > 0">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Estilos específicos del componente */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>