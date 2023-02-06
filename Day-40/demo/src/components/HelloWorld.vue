<template>
  <div class="hello">
    <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr v-for="obj of arrayObj" :key="obj.id">
                <td>{{obj.id}}</td>
                <td>{{obj.name}}</td>
                <td>{{obj.email}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
        return {
            arrayObj: [
                {
                    id: "1",
                    name: "John",
                    email: "james@gmail.com",
                },
                {
                    id: "2",
                    name: "Doe",
                    email: "doe@gmail.com"
                },
                {
                    id: "3",
                    name: "Smith",
                    email: "smith@gmail.com"
                },
                {
                    id: "4",
                    name: "James",
                    email: "james@gmail.com"
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
