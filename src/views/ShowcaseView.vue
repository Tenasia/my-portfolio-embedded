<template>
  <div class="showcase">
    <div class="header">
      <h1>Project Showcase</h1>
      <p>A selection of enterprise systems and mobile applications I have engineered.</p>
    </div>
    
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.image" :alt="project.title" class="project-img" />
        
        <div class="card-content">
          <h3>{{ project.title }}</h3>
          <p class="role">{{ project.role }}</p>
          <p class="desc">{{ project.description }}</p>
          
          <div class="tech-stack">
            <h5>Technologies:</h5>
            <div class="tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Enterprise HRIS (Payroll Module)',
    role: 'Enterprise Systems Developer',
    description: 'Engineered a core payroll module from the ground up, ensuring full compliance with DOLE mandates and accommodating complex client-specific rules.',
    image: 'https://placehold.co/600x400/2c3e50/ffffff?text=HRIS+Payroll',
    tags: ['ASP.NET MVC', 'C#', 'MySQL', 'Azure DevOps']
  },
  {
    id: 2,
    title: 'Warehouse Management System (WMS)',
    role: 'Enterprise Systems Developer',
    description: 'Developed critical modules for item sorting, inventory management, and stock tracking to improve operational efficiency for clients.',
    image: 'https://placehold.co/600x400/27ae60/ffffff?text=WMS+System',
    tags: ['C#', 'ASP.NET', 'Windows Server 2019', 'Bootstrap 5']
  },
  {
    id: 3,
    title: 'Heart Monitoring Mobile App',
    role: 'Thesis Project',
    description: 'Designed an app interfacing with hardware sensors to visualize real-time biometric data like heart rate using Cloud Firestore.',
    image: 'https://placehold.co/600x400/e74c3c/ffffff?text=Heart+Monitor+App',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API']
  },
  {
    id: 4,
    title: 'Student Management System',
    role: 'Freelance Lead Developer',
    description: 'Led end-to-end development from requirements gathering to deployment for North Fairview National Highschool.',
    image: 'https://placehold.co/600x400/f39c12/ffffff?text=Student+Mgmt+System',
    tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'GitHub']
  }
])
</script>

<style scoped>
.showcase { padding: 20px; max-width: 1200px; margin: 0 auto; }
.header { text-align: center; margin-bottom: 3rem; }
.header h1 { color: #2c3e50; }
.header p { color: #7f8c8d; }

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}
.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}
.project-card:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
.project-img { width: 100%; height: 200px; object-fit: cover; }
.card-content { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.role { color: #3498db; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; }
.desc { color: #555; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem; flex: 1; }
.tech-stack h5 { margin: 0 0 0.5rem 0; font-size: 0.85rem; color: #7f8c8d; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  background: #ecf0f1;
  color: #2c3e50;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
}
</style>