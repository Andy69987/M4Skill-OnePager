document.addEventListener('DOMContentLoaded', function() {
    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                
                if (entry.target.classList.contains('morph-container')) {
                    entry.target.classList.add('morph-active');
                }
                if (entry.target.classList.contains('particle-container')) {
                    entry.target.classList.add('particles-active');
                }
                if (entry.target.classList.contains('glitch-container')) {
                    entry.target.classList.add('glitch-active');
                }
            }
        });
    }, observerOptions);

    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    
    const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || '0.5';
            const yPos = -(scrolled * parseFloat(speed));
            element.style.transform = `translateY(${yPos}px)`;
        });

        
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach((element, index) => {
            const yPos = Math.sin(scrolled * 0.01 + index) * 10;
            element.style.transform = `translateY(${yPos}px)`;
        });
    };

    window.addEventListener('scroll', handleScroll);

    
    const createMatrixRain = () => {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("");
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00bcd4';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const matrixInterval = setInterval(draw, 35);
        return () => clearInterval(matrixInterval);
    };

    const matrixCleanup = createMatrixRain();

    
    const createParticleSystem = () => {
        const particleContainer = document.querySelector('.particle-bg');
        if (!particleContainer) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particleContainer.appendChild(particle);
        }
    };

    createParticleSystem();

    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                element.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };

    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.counter');
                if (counter && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            }
        });
    });

    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => statsObserver.observe(item));

    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        
        const submitBtn = form.querySelector('.form__button');
        submitBtn.classList.add('glitch-submit');
        
        console.log('Form submitted:', data);
        
        
        const subject = `New message from ${data.name}`;
        const body = `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
        `;
        
    };

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    emailjs.init('83C8jjVFEHvOl_3nx'); 

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const submitBtn = form.querySelector('.form__button');
  const buttonText = form.querySelector('.button-text');

  submitBtn.disabled = true;
  buttonText.innerHTML = 'Sending... <span class="sending-spinner"></span>';

  emailjs.sendForm('service_adhbex6', 'template_7uw49kr', form)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been delivered successfully.',
        confirmButtonColor: '#00bcd4',
        background: '#0a0a0a',
        color: '#ffffff'
      });
      form.reset();
      buttonText.textContent = 'Send Message';
      submitBtn.disabled = false;

          confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong: ' + error.text,
        confirmButtonColor: '#ff6b35',
        background: '#0a0a0a',
        color: '#ffffff'
      });
      buttonText.textContent = 'Send Message';
      submitBtn.disabled = false;
    });
});

    
    const enhancedScrollAnimations = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        
        const parallaxBgs = document.querySelectorAll('.hero__background');
        parallaxBgs.forEach(bg => {
            bg.style.transform = `translateY(${rate}px)`;
        });
        
        
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            const delay = index * 0.1;
            item.style.transitionDelay = `${delay}s`;
        });
        
        
        const morphShapes = document.querySelectorAll('.morph-shape');
        morphShapes.forEach((shape, index) => {
            const speed = 0.0005 * (index + 1);
            const x = Math.sin(scrolled * speed) * 50;
            const y = Math.cos(scrolled * speed) * 30;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    };

    window.addEventListener('scroll', enhancedScrollAnimations);

    
    const handleResize = () => {
        const canvas = document.getElementById('matrix-canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    };

    window.addEventListener('resize', handleResize);

    
    const cleanup = () => {
        observer.disconnect();
        statsObserver.disconnect();
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', enhancedScrollAnimations);
        window.removeEventListener('resize', handleResize);
        if (matrixCleanup) {
            matrixCleanup();
        }
    };

    
    window.addEventListener('beforeunload', cleanup);
});

document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'trail-text';

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?~';
  const randomChar = characters[Math.floor(Math.random() * characters.length)];
  trail.textContent = randomChar;

  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 1000);
});

