<template>
  <div class="login-container">
    <div class="login-card">
      <div class="header">
        <h1>Welcome Back</h1>
        <p>Please enter your details to access the portfolio.</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>Username</label>
          <input 
            v-model="username" 
            type="text" 
            placeholder="admin" 
            :class="{ 'error-border': error }"
          />
        </div>

        <div class="input-group">
          <label>Password</label>
          <input 
            v-model="password" 
            type="password" 
            placeholder="1234" 
            :class="{ 'error-border': error }"
          />
        </div>

        <p v-if="error" class="error-msg">{{ error }}</p>

        <button type="submit" class="login-btn">
          <span>Login</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  // Hardcoded validation requirement
  if (username.value === 'admin' && password.value === '1234') {
    // Redirect to the profile page on success
    router.push('/portfolio/profile')
  } else {
    error.value = 'Invalid username or password. Try admin / 1234'
    // Clear password field on error
    password.value = ''
  }
}
</script>

<style scoped>
/* Full screen container with a nice gradient background */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%);
}

/* The Card - with Animation */
.login-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 400px;
  animation: slideUp 0.6s ease-out; /* Animation Requirement */
}

/* Header Styles */
.header {
  text-align: center;
  margin-bottom: 2rem;
}
.header h1 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.8rem;
}
.header p {
  color: #7f8c8d;
  margin-top: 5px;
  font-size: 0.9rem;
}

/* Form Styles */
.input-group {
  margin-bottom: 1.2rem;
}
.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #34495e;
  font-weight: 600;
  font-size: 0.9rem;
}
.input-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ecf0f1;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
  box-sizing: border-box; /* Ensures padding doesn't break width */
}
.input-group input:focus {
  border-color: #3498db;
  outline: none;
}
.input-group input.error-border {
  border-color: #e74c3c;
}

/* Error Message */
.error-msg {
  color: #e74c3c;
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 1rem;
  background: #fadbd8;
  padding: 8px;
  border-radius: 4px;
}

/* Button Styles */
.login-btn {
  width: 100%;
  padding: 12px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.login-btn:hover {
  background: #34495e;
}
.login-btn:active {
  transform: scale(0.98);
}

/* Animation Keyframes */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>