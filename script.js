// Course Data
const courses = [
    {
        id: 1,
        title: "Thesis & Research Writing",
        icon: "fas fa-file-alt",
        category: "academic",
        description: "Master academic writing, research methodology, and thesis preparation for higher education and research careers.",
        tags: ["Academic", "Writing", "Research", "Methodology"],
        price: "₹8,999"
    },
    {
        id: 2,
        title: "Statistical Analysis Software",
        icon: "fas fa-chart-bar",
        category: "tech",
        description: "Learn industry-standard tools: SPSS, R-Studio, Minitab, Excel Data Analysis ToolPak, Tableau, and Python for data analysis.",
        tags: ["SPSS", "R-Studio", "Tableau", "Python", "Excel"],
        price: "₹12,999"
    },
    {
        id: 3,
        title: "Programming Languages",
        icon: "fas fa-code",
        category: "tech",
        description: "Comprehensive programming courses in Python, Java, C++, JavaScript, R, MATLAB, and SQL for software development.",
        tags: ["Python", "Java", "C++", "JavaScript", "SQL", "MATLAB"],
        price: "₹14,999"
    },
    {
        id: 4,
        title: "Website Development",
        icon: "fas fa-laptop-code",
        category: "tech",
        description: "Full-stack web development training covering HTML, CSS, JavaScript, React, and WordPress.",
        tags: ["HTML/CSS", "JavaScript", "React", "WordPress", "Full-stack"],
        price: "₹15,999"
    },
    {
        id: 5,
        title: "AI and Machine Learning",
        icon: "fas fa-robot",
        category: "tech",
        description: "Cutting-edge AI and ML courses covering algorithms, neural networks, and real-world applications.",
        tags: ["AI", "Machine Learning", "Deep Learning", "Neural Networks"],
        price: "₹19,999"
    },
    {
        id: 6,
        title: "Data Sciences and Visualization",
        icon: "fas fa-database",
        category: "business",
        description: "Data science fundamentals, analytics, and visualization techniques for turning data into insights.",
        tags: ["Data Science", "Analytics", "Visualization", "Big Data"],
        price: "₹16,999"
    },
    {
        id: 7,
        title: "AutoCAD (Civil & Electrical)",
        icon: "fas fa-drafting-compass",
        category: "tech",
        description: "Professional AutoCAD training for civil and electrical engineering design and drafting.",
        tags: ["AutoCAD", "Civil", "Electrical", "Engineering", "Design"],
        price: "₹11,999"
    },
    {
        id: 8,
        title: "Matlab (Engineering & Simulation)",
        icon: "fas fa-calculator",
        category: "tech",
        description: "MATLAB programming for engineering simulations, data analysis, and mathematical modeling.",
        tags: ["MATLAB", "Simulation", "Engineering", "Modeling"],
        price: "₹13,999"
    },
    {
        id: 9,
        title: "Video Editing & Graphic Designing",
        icon: "fas fa-film",
        category: "creative",
        description: "Creative courses in video editing, graphic design, and multimedia production for digital media careers.",
        tags: ["Video Editing", "Graphic Design", "Multimedia", "Adobe Creative"],
        price: "₹10,999"
    }
];

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const enrollmentForm = document.getElementById('enrollmentForm');
const formMessage = document.getElementById('formMessage');
const coursesGrid = document.querySelector('.courses-grid');
const techCoursesGrid = document.getElementById('tech-courses-grid');
const businessCoursesGrid = document.getElementById('business-courses-grid');
const creativeCoursesGrid = document.getElementById('creative-courses-grid');

