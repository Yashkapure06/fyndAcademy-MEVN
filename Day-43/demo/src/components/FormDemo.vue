<!-- <template>
    <div>
        <input type="text" placeholder="enter your name" v-model="loginDetails.un"><br>
        <input type="text" placeholder="enter your password" v-model="loginDetails.pw">
        <button v-on:click="getLogin()">Login</button>

    </div>
</template>

<script>
export default
{
    name:'FormDemo',
    data(){
        return{
            loginDetails:{
            un :"",
            pw : ""
            }
        }

        // return{
        //     un :"",
        //     pw : ""
        // }
    },
    methods:{
        getLogin(){
            console.log(this.loginDetails.un, this.loginDetails.pw);
            // console.log(this.un, this.pw);
        }
    }
}
</script>

<style>

</style> -->


<template>
    <div>
        <h1>Form Validation in VUE</h1>
        <!-- {{JSON.stringigy()}} -->
        <!-- create a form validation using v-model -->
        <!-- v-model is a directive -->
        <!-- v-model is a two way binding -->
        <!-- v-model is a shortcut for v-bind:value and v-on:input -->
        <form>
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" />
                <br />
                <span v-if="submitClicked && !username" style="color: red">Username is required.</span>
            </div>
            <br />
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" />
                <br />
                <span v-if="submitClicked && !password" style="color: red">Password is required.</span>
            </div>
            <br />
            <div>
                <label for="gender">Gender:</label>
                <select id="gender" v-model="gender" required>
                    <option disabled value="">Please select a gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <br />
                <span v-if="submitClicked && !gender" style="color: red">Gender is required.</span>
            </div>
            <br />
            <div>
                <label for="age">Age:</label>
                <input type="number" id="age" v-model="age" />
                <br />
                <span v-if="submitClicked && !age" style="color: red">Age is required.</span>
            </div>
            <br />
            <button v-on:click="submitForm">Submit</button>
        </form>

    </div>

</template>

<script>
export default {
    name: 'FormDemo',
    data() {
        return {
            username: "",
            password: "",
            gender: "",
            age: "",
            submitClicked: false
        };
    },
    methods: {
        submitForm() {
            this.submitClicked = true
        }
    }

}
</script>