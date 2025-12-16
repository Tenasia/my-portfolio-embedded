<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="image-wrapper">
        <img src="@/assets/profile-pic.jpg" alt="John Alvic Viojan" class="profile-pic" @error="usePlaceholder" />
      </div>
      
      <h1>John Alvic Viojan</h1>
      <p class="title">Software Developer & Technical Presales</p>
      
      <div class="bio">
        <h3>About Me</h3>
        <p>
          Results-driven Software Developer with 2 years of experience building and maintaining enterprise systems 
          (HRIS, WMS) and mobile applications. I combine hands-on development expertise with client-facing 
          presales experience to deliver effective technical solutions.
        </p>
        <p class="sub-bio">
          currently pursuing a BS in Computer Engineering at Polytechnic University of the Philippines.
        </p>
      </div>

      <div class="social-links">
        <a href="https://www.linkedin.com/in/johnalvicpviojan" target="_blank" class="btn linkedin">LinkedIn</a>
        <a href="mailto:alvicviojan@gmail.com" class="btn email">Email Me</a>
        <a href="#" class="btn github">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Fallback function if you haven't added the image file yet
const usePlaceholder = (e) => {
  e.target.src = "https://placehold.co/150x150/2c3e50/ffffff?text=JAV"
}
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh; /* changed to fit viewport better */
}
.profile-card {
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  max-width: 600px;
  width: 100%;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #3498db;
}
.title { 
  color: #7f8c8d; 
  font-weight: bold; 
  margin-bottom: 2rem; 
  font-size: 1.1rem;
}
.bio { 
  text-align: left; 
  margin-bottom: 2rem; 
  line-height: 1.6;
}
.sub-bio {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}
.btn {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 25px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.3s;
}
.linkedin { background: #0077b5; }
.email { background: #ea4335; }
.github { background: #333; }
.btn:hover { opacity: 0.8; }
</style>