// Initialize Countdown Timer
function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Set countdown date (7 days from now)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every second
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Generate Course Card HTML
function generateCourseCard(course) {
    return `
        <div class="course-card" data-category="${course.category}">
            <div class="course-header">
                <div class="course-icon">
                    <i class="${course.icon}"></i>
                </div>
                <span class="course-category">${getCategoryName(course.category)}</span>
                <h3>${course.title}</h3>
            </div>
            <div class="course-description">
                <p>${course.description}</p>
                <div class="course-tags">
                    ${course.tags.map(tag => `<span class="course-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="course-footer">
                <div class="course-actions">
                    <div class="course-price">${course.price}</div>
                    <button class="course-enroll-btn" data-course="${course.title}">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Get Category Name
function getCategoryName(category) {
    const categories = {
        'academic': 'Academic',
        'tech': 'Tech & IT',
        'business': 'Business & Data',
        'creative': 'Creative'
    };
    return categories[category] || 'General';
}

// Render Courses
function renderCourses() {
    // Clear all grids
    coursesGrid.innerHTML = '';
    techCoursesGrid.innerHTML = '';
    businessCoursesGrid.innerHTML = '';
    creativeCoursesGrid.innerHTML = '';
    
    // Render all courses
    courses.forEach(course => {
        const courseCard = generateCourseCard(course);
        
        // Add to all courses grid
        coursesGrid.innerHTML += courseCard;
        
        // Add to specific category grid
        switch(course.category) {
            case 'tech':
                techCoursesGrid.innerHTML += courseCard;
                break;
            case 'business':
                businessCoursesGrid.innerHTML += courseCard;
                break;
            case 'creative':
                creativeCoursesGrid.innerHTML += courseCard;
                break;
            case 'academic':
                // Academic courses only show in "All Courses"
                break;
        }
    });
    
    // Setup course enroll buttons
    setupCourseEnrollButtons();
}

// Setup Course Enroll Buttons
function setupCourseEnrollButtons() {
    document.querySelectorAll('.course-enroll-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseName = this.getAttribute('data-course');
            const courseSelect = document.getElementById('course');
            
            // Set the course in enrollment form
            for (let option of courseSelect.options) {
                if (option.text.includes(courseName)) {
                    courseSelect.value = option.value;
                    break;
                }
            }
            
            // Scroll to enrollment form
            document.getElementById('enroll').scrollIntoView({ 
                behavior: 'smooth' 
            });
            
            // Show message
            showFormMessage(`Selected "${courseName}" in the enrollment form below!`, 'success');
        });
    });
}

// Setup Tab Navigation
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show target tab
            const targetTab = button.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    mainNav.classList.toggle('active');
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

// Close Mobile Menu on Outside Click
function closeMobileMenuOnClickOutside(event) {
    if (mainNav.classList.contains('active') && 
        !mainNav.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
        toggleMobileMenu();
    }
}

// Setup Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    toggleMobileMenu();
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Handle Enrollment Form Submission
function handleEnrollmentForm(e) {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const education = document.getElementById('education').value;
    const course = document.getElementById('course').value;
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!fullName || !email || !phone || !education || !course) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Phone validation (simple)
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        showFormMessage('Please enter a valid phone number.', 'error');
        return;
    }
    
    // Simulate form submission
    const formData = {
        fullName,
        email,
        phone,
        education,
        course,
        message,
        timestamp: new Date().toISOString()
    };
    
    console.log('Enrollment Form Data:', formData);
    
    // Show success message
    const courseName = document.querySelector(`#course option[value="${course}"]`).text;
    showFormMessage(
        `Thank you ${fullName}! Your enrollment request for "${courseName}" has been received. ` +
        `We will contact you at ${email} within 24 hours.`,
        'success'
    );
    
    // Reset form
    enrollmentForm.reset();
    
    // Scroll to message
    formMessage.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Show Form Message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// Setup Newsletter Subscription
function setupNewsletterSubscription() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Simulate subscription
                console.log('Newsletter subscription:', email);
                showFormMessage('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
            }
        });
    }
}

// Add Scroll Effect to Header
function setupHeaderScrollEffect() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            header.style.padding = '15px 0';
        }
    });
}

// Initialize the Application
function initApp() {
    // Initialize components
    renderCourses();
    initCountdown();
    setupTabNavigation();
    
    // Setup event listeners
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    document.addEventListener('click', closeMobileMenuOnClickOutside);
    setupSmoothScrolling();
    
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', handleEnrollmentForm);
    }
    
    setupNewsletterSubscription();
    setupHeaderScrollEffect();
    
    // Set current year in footer
    document.querySelector('.footer-bottom p').innerHTML = 
        document.querySelector('.footer-bottom p').innerHTML.replace('2023', new Date().getFullYear());
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Add window load event for additional initialization
window.addEventListener('load', function() {
    // Add loading animation removal
    document.body.style.opacity = '1';
    
    // Initialize any animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.course-card, .feature-card').forEach(card => {
        observer.observe(card);
    });
});
