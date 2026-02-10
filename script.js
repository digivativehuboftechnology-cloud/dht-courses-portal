// Course data with images and additional details
const courses = [
    {
        title: "Thesis & Research Writing",
        icon: "fas fa-file-alt",
        description: "Master academic writing, research methodology, and thesis preparation for higher education and research careers.",
        tags: ["Academic", "Writing", "Research"],
        image: "https://images.unsplash.com/photo-1456513080510-3449c76e9a16?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 8,000",
        duration: "6 Weeks",
        level: 1,
        rating: 4.7
    },
    {
        title: "Statistical Analysis Software",
        icon: "fas fa-chart-bar",
        description: "Learn industry-standard tools: SPSS, R-Studio, Minitab, Excel Data Analysis ToolPak, Tableau, and Python for data analysis.",
        tags: ["SPSS", "R-Studio", "Tableau", "Python"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 12,000",
        duration: "8 Weeks",
        level: 2,
        rating: 4.8
    },
    {
        title: "Programming Languages",
        icon: "fas fa-code",
        description: "Comprehensive programming courses in Python, Java, C++, JavaScript, R, MATLAB, and SQL for software development.",
        tags: ["Python", "Java", "C++", "JavaScript", "SQL"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 15,000",
        duration: "10 Weeks",
        level: 3,
        rating: 4.9
    },
    {
        title: "Website Development",
        icon: "fas fa-laptop-code",
        description: "Full-stack web development training covering HTML, CSS, JavaScript, React, and WordPress.",
        tags: ["HTML/CSS", "JavaScript", "React", "WordPress"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 14,000",
        duration: "10 Weeks",
        level: 2,
        rating: 4.8
    },
    {
        title: "AI and Machine Learning",
        icon: "fas fa-robot",
        description: "Cutting-edge AI and ML courses covering algorithms, neural networks, and real-world applications.",
        tags: ["AI", "Machine Learning", "Deep Learning"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 18,000",
        duration: "12 Weeks",
        level: 3,
        rating: 4.9
    },
    {
        title: "Data Sciences and Visualization",
        icon: "fas fa-database",
        description: "Data science fundamentals, analytics, and visualization techniques for turning data into insights.",
        tags: ["Data Science", "Analytics", "Visualization"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 16,000",
        duration: "10 Weeks",
        level: 2,
        rating: 4.7
    },
    {
        title: "AutoCAD (Civil & Electrical)",
        icon: "fas fa-drafting-compass",
        description: "Professional AutoCAD training for civil and electrical engineering design and drafting.",
        tags: ["AutoCAD", "Civil", "Electrical", "Engineering"],
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 10,000",
        duration: "8 Weeks",
        level: 2,
        rating: 4.6
    },
    {
        title: "Matlab (Engineering & Simulation)",
        icon: "fas fa-calculator",
        description: "MATLAB programming for engineering simulations, data analysis, and mathematical modeling.",
        tags: ["MATLAB", "Simulation", "Engineering"],
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 9,000",
        duration: "6 Weeks",
        level: 2,
        rating: 4.7
    },
    {
        title: "Video Editing & Graphic Designing",
        icon: "fas fa-film",
        description: "Creative courses in video editing, graphic design, and multimedia production for digital media careers.",
        tags: ["Video Editing", "Graphic Design", "Multimedia"],
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: "PKR 11,000",
        duration: "8 Weeks",
        level: 1,
        rating: 4.6
    }
];

// Function to generate level indicator dots
function generateLevelDots(level) {
    let dots = '';
    for (let i = 1; i <= 3; i++) {
        dots += `<span class="level-dot ${i <= level ? 'active' : ''}"></span>`;
    }
    return dots;
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

// Function to generate course cards with images
function generateCourseCards() {
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        // Create the course card with image layout
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}" loading="lazy">
                <div class="course-overlay">
                    <span class="course-price">${course.price}</span>
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
                    <div class="course-level">
                        <span>Level:</span>
                        ${generateLevelDots(course.level)}
                    </div>
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
                document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Add hover effect
        courseCard.style.cursor = 'pointer';
        
        coursesContainer.appendChild(courseCard);
    });
}

// Alternative: Function to generate course cards without images (simple version)
function generateCourseCardsSimple() {
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card course-card-alt';
        
        courseCard.innerHTML = `
            <div class="course-icon-alt">
                <i class="${course.icon}"></i>
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-tags">
                    ${course.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="course-meta">
                    <span class="course-duration">${course.duration}</span>
                    <span class="course-price">${course.price}</span>
                </div>
            </div>
        `;
        
        coursesContainer.appendChild(courseCard);
    });
}

// The rest of the JavaScript remains the same...
// Only update the initApp function to use the new course card generator

function initApp() {
    // Generate course cards with images
    generateCourseCards(); // Use this for image version
    // generateCourseCardsSimple(); // Use this for simple version without images
    
    // Rest of the initialization code remains the same...
}
