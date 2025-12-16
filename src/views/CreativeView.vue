<template>
  <div class="creative">
    <div class="hero">
      <h1>Creative Lab</h1>
      <p>Beyond enterprise systems, I explore game dev and rapid prototyping.</p>
    </div>

    <div class="creative-grid">
      <div class="creative-item featured">
        <div class="icon">🌧️</div>
        <div class="content">
          <h2>Rainfall (Visual Novel)</h2>
          <p class="subtitle">Lead Developer & Project Manager | Built with Ren'Py & Python</p>
          <p>
            A personal passion project where I led the development of a complete visual novel. 
            This project allowed me to explore narrative design combined with Python scripting[cite: 47].
          </p>
        </div>
      </div>

      <div class="creative-item">
        <div class="icon">⚡</div>
        <div class="content">
          <h2>The "1-Week" POS Challenge</h2>
          <p class="subtitle">Mobile Dev | Flutter & Dart</p>
          <p>
            Tasked with a confidential project for a Rice Company, I learned Dart from scratch and 
            delivered a fully functional Point of Sale (POS) mobile prototype in just one week[cite: 40].
          </p>
        </div>
      </div>
      
       <div class="creative-item">
        <div class="icon">🖥️</div>
        <div class="content">
          <h2>Emergency Response GUI</h2>
          <p class="subtitle">Desktop App | Python & Tkinter</p>
          <p>
             Designed a Computer Assisted Radio Emergency system interface, focusing on user experience 
             in high-pressure situations[cite: 42].
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.creative { max-width: 900px; margin: 0 auto; padding: 20px; }
.hero { text-align: center; margin-bottom: 3rem; }
.hero h1 { font-size: 2.5rem; color: #2c3e50; margin-bottom: 0.5rem; }
.hero p { color: #7f8c8d; font-size: 1.1rem; }

.creative-grid { display: flex; flex-direction: column; gap: 2rem; }

.creative-item {
  display: flex;
  align-items: flex-start;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}
.creative-item:hover { transform: translateX(10px); }
.creative-item.featured { border-left: 5px solid #9b59b6; }

.icon { font-size: 3rem; margin-right: 1.5rem; padding-top: 5px; }
.content h2 { margin: 0; color: #2c3e50; }
.subtitle { color: #9b59b6; font-weight: bold; margin: 5px 0 15px 0; font-size: 0.9rem; text-transform: uppercase; }
.content p { line-height: 1.6; color: #555; }
</style>