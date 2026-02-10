// Course data with images and categories
const courses = [
    {
        id: 1,
        title: "Thesis & Research Writing",
        icon: "fas fa-file-alt",
        description: "Master academic writing, research methodology, and thesis preparation for higher education and research careers.",
        tags: ["Academic", "Writing", "Research", "Methodology"],
        image: "https://images.unsplash.com/photo-1456513080510-3449c76e9a16?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 8,000",
        duration: "6 Weeks",
        level: 1,
        rating: 4.7,
        category: "research",
        students: 45
    },
    {
        id: 2,
        title: "Statistical Analysis Software",
        icon: "fas fa-chart-bar",
        description: "Learn industry-standard tools: SPSS, R-Studio, Minitab, Excel Data Analysis ToolPak, Tableau, and Python for data analysis.",
        tags: ["SPSS", "R-Studio", "Tableau", "Python", "Excel"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 12,000",
        duration: "8 Weeks",
        level: 2,
        rating: 4.8,
        category: "tech",
        students: 68
    },
    {
        id: 3,
        title: "Programming Languages",
        icon: "fas fa-code",
        description: "Comprehensive programming courses in Python, Java, C++, JavaScript, R, MATLAB, and SQL for software development.",
        tags: ["Python", "Java", "C++", "JavaScript", "SQL", "MATLAB"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 15,000",
        duration: "10 Weeks",
        level: 3,
        rating: 4.9,
        category: "tech",
        students: 92
    },
    {
        id: 4,
        title: "Website Development",
        icon: "fas fa-laptop-code",
        description: "Full-stack web development training covering HTML, CSS, JavaScript, React, and WordPress.",
        tags: ["HTML/CSS", "JavaScript", "React", "WordPress", "Full Stack"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 14,000",
        duration: "10 Weeks",
        level: 2,
        rating: 4.8,
        category: "tech",
        students: 78
    },
    {
        id: 5,
        title: "AI and Machine Learning",
        icon: "fas fa-robot",
        description: "Cutting-edge AI and ML courses covering algorithms, neural networks, and real-world applications.",
        tags: ["AI", "Machine Learning", "Deep Learning", "Neural Networks"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 18,000",
        duration: "12 Weeks",
        level: 3,
        rating: 4.9,
        category: "tech",
        students: 55
    },
    {
        id: 6,
        title: "Data Sciences and Visualization",
        icon: "fas fa-database",
        description: "Data science fundamentals, analytics, and visualization techniques for turning data into insights.",
        tags: ["Data Science", "Analytics", "Visualization", "Big Data"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 16,000",
        duration: "10 Weeks",
        level: 2,
        rating: 4.7,
        category: "tech",
        students: 63
    },
    {
        id: 7,
        title: "AutoCAD (Civil & Electrical)",
        icon: "fas fa-drafting-compass",
        description: "Professional AutoCAD training for civil and electrical engineering design and drafting.",
        tags: ["AutoCAD", "Civil", "Electrical", "Engineering", "Design"],
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 10,000",
        duration: "8 Weeks",
        level: 2,
        rating: 4.6,
        category: "design",
        students: 47
    },
    {
        id: 8,
        title: "Matlab (Engineering & Simulation)",
        icon: "fas fa-calculator",
        description: "MATLAB programming for engineering simulations, data analysis, and mathematical modeling.",
        tags: ["MATLAB", "Simulation", "Engineering", "Modeling"],
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 9,000",
        duration: "6 Weeks",
        level: 2,
        rating: 4.7,
        category: "tech",
        students: 52
    },
    {
        id: 9,
        title: "Video Editing & Graphic Designing",
        icon: "fas fa-film",
        description: "Creative courses in video editing, graphic design, and multimedia production for digital media careers.",
        tags: ["Video Editing", "Graphic Design", "Multimedia", "Creative"],
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 11,000",
        duration: "8 Weeks",
        level: 1,
        rating: 4.6,
        category: "design",
        students: 71
    }
];

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const coursesContainer = document.querySelector('.courses-container');
const infoRequestForm = document.getElementById('infoRequestForm');
const formMessage = document.getElementById('formMessage');
const filterButtons = document.querySelectorAll('.filter-btn');
const backToTopBtn = document.getElementById('backToTop');

// Function to generate level indicator
function getLevelText(level) {
    switch(level) {
        case 1: return "Beginner";
        case 2: return "Intermediate";
        case 3: return "Advanced";
        default: return "Beginner";
    }
}

// Function to generate rating stars
function generateRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Function to get category label
function getCategoryLabel(category) {
    const labels = {
        'tech': 'Technology',
        'design': 'Design',
        'business': 'Business',
        'research': 'Research'
    };
    return labels[category] || 'General';
}

// Function to generate course cards
function generateCourseCards(filter = 'all') {
    coursesContainer.innerHTML = '';
    
    const filteredCourses = filter === 'all' 
        ? courses 
        : courses.filter(course => course.category === filter);
    
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.dataset.category = course.category;
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}" loading="lazy">
                <div class="course-overlay">
                    <span class="course-price">${course.price}</span>
                    <span class="course-category">${getCategoryLabel(course.category)}</span>
                </div>
                <div class="course-icon">
                    <i class="${course.icon}"></i>
                </div>
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-tags">
                    ${course.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="course-meta">
                    <span class="course-duration">${course.duration}</span>
                    <div class="course-rating">
                        ${generateRatingStars(course.rating)}
                        <span>${course.rating}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event to course card
        courseCard.addEventListener('click', function() {
            // In a real application, this would navigate to a course detail page
            // For now, we'll pre-select the course in the enrollment form
            const courseSelect = document.getElementById('courseInterest');
            if (courseSelect) {
                courseSelect.value = course.title;
                document.getElementById('enroll').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Add hover effect
        courseCard.style.cursor = 'pointer';
        
        coursesContainer.appendChild(courseCard);
    });
}

// Course filtering functionality
function setupCourseFiltering() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter courses
            const filter = this.dataset.filter;
            generateCourseCards(filter);
        });
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    mainNav.classList.toggle('active');
    
    // Change icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking outside
function closeMobileMenuOnClickOutside(event) {
    if (mainNav.classList.contains('active') && 
        !mainNav.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
        toggleMobileMenu();
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    toggleMobileMenu();
                }
                
                // Scroll to target
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Back to top button functionality
function setupBackToTop() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const courseInterest = document.getElementById('courseInterest').value;
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (!name || !email || !courseInterest || !phone) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
    if (!phoneRegex.test(phone)) {
        showFormMessage('Please enter a valid phone number.', 'error');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For this demo, we'll just show a success message
    const formData = {
        name,
        email,
        phone,
        courseInterest,
        message,
        timestamp: new Date().toISOString()
    };
    
    console.log('Form submitted:', formData);
    
    // Save to localStorage for demo purposes
    saveFormSubmission(formData);
    
    // Show success message
    showFormMessage(`Thank you ${name}! We have received your request for information about ${courseInterest}. Our admission team will contact you at ${phone} within 24 hours.`, 'success');
    
    // Reset form
    infoRequestForm.reset();
    
    // Scroll to form message
    formMessage.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
}

// Save form submission to localStorage (for demo)
function saveFormSubmission(data) {
    try {
        const submissions = JSON.parse(localStorage.getItem('dhtSubmissions') || '[]');
        submissions.push(data);
        localStorage.setItem('dhtSubmissions', JSON.stringify(submissions));
    } catch (error) {
        console.error('Error saving form data:', error);
    }
}

// Show form message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 8 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 8000);
}

// Animate stats counter
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item h3');
    
    statItems.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '+');
        }, 20);
    });
}

