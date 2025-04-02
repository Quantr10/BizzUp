// Create a style element for our CSS
const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  
  body {
    background-color: #f5f5f5;
  }
  
  .bizup-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .bizup-logo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  .bizup-links {
    display: flex;
    gap: 30px;
  }
  
  .bizup-link {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 0.3s;
    cursor: pointer;
  }
  
  .bizup-link:hover {
    color: #000;
  }
`;
document.head.appendChild(style);

// Create the navigation bar
const navBar = document.createElement('nav');
navBar.className = 'bizup-nav';

// Create logo
const logo = document.createElement('div');
logo.className = 'bizup-logo';
logo.textContent = 'BizUp';
navBar.appendChild(logo);

// Create nav links container
const navLinks = document.createElement('div');
navLinks.className = 'bizup-links';

// Navigation items
const menuItems = ['HOME', 'DEALS', 'LOCALS', 'MY REWARDS', 'SCAN'];

// Create each link
menuItems.forEach(item => {
  const link = document.createElement('a');
  link.className = 'bizup-link';
  link.textContent = item;
  
  // Add click handler
  link.addEventListener('click', () => {
    console.log(`Navigating to: ${item}`);
    // You would replace this with actual navigation logic
    document.querySelectorAll('.bizup-link').forEach(l => l.style.color = '#555');
    link.style.color = '#000';
  });
  
  navLinks.appendChild(link);
});

navBar.appendChild(navLinks);
document.body.prepend(navBar);

// Bonus: Make it stick to top on scroll
window.addEventListener('scroll', () => {
  navBar.style.position = window.scrollY > 10 ? 'fixed' : 'static';
  navBar.style.width = '100%';
  navBar.style.top = '0';
  navBar.style.zIndex = '1000';
});