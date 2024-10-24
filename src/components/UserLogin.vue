<template>
  <div class="login-box">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="input-box">
        <label>Username</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="input-box">
        <label>Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      const validUsername = 'TIP';
      const validPassword = 'Manila';

      if (this.username === validUsername && this.password === validPassword) {
        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', true);
        this.$router.push('/dashboard'); // Redirect to dashboard
      } else {
        this.error = 'Invalid username or password';
        this.username = ''; // Clear username field
        this.password = ''; // Clear password field
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles for the login form */
.login-box {
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.input-box {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #eb5424;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

button:hover {
  background-color: #ffffff;
  color: #eb5424;
  border: 1px solid #eb5424;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
