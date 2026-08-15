document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const form = document.getElementById('waForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
      const service = document.getElementById('service').value;
      const location = document.getElementById('location').value.trim();
      const message = document.getElementById('message').value.trim();
      const text = `Hello Excellence Chimney Service,%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0AService: ${encodeURIComponent(service)}%0ALocation: ${encodeURIComponent(location)}%0AMessage: ${encodeURIComponent(message)}`;
      window.open('https://wa.me/918130457838?text=' + text, '_blank');
    });
  }
});