// Initialize animations on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats')) {
                    animateStats();
                }
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}

// Newsletter subscription handler
function setupNewsletterSubscription() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // In a real application, you would send this to a server
                console.log('Newsletter subscription:', email);
                
                // Show temporary message
                const originalHTML = this.innerHTML;
                this.innerHTML = '<p style="color: var(--success); font-weight: 600;">Thank you for subscribing!</p>';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    emailInput.value = '';
                }, 3000);
            }
        });
    }
}

// Add scroll effect to header
function setupHeaderScrollEffect() {
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '';
            header.style.backdropFilter = '';
        }
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize the application
function initApp() {
    // Generate course cards
    generateCourseCards();
    
    // Setup course filtering
    setupCourseFiltering();
    
    // Setup mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', closeMobileMenuOnClickOutside);
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup back to top button
    setupBackToTop();
    
    // Setup form submission
    if (infoRequestForm) {
        infoRequestForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Setup animations
    initAnimations();
    
    // Setup newsletter subscription
    setupNewsletterSubscription();
    
    // Setup header scroll effect
    setupHeaderScrollEffect();
    
    // Initialize image lazy loading
    setupImageLazyLoading();
}

// Image lazy loading
function setupImageLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Add a simple preloader for better UX
window.addEventListener('load', function() {
    // Remove preloader if exists
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
    
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
});
