// DOM Elements
const header = document.getElementById("header")
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navIcon = document.getElementById("nav-icon")
const themeToggle = document.getElementById("theme-toggle")
const themeIcon = document.getElementById("theme-icon")
const contactForm = document.getElementById("contact-form")
const languageToggle = document.getElementById("language-toggle")
const currentLangSpan = document.getElementById("current-lang")

// Navigation functionality
let isMenuOpen = false

navToggle.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen
  navMenu.classList.toggle("active")

  if (isMenuOpen) {
    navIcon.className = "fas fa-times"
  } else {
    navIcon.className = "fas fa-bars"
  }
})

// Close mobile menu when clicking on nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) {
      navMenu.classList.remove("active")
      navIcon.className = "fas fa-bars"
      isMenuOpen = false
    }
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Theme toggle functionality
let isDark = false

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem("theme")
if (savedTheme) {
  isDark = savedTheme === "dark"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon()
}

themeToggle.addEventListener("click", () => {
  isDark = !isDark
  const theme = isDark ? "dark" : "light"

  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
  updateThemeIcon()
})

function updateThemeIcon() {
  if (isDark) {
    themeIcon.className = "fas fa-sun"
  } else {
    themeIcon.className = "fas fa-moon"
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact form handling
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Simple form validation
  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um email válido.")
    return
  }

  // Simulate form submission
  alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")
  contactForm.reset()
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease-out forwards"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section)
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on page load
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.innerHTML
    // Uncomment the line below to enable typing effect
    // typeWriter(heroTitle, originalText, 50);
  }
})

// Parallax effect for floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".floating-shape")

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.2
    shape.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Skills animation on scroll
const skillsSection = document.querySelector(".skills")
let skillsAnimated = false

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !skillsAnimated) {
      const skillTags = document.querySelectorAll(".skill-tag")
      skillTags.forEach((tag, index) => {
        setTimeout(() => {
          tag.style.animation = "fadeInUp 0.5s ease-out forwards"
        }, index * 100)
      })
      skillsAnimated = true
    }
  })
}, observerOptions)

if (skillsSection) {
  skillsObserver.observe(skillsSection)
}

// Project cards hover effect enhancement
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)"
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease-in-out"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Language toggle functionality
let currentLanguage = localStorage.getItem("language") || "pt"

