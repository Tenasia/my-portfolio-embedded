<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1>Get In Touch</h1>
      <p>
        Open for opportunities in Software Development and Technical Presales.<br>
        Direct Email: <a href="mailto:alvicviojan@gmail.com">alvicviojan@gmail.com</a>
      </p>
    </div>

    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label>Your Name</label>
        <input v-model="name" type="text" required placeholder="Name" />
      </div>
      
      <div class="form-group">
        <label>Your Email</label>
        <input v-model="email" type="email" required placeholder="email@example.com" />
      </div>
      
      <div class="form-group">
        <label>Message</label>
        <textarea v-model="message" rows="5" required placeholder="Hi John, I saw your portfolio..."></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert(`Thanks ${name.value}! This is a demo form, but you can email me at alvicviojan@gmail.com`)
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.contact-container { max-width: 600px; margin: 0 auto; padding: 20px; }
.contact-header { text-align: center; margin-bottom: 2rem; }
.contact-header h1 { margin-bottom: 0.5rem; color: #2c3e50; }
.contact-header p { color: #7f8c8d; line-height: 1.5; }
.contact-header a { color: #3498db; text-decoration: none; font-weight: bold; }

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.form-group { margin-bottom: 1.5rem; }
label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: #34495e; }
input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #dfe6e9;
  border-radius: 6px;
  font-family: inherit;
  transition: border-color 0.3s;
  box-sizing: border-box; /* Fixes padding width issues */
}
input:focus, textarea:focus { border-color: #3498db; outline: none; }
button {
  width: 100%;
  background: #2c3e50;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s;
}
button:hover { background: #34495e; }
</style>