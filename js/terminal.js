document.addEventListener('DOMContentLoaded', function () {
  

    
const fileSystem = {
    'about.txt': {
        type: 'file',
        content: `Hey there! I'm Andor 👋

I'm a passionate software development student who lives at the intersection of 
technology and athleticism. My journey combines the precision of coding with 
the discipline of kickboxing.

Currently learning:
- Web Development (HTML, CSS, JavaScript)
- Python Programming
- Ethical Hacking & Cybersecurity
- Kickboxing Techniques

I believe in continuous learning and pushing boundaries, both in code and in life.`
    },
    'skills': {
        type: 'directory',
        children: {
            'programming.txt': {
                type: 'file',
                content: `Programming Skills:

🔥 HTML & CSS - 70%
   Building responsive, modern web interfaces

⚡ JavaScript - 60%
   Creating interactive web applications and DOM manipulation

🐍 Python - 45%
   Scripting, automation, and learning data structures

📚 Currently Learning:
   - React.js fundamentals
   - Node.js basics
   - Database management

Next Goals:
   - Master JavaScript ES6+
   - Learn a backend framework
   - Build full-stack applications`
            },
            'security.txt': {
                type: 'file',
                content: `Cybersecurity Journey:

🛡️ Ethical Hacking - 35%
   Learning penetration testing fundamentals
   Understanding network vulnerabilities
   Practicing on legal platforms like HackTheBox

🔐 Security Basics - 30%
   Cryptography fundamentals
   Network security principles
   Social engineering awareness

Tools I'm Learning:
   - Nmap for network scanning
   - Burp Suite for web app testing
   - Wireshark for packet analysis
   - Metasploit framework basics

Always remember: With great power comes great responsibility! 🕷️`
            },
            'physical.txt': {
                type: 'file',
                content: `Physical Training:

🥊 Kickboxing - 65%
   3+ years of training
   Focus on technique and discipline
   Regular sparring sessions

Training Schedule:
   - Monday: Heavy bag work
   - Wednesday: Technique & combos
   - Friday: Sparring & conditioning
   - Weekend: Cardio & flexibility

Kickboxing has taught me:
   ✓ Mental discipline
   ✓ Focus under pressure
   ✓ Persistence through challenges
   ✓ Respect for opponents

The discipline from martial arts directly translates to coding - 
both require patience, practice, and continuous improvement!`
            }
        }
    },
    'projects': {
        type: 'directory',
        children: {
            'web-development': {
                type: 'directory',
                children: {
                    'portfolio.txt': {
                        type: 'file',
                        content: `Personal Portfolio Website

🌟 Tech Stack:
   - HTML5 & CSS3
   - Vanilla JavaScript
   - Advanced CSS animations
   - Matrix rain effect
   - Particle systems

🎯 Features:
   - Responsive design
   - Smooth scroll animations
   - Interactive contact form
   - Cyberpunk aesthetic
   - Matrix-style effects

This portfolio showcases my growing web development skills and 
passion for creating immersive user experiences!`
                    },
                    'dashboard.txt': {
                        type: 'file',
                        content: `Simple Dashboard Project

📊 Description:
   A basic dashboard built to practice HTML, CSS, and JavaScript fundamentals.

🔧 Features:
   - Clean, modern interface
   - Data visualization practice
   - Interactive elements
   - Responsive layout
   - Form handling

🎓 Learning Goals:
   - DOM manipulation
   - Event handling
   - CSS Grid & Flexbox
   - JavaScript functions

This was one of my first real projects in school - simple but taught me a lot!`
                    }
                }
            },
            'security-tools': {
                type: 'directory',
                children: {
                    'python-scripts.txt': {
                        type: 'file',
                        content: `Security Learning Scripts

🐍 Python Security Tools:

1. Port Scanner
   - Basic TCP port scanning
   - Service detection
   - Learning network fundamentals

2. Password Strength Checker
   - Checks password complexity
   - Educational tool for security awareness

3. Simple Encryption Tool
   - Caesar cipher implementation
   - Learning cryptography basics

⚠️ Ethical Use Only:
All scripts are created for educational purposes and ethical testing
on systems I own or have explicit permission to test.

"Learn to protect, not to attack!" `
                    }
                }
            }
        }
    },
    'contact.txt': {
        type: 'file',
        content: `Get in Touch! 📬

📧 Email: andor.danse@gmail.com
🌐 Portfolio: [This website you're on!]
💻 GitHub: Andy69987
🔗 LinkedIn: andor-danse-427a9a369
📱 Instagram: andordanse227

💬 Let's Connect:
Whether you want to collaborate on projects, share coding tips,
discuss cybersecurity, or even chat about kickboxing - I'm always
excited to connect with fellow learners and enthusiasts!

🤝 Open to:
- Code collaboration
- Learning partnerships  
- Project discussions
- Training buddies (kickboxing)
- Tech mentorship (both ways!)

Don't hesitate to reach out! 🚀`

    }
};

// Terminal 
let currentPath = '/';
let commandHistory = [];
let historyIndex = -1;
let isTyping = false;

// DOM 
const terminalTrigger = document.getElementById('terminal-trigger');
const terminalModal = document.getElementById('terminal-modal');
const terminalClose = document.getElementById('terminal-close');
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const inputLine = document.getElementById('terminal-input-line');
const backdrop = document.querySelector('.terminal-backdrop');


function initTerminal() {
    const introLines = [
        '> Initializing system boot sequence...',
        '> Loading kernel modules...',
        '> Establishing secure shell...',
        '> Decrypting terminal handshake...',
        '> Authenticating user: andor',
        '> Access level: root',
        '> Welcome back, Operator.'
    ];

function showHackMap() {
  const container = document.getElementById('hack-map');
  const mapDiv = document.getElementById('leaflet-map');
  const infoDiv = document.getElementById('hack-map-info');
  if (!container || !mapDiv) return;

  container.classList.remove('hidden');

  fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
      const lat = data.latitude || 0;
      const lon = data.longitude || 0;
      const city = data.city || 'Unknown';
      const country = data.country_name || 'Unknown';
      const ip = data.ip || '127.0.0.1';

      const map = L.map(mapDiv, {
        center: [lat, lon],
        zoom: 10,
        zoomControl: false,
        attributionControl: false,
        dragging: true,
        scrollWheelZoom: false,
        doubleClickZoom: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
        subdomains: 'abcd'
      }).addTo(map);

      const pulsingIcon = L.divIcon({
        className: 'hack-map-marker',
        html: '<div class="marker-pulse"></div><div class="marker-core"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      const marker = L.marker([lat, lon], { icon: pulsingIcon }).addTo(map);
      marker.bindPopup(`<div class="hack-popup">🎯 Target Acquired: ${city}, ${country}... 😈</div>`, {
        className: 'hack-popup-container',
        closeButton: false,
        autoPan: false
      }).openPopup();

      infoDiv.innerHTML = `
        <div class="info-line"><span class="info-label">IP:</span><span class="info-value">${ip}</span></div>
        <div class="info-line"><span class="info-label">LOC:</span><span class="info-value">${city}, ${country}</span></div>
      `;

      const radar = document.createElement('div');
      radar.className = 'radar-sweep';
      mapDiv.appendChild(radar);
    })
    .catch(() => {
      infoDiv.innerHTML = `<div class="info-line"><span class="info-label">LOC:</span><span class="info-value">Stealth Mode</span></div>`;
    });
}

    
    let introIndex = 0;

    function playIntroLines() {
        if (introIndex < introLines.length) {
            const line = document.createElement('div');
            line.classList.add('matrix-line');
            line.textContent = introLines[introIndex];
            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            introIndex++;
            setTimeout(playIntroLines, 300);
        } else {
            fetch("https://api.ipify.org?format=json")
                .then(res => res.json())
                .then(data => {
                    const ip = data.ip;
                    const city = data.city;
                    const country = data.country_name;

                    typeWriter(`🔧 Booting Terminal...
✔️ System initialized
✔️ User identified

📍 IP Address: ${ip}
📍 Location: ${city}, ${country}
📡 Tracking status... OK

Welcome to Andor's Terminal.
Type 'help' to begin.`);
                })
                .catch(() => {
                    typeWriter(`🔧 Booting Terminal...
✔️ System initialized
❌ Unable to fetch location

📍 IP Address: 127.0.0.1
📍 Location: Unknown
📡 Tracking status... ERROR

Welcome to Andor's Terminal.
Type 'help' to begin.`);

                    setTimeout(() => {
                        typeWriter("⚠️ Unauthorized terminal access detected...\nLaunching countermeasures...");
                    }, 4000);
                });
        }
    }

    playIntroLines();
    updatePrompt();
}



// Events
terminalTrigger.addEventListener('click', openTerminal);
terminalClose.addEventListener('click', closeTerminal);
backdrop.addEventListener('click', closeTerminal);
terminalInput.addEventListener('keydown', handleKeyDown);

function openTerminal() {
    terminalModal.classList.remove('hidden');
    document.body.classList.add('no-scroll'); 
    terminalInput.focus();
    if (terminalOutput.innerHTML === '') {
        initTerminal();
    }
}

function closeTerminal() {
    terminalModal.classList.add('hidden');
    document.body.classList.remove('no-scroll'); 
}


function handleKeyDown(e) {
    if (isTyping) return;
    
    if (e.key === 'Enter') {
        executeCommand(terminalInput.value);
        terminalInput.value = '';
        historyIndex = -1;
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0) {
            const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
            historyIndex = newIndex;
            terminalInput.value = commandHistory[newIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex !== -1) {
            const newIndex = historyIndex + 1;
            if (newIndex >= commandHistory.length) {
                historyIndex = -1;
                terminalInput.value = '';
            } else {
                historyIndex = newIndex;
                terminalInput.value = commandHistory[newIndex];
            }
        }
    }
}

function getCurrentDirectory() {
    const pathParts = currentPath.split('/').filter(Boolean);
    let current = fileSystem;
    
    for (const part of pathParts) {
        if (current[part] && current[part].type === 'directory' && current[part].children) {
            current = current[part].children;
        }
    }
    return current;
}

function addToHistory(text, useTypewriter = false) {
    if (useTypewriter) {
        typeWriter(text);
    } else {
        const line = document.createElement('div');
        line.textContent = text;
        line.style.animationDelay = `${terminalOutput.children.length * 0.05}s`;
        line.style.animation = 'fadeIn 0.3s ease-out forwards';
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
}

function typeWriter(text) {
    isTyping = true;
    inputLine.style.display = 'none';
    
    const lines = text.split('\n');
    let lineIndex = 0;
    
    function typeLine() {
        if (lineIndex < lines.length) {   
            const line = document.createElement('div');
            line.classList.add('matrix-line');
            line.textContent = lines[lineIndex];
            line.style.animation = 'fadeIn 0.1s ease-out forwards';
            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            lineIndex++;
            setTimeout(typeLine, 50);
        } else {
            addToHistory('');
            isTyping = false;
            inputLine.style.display = 'flex';
            terminalInput.focus();
        }
    }
    
    typeLine();
}

function updatePrompt() {
    const prompt = document.querySelector('.prompt');
    prompt.textContent = `┌──(andor@terminal)-[${currentPath}]`;
}

function executeCommand(command) {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    addToHistory(`┌──(andor@terminal)-[${currentPath}]`);
    addToHistory(`└─$ ${trimmedCommand}`);
    
    if (trimmedCommand !== commandHistory[commandHistory.length - 1]) {
        commandHistory.push(trimmedCommand);
    }

    const [cmd, ...args] = trimmedCommand.split(' ');

    switch (cmd.toLowerCase()) {
        case 'help':
        addToHistory('╔══════════════════════════════════════════════════════╗');
        addToHistory('║                  AVAILABLE COMMANDS                  ');
        addToHistory('╠══════════════════════════════════════════════════════╣');
        addToHistory('║  ls          - list files and directories            ');
        addToHistory('║  cd <dir>    - change directory                      ');
        addToHistory('║  cat <file>  - read file contents                    ');
        addToHistory('║  pwd         - show current directory                ');
        addToHistory('║  clear       - clear terminal                        ');
        addToHistory('║  whoami      - display user info                     ');
        addToHistory('║  tree        - show directory structure              ');
        addToHistory('║  exit        - close terminal                        ');
        addToHistory('╚══════════════════════════════════════════════════════╝');
        addToHistory('');
            break;

        case 'ls':
            const currentDir = getCurrentDirectory();
            const items = Object.keys(currentDir);
            if (items.length === 0) {
                addToHistory('📂 Directory is empty');
            } else {
                addToHistory('Directory Contents:');
                addToHistory('─────────────────────────────────────────');
                items.forEach(item => {
                    const type = currentDir[item].type === 'directory' ? '📁' : '📄';
                    const itemType = currentDir[item].type === 'directory' ? '[DIR]' : '[FILE]';
                    addToHistory(`${type} ${item.padEnd(30)} ${itemType}`);
                });
            }
            addToHistory('');
            break;

        case 'cd':
            if (!args[0]) {
                currentPath = '/';
                addToHistory('🏠 Moved to root directory (/)');
            } else if (args[0] === '..') {
                const pathParts = currentPath.split('/').filter(Boolean);
                pathParts.pop();
                currentPath = pathParts.length > 0 ? '/' + pathParts.join('/') : '/';
                addToHistory(`⬆️  Moved to ${currentPath}`);
            } else {
                const currentDir = getCurrentDirectory();
                if (currentDir[args[0]] && currentDir[args[0]].type === 'directory') {
                    currentPath = currentPath === '/' ? `/${args[0]}` : `${currentPath}/${args[0]}`;
                    addToHistory(`📂 Moved to ${currentPath}`);
                } else {
                    addToHistory(`❌ cd: ${args[0]}: No such directory`);
                }
            }
            updatePrompt();
            addToHistory('');
            break;

        case 'cat':
            if (!args[0]) {
                addToHistory('❌ cat: missing file operand');
                addToHistory('💡 Usage: cat <filename>');
            } else {
                const currentDir = getCurrentDirectory();
                if (currentDir[args[0]] && currentDir[args[0]].type === 'file') {
                    addToHistory(`📄 Reading: ${args[0]}`);
                    addToHistory('─────────────────────────────────────────');
                    addToHistory('');
                    const content = currentDir[args[0]].content || '';
                    typeWriter(content);
                    return;
                } else {
                    addToHistory(`❌ cat: ${args[0]}: No such file`);
                }
            }
            addToHistory('');
            break;

        case 'pwd':
            addToHistory(`📍 Current directory: ${currentPath}`);
            addToHistory('');
            break;

        case 'clear':
            terminalOutput.innerHTML = '';
            addToHistory('🔄 Terminal cleared! Welcome back! 🚀');
            addToHistory('');
            break;

        case 'whoami':
            addToHistory('User Information:');
            addToHistory('─────────────────────────────────────────');
            addToHistory('👤 Name: Andor');
            addToHistory('💻 Role: Software Development Student');
            addToHistory('🥊 Hobby: Kickboxer & Martial Artist');
            addToHistory('🎯 Focus: Web Dev & Cybersecurity');
            addToHistory('🚀 Status: Learning & Building Cool Stuff!');
            addToHistory('');
            break;

        case 'tree':
            addToHistory('🌳 Directory Tree Structure:');
            addToHistory('─────────────────────────────────────────');
            showTree(fileSystem, '');
            addToHistory('');
            break;

        case 'exit':
            closeTerminal();
            break;

        default:
            addToHistory(`❌ Command not found: ${cmd}`);
            addToHistory('💡 Type "help" for available commands.');
            addToHistory('');
    }
}

function showTree(dir, prefix = '') {
    const items = Object.keys(dir);
    items.forEach((item, index) => {
        const isLast = index === items.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        const icon = dir[item].type === 'directory' ? '📁' : '📄';
        addToHistory(`${prefix}${connector}${icon} ${item}`);
        
        if (dir[item].type === 'directory' && dir[item].children) {
            const newPrefix = prefix + (isLast ? '    ' : '│   ');
            showTree(dir[item].children, newPrefix);
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Terminal initialized!');
});

});