// Translations
const translations = {
  pt: {
    // Navigation
    Início: "Início",
    Sobre: "Sobre",
    Habilidades: "Habilidades",
    Projetos: "Projetos",
    Contato: "Contato",

    // Hero Section
    "Olá, eu sou": "Olá, eu sou",
    "Estagiário Full-Stack e aspirante a Cientista de Dados, com experiência em Java SpringBoot, Python e desenvolvimento de soluções inovadoras.":
      "Estagiário Full-Stack e aspirante a Cientista de Dados, com experiência em Java SpringBoot, Python e desenvolvimento de soluções inovadoras.",
    "Ver Projetos": "Ver Projetos",
    "Download CV": "Download CV",

    // About Section
    "Sobre Mim": "Sobre Mim",
    "Sou um estudante de Análise e Desenvolvimento de Sistemas, atualmente no quarto período, com experiência em várias tecnologias. Estou sempre ansioso para aprender mais e enfrentar novos desafios.":
      "Sou um estudante de Análise e Desenvolvimento de Sistemas, atualmente no quarto período, com experiência em várias tecnologias. Estou sempre ansioso para aprender mais e enfrentar novos desafios.",
    "Trabalho com tecnologias modernas e tenho experiência em desenvolvimento web, análise de dados e automação de processos.":
      "Trabalho com tecnologias modernas e tenho experiência em desenvolvimento web, análise de dados e automação de processos.",
    "Projetos Concluídos": "Projetos Concluídos",
    "Anos de Experiência": "Anos de Experiência",
    Tecnologias: "Tecnologias",

    // Skills Section
    "Data Science & IA": "Data Science & IA",
    "Desenvolvimento Web": "Desenvolvimento Web",
    "Ferramentas & Banco de Dados": "Ferramentas & Banco de Dados",

    // Projects Section
    "Sistema Desktop para gerenciamento de atendimentos de uma clinica Psicologica":
      "Sistema Desktop para gerenciamento de atendimentos de uma clinica Psicologica",
    "Jogo de Sudoku desenvolvido em Java com interface gráfica interativa.":
      "Jogo de Sudoku desenvolvido em Java com interface gráfica interativa.",
    "Portfólio Pessoal": "Portfólio Pessoal",
    "Site pessoal desenvolvido com tecnologias modernas para apresentar projetos e habilidades.":
      "Site pessoal desenvolvido com tecnologias modernas para apresentar projetos e habilidades.",

    // Contact Section
    "Vamos conversar!": "Vamos conversar!",
    "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!":
      "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!",
    "Vitória, ES - Brasil": "Vitória, ES - Brasil",
    "Seu nome": "Seu nome",
    "Seu email": "Seu email",
    "Sua mensagem": "Sua mensagem",
    "Enviar Mensagem": "Enviar Mensagem",

    // Footer
    "&copy; 2025 Luiz Hélio. Todos os direitos reservados.": "&copy; 2025 Luiz Hélio. Todos os direitos reservados.",

    // Form messages
    "Por favor, preencha todos os campos.": "Por favor, preencha todos os campos.",
    "Por favor, insira um email válido.": "Por favor, insira um email válido.",
    "Mensagem enviada com sucesso! Entrarei em contato em breve.":
      "Mensagem enviada com sucesso! Entrarei em contato em breve.",
  },
  en: {
    // Navigation
    Início: "Home",
    Sobre: "About",
    Habilidades: "Skills",
    Projetos: "Projects",
    Contato: "Contact",

    // Hero Section
    "Olá, eu sou": "Hello, I'm",
    "Estagiário Full-Stack e aspirante a Cientista de Dados, com experiência em Java SpringBoot, Python e desenvolvimento de soluções inovadoras.":
      "Full-Stack Intern and aspiring Data Scientist, with experience in Java SpringBoot, Python and developing innovative solutions.",
    "Ver Projetos": "View Projects",
    "Download CV": "Download CV",

    // About Section
    "Sobre Mim": "About Me",
    "Sou um estudante de Análise e Desenvolvimento de Sistemas, atualmente no quarto período, com experiência em várias tecnologias. Estou sempre ansioso para aprender mais e enfrentar novos desafios.":
      "I am a Systems Analysis and Development student, currently in the fourth semester, with experience in various technologies. I am always eager to learn more and face new challenges.",
    "Trabalho com tecnologias modernas e tenho experiência em desenvolvimento web, análise de dados e automação de processos.":
      "I work with modern technologies and have experience in web development, data analysis and process automation.",
    "Projetos Concluídos": "Completed Projects",
    "Anos de Experiência": "Years of Experience",
    Tecnologias: "Technologies",

    // Skills Section
    "Data Science & IA": "Data Science & AI",
    "Desenvolvimento Web": "Web Development",
    "Ferramentas & Banco de Dados": "Tools & Database",

    // Projects Section
    "Sistema Desktop para gerenciamento de atendimentos de uma clinica Psicologica":
      "Desktop System for managing appointments at a Psychology clinic",
    "Jogo de Sudoku desenvolvido em Java com interface gráfica interativa.":
      "Sudoku game developed in Java with interactive graphical interface.",
    "Portfólio Pessoal": "Personal Portfolio",
    "Site pessoal desenvolvido com tecnologias modernas para apresentar projetos e habilidades.":
      "Personal website developed with modern technologies to showcase projects and skills.",

    // Contact Section
    "Vamos conversar!": "Let's talk!",
    "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!":
      "I'm always open to new opportunities and interesting projects. Get in touch!",
    "Vitória, ES - Brasil": "Vitória, ES - Brazil",
    "Seu nome": "Your name",
    "Seu email": "Your email",
    "Sua mensagem": "Your message",
    "Enviar Mensagem": "Send Message",

    // Footer
    "&copy; 2025 Luiz Hélio. Todos os direitos reservados.": "&copy; 2025 Luiz Hélio. All rights reserved.",

    // Form messages
    "Por favor, preencha todos os campos.": "Please fill in all fields.",
    "Por favor, insira um email válido.": "Please enter a valid email.",
    "Mensagem enviada com sucesso! Entrarei em contato em breve.": "Message sent successfully! I'll get in touch soon.",
  },
}

// Function to translate the site
function translatePage(language) {
  const elements = document.querySelectorAll("[data-pt], [data-en]")

  elements.forEach((element) => {
    const ptText = element.getAttribute("data-pt")
    const enText = element.getAttribute("data-en")

    if (language === "pt" && ptText) {
      element.textContent = ptText
    } else if (language === "en" && enText) {
      element.textContent = enText
    }
  })

  // Translate placeholders of inputs
  const inputs = document.querySelectorAll("[data-pt-placeholder], [data-en-placeholder]")
  inputs.forEach((input) => {
    const ptPlaceholder = input.getAttribute("data-pt-placeholder")
    const enPlaceholder = input.getAttribute("data-en-placeholder")

    if (language === "pt" && ptPlaceholder) {
      input.placeholder = ptPlaceholder
    } else if (language === "en" && enPlaceholder) {
      input.placeholder = enPlaceholder
    }
  })

  // Update language indicator
  currentLangSpan.textContent = language.toUpperCase()

  // Update lang attribute of HTML
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en"
}

// Event listener for language toggle button
languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt"
  translatePage(currentLanguage)
  localStorage.setItem("language", currentLanguage)
})

// Initialize saved language
document.addEventListener("DOMContentLoaded", () => {
  translatePage(currentLanguage)
})
