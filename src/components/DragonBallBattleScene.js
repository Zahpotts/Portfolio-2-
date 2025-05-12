import { useEffect } from 'react';

export default function DragonBallBattleScene() {
  useEffect(() => {
    // Create battle scene container
    const battleScene = document.createElement('div');
    battleScene.className = 'battle-scene';
    document.body.appendChild(battleScene);
    
    // Create energy particles
    for (let i = 0; i < 20; i++) {
      createEnergyParticle(battleScene);
    }
    
    // Create energy beams
    for (let i = 0; i < 4; i++) {
      createEnergyBeam(battleScene, i);
    }
    
    // Create ground craters
    for (let i = 0; i < 3; i++) {
      createGroundCrater(battleScene, i);
    }
    
    // Create lightning effects
    for (let i = 0; i < 10; i++) {
      createLightning(battleScene, i);
    }
    
    // Create character silhouettes
    createCharacter(battleScene, 0, 'blue', 'left');
    createCharacter(battleScene, 1, 'gold', 'right');
    
    // Add transparency to main content sections for better readability
    const contentSections = document.querySelectorAll('section');
    contentSections.forEach(section => {
      if (!section.classList.contains('content-overlay')) {
        section.classList.add('content-overlay');
      }
    });
    
    // Cleanup function
    return () => {
      if (document.body.contains(battleScene)) {
        document.body.removeChild(battleScene);
      }
    };
  }, []);
  
  return null; // Rendering is done via DOM manipulation
}

// Helper functions to create battle elements
function createEnergyParticle(parent) {
  const particle = document.createElement('div');
  particle.className = 'energy-particle';
  
  // Random size between 10px and 50px
  const size = Math.random() * 40 + 10;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Random position
  resetParticlePosition(particle);
  
  parent.appendChild(particle);
  
  // Animate particle movement
  animateParticle(particle);
}

function resetParticlePosition(particle) {
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;
}

function animateParticle(particle) {
  const duration = Math.random() * 5000 + 3000; // 3-8 seconds
  const xMove = (Math.random() - 0.5) * 200;
  const yMove = (Math.random() - 0.5) * 200;
  
  // Use Web Animations API if available, otherwise skip animation
  if (typeof particle.animate === 'function') {
    const keyframes = [
      { transform: 'translate(0, 0)', opacity: particle.style.opacity },
      { transform: `translate(${xMove}px, ${yMove}px)`, opacity: '0' }
    ];
    
    const animation = particle.animate(keyframes, {
      duration: duration,
      easing: 'ease-out',
      fill: 'forwards'
    });
    
    if (animation && typeof animation.onfinish !== 'undefined') {
      animation.onfinish = () => {
        resetParticlePosition(particle);
        animateParticle(particle);
      };
    } else {
      // Fallback for browsers that don't support animation.onfinish
      setTimeout(() => {
        resetParticlePosition(particle);
        animateParticle(particle);
      }, duration);
    }
  }
}

function createEnergyBeam(parent, index) {
  const beam = document.createElement('div');
  beam.className = 'energy-beam';
  
  // Position randomly
  beam.style.left = `${Math.random() * 80}vw`;
  beam.style.top = `${Math.random() * 80}vh`;
  beam.style.setProperty('--beam-delay', index * 1.5);
  
  parent.appendChild(beam);
}

function createGroundCrater(parent, index) {
  const crater = document.createElement('div');
  crater.className = 'ground-crater';
  
  // Size and position
  const size = Math.random() * 200 + 100;
  crater.style.width = `${size}px`;
  crater.style.height = `${size * 0.4}px`;
  crater.style.left = `${Math.random() * 80 + 10}vw`;
  
  parent.appendChild(crater);
}

function createLightning(parent, index) {
  const lightning = document.createElement('div');
  lightning.className = 'lightning';
  
  // Random properties
  const height = Math.random() * 150 + 50;
  const width = Math.random() * 2 + 1;
  const angle = Math.random() * 20 - 10;
  
  lightning.style.height = `${height}px`;
  lightning.style.width = `${width}px`;
  lightning.style.left = `${Math.random() * 100}vw`;
  lightning.style.top = `${Math.random() * 50}vh`;
  lightning.style.transform = `rotate(${angle}deg)`;
  lightning.style.setProperty('--lightning-delay', Math.random() * 5);
  
  parent.appendChild(lightning);
}

function createCharacter(parent, index, auraColor, position) {
  const character = document.createElement('div');
  character.className = 'character';
  
  // Position character
  character.style.setProperty('--char-delay', index);
  character.style.left = position === 'left' ? '20vw' : '70vw';
  character.style.top = '50vh';
  
  // Create character aura
  const aura = document.createElement('div');
  aura.className = 'character-aura';
  
  // Set aura color and size
  const auraSize = 220;
  aura.style.width = `${auraSize}px`;
  aura.style.height = `${auraSize}px`;
  aura.style.left = '-60px';
  aura.style.top = '-20px';
  
  // Set aura color
  const colorMap = {
    blue: 'rgba(30, 144, 255, 0.6)',
    gold: 'rgba(255, 215, 0, 0.6)',
    red: 'rgba(255, 0, 0, 0.6)'
  };
  
  aura.style.boxShadow = `0 0 30px 15px ${colorMap[auraColor] || 'rgba(255, 255, 255, 0.6)'}`;
  
  character.appendChild(aura);
  parent.appendChild(character);
}