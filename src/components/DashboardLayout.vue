<template>
  <div class="dashboard-layout">
    <aside class="sidebar">
      <h3>My Portfolio</h3>
      <nav>
        <RouterLink to="/portfolio/profile">Profile</RouterLink>
        <RouterLink to="/portfolio/showcase">Showcase</RouterLink>
        <RouterLink to="/portfolio/contact">Contact</RouterLink>
        <RouterLink to="/portfolio/creative">Creative</RouterLink>
        <button @click="logout" class="logout-btn">Logout</button>
      </nav>
    </aside>

    <main class="content">
      <RouterView /> 
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  // Clear any stored tokens if you had them
  router.push('/login')
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh; /* Full viewport height */
  width: 100vw;
}
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.sidebar h3 { margin-bottom: 2rem; }
.sidebar a {
  color: #bdc3c7;
  text-decoration: none;
  padding: 10px;
  display: block;
}
.sidebar a.router-link-active {
  color: white;
  background-color: #34495e;
  border-radius: 4px;
}
.content {
  flex: 1;
  padding: 40px;
  background-color: #ecf0f1;
  overflow-y: auto;
}
.logout-btn {
  margin-top: auto;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
}
</style>