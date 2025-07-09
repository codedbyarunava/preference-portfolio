// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const heroImage = document.querySelector(".hero-image");
    const img = heroImage.querySelector("img");

    // Set container size
    heroImage.style.width = "400px";
    heroImage.style.height = "500px";
    heroImage.style.overflow = "hidden";
    heroImage.style.borderRadius = "12px";

    // Set image fit and position
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.objectPosition = "top";
    img.style.display = "block";
  });
  // Select the email link
const emailLink = document.querySelector('.hero-content a');

// Add a click event listener
emailLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default behavior (optional)
  console.log('Email link clicked: arunava@portfoliohub.com');
  // Redirect to the mail client
  window.location.href = emailLink.href;
});

// Add a hover effect (optional)
emailLink.addEventListener('mouseover', () => {
  emailLink.style.color = '#ff6a00'; // Change color on hover
  emailLink.style.textDecoration = 'underline'; // Add underline on hover
});

emailLink.addEventListener('mouseout', () => {
  emailLink.style.color = '#6e44ff'; // Revert to the original color
  emailLink.style.textDecoration = 'none'; // Remove underline
});
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const feedback = document.getElementById("feedback");
    feedback.textContent = "Sending...";
  
    setTimeout(() => {
      feedback.textContent = "Your message has been sent successfully!";
      feedback.style.color = "green";
      document.getElementById("contactForm").reset();
    }, 2000);
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Sample data for analytics
    const analyticsData = {
      visitors: 2450,
      pageViews: 7890,
      signups: 345,
    };
  
    // Function to animate numbers
    function animateCount(id, targetNumber, duration = 2000) {
      const element = document.getElementById(id);
      const increment = targetNumber / (duration / 16); // Approx. 60fps
      let currentCount = 0;
  
      const counter = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetNumber) {
          currentCount = targetNumber;
          clearInterval(counter);
        }
        element.textContent = Math.floor(currentCount);
      }, 16); // 16ms for smooth animation
    }
  
    // Animate the analytics data
    animateCount("visitors-count", analyticsData.visitors);
    animateCount("page-views-count", analyticsData.pageViews);
    animateCount("signups-count", analyticsData.signups);
  });
  // Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Toggle Menu for Mobile Devices
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active"); // Show/hide the menu
      mobileMenuToggle.classList.toggle("open"); // Change menu icon
    });
  }

  // Smooth Scrolling for Internal Links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor click behavior
      const targetId = link.getAttribute("href").substring(1); // Get target ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth", // Smooth scrolling effect
        });
      }
    });
  });

  // Analytics Data Animation (if present)
  const animateCount = (id, targetNumber, duration = 2000) => {
    const element = document.getElementById(id);
    if (!element) return;

    let currentNumber = 0;
    const increment = targetNumber / (duration / 16); // Approx. 60fps

    const counter = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        element.textContent = targetNumber.toLocaleString(); // Format number
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(currentNumber).toLocaleString();
      }
    }, 16);
  };

  // Example Analytics Data
  animateCount("visitors-count", 2450);
  animateCount("page-views-count", 7890);
  animateCount("signups-count", 345);

  // Back to Top Button
  const backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// --- Next-level Analytics Charts ---
document.addEventListener('DOMContentLoaded', function() {
  if (window.Chart) {
    // Traffic Growth (Area Chart)
    new Chart(document.getElementById('trafficChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Visits',
          data: [120, 180, 250, 320, 400, 480, 600, 750],
          fill: true,
          backgroundColor: 'rgba(110,68,255,0.12)',
          borderColor: '#6e44ff',
          tension: 0.4,
          pointRadius: 3,
          pointBackgroundColor: '#6e44ff',
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#fff' }, grid: { display: false } },
          y: { ticks: { color: '#fff' }, grid: { color: '#6e44ff22' } }
        }
      }
    });

    // User Demographics (Pie Chart)
    new Chart(document.getElementById('demographicsChart'), {
      type: 'pie',
      data: {
        labels: ['18-24', '25-34', '35-44', '45+'],
        datasets: [{
          data: [35, 40, 15, 10],
          backgroundColor: ['#6e44ff', '#0a84ff', '#8a6eff', '#23234a'],
          borderWidth: 0
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#fff' } } }
      }
    });

    // Top Countries (Horizontal Bar Chart)
    new Chart(document.getElementById('countriesChart'), {
      type: 'bar',
      data: {
        labels: ['India', 'USA', 'UK', 'Germany', 'Canada'],
        datasets: [{
          label: 'Users',
          data: [320, 210, 180, 120, 90],
          backgroundColor: '#0a84ff',
          borderRadius: 8
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#fff' }, grid: { color: '#6e44ff22' } },
          y: { ticks: { color: '#fff' }, grid: { display: false } }
        }
      }
    });

    // Feature Adoption (Polar Area Chart)
    new Chart(document.getElementById('adoptionChart'), {
      type: 'polarArea',
      data: {
        labels: ['Login', 'Dashboard', 'API', 'Templates', 'Contact'],
        datasets: [{
          data: [80, 65, 90, 50, 40],
          backgroundColor: [
            'rgba(110,68,255,0.7)',
            'rgba(10,132,255,0.7)',
            'rgba(138,110,255,0.7)',
            'rgba(44,199,160,0.7)',
            'rgba(35,35,74,0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#fff' } } },
        scales: { r: { angleLines: { color: '#6e44ff22' }, grid: { color: '#6e44ff22' }, pointLabels: { color: '#fff' }, ticks: { color: '#fff' } } }
      }
    });

    // Monthly Growth (Bar Chart for growthChart)
    if (window.Chart && document.getElementById('growthChart')) {
      new Chart(document.getElementById('growthChart').getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Growth',
            data: [10, 20, 15, 30, 25],
            backgroundColor: 'rgba(110,68,255,0.5)',
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: '#a685e2' }, grid: { display: false } },
            y: { ticks: { color: '#a685e2' }, grid: { color: '#6e44ff22' } }
          }
        }
      });
    }
  }
});

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const navButtons = document.getElementById('navButtons');
  navLinks.classList.toggle('open');
  navButtons.classList.toggle('open');
}
function toggleMenu(menu) {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}
// Add the following JavaScript to your script.js file

const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.querySelector('.nav-links-container');

if (hamburger && navLinksContainer) {
  hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });
}