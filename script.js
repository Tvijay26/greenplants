document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.nav-item.dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', e => {
      // Prevent event bubbling to body click listener
      e.stopPropagation();

      // Toggle current dropdown active class
      dropdown.classList.toggle('active');

      // Close other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) other.classList.remove('active');
      });
    });
  });

  // Close dropdowns if clicking outside
  document.body.addEventListener('click', () => {
    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
  });

  // Optional: highlight active nav item on click (remove previous)
  const navItems = document.querySelectorAll('.nav-item:not(.dropdown)');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      // Also close all dropdowns
      dropdowns.forEach(d => d.classList.remove('active'));
    });
  });
});
