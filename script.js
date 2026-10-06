document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const service = document.getElementById("service").value;
  const area = document.getElementById("area").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hello Excellence Chimney Service,%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0AService: ${encodeURIComponent(service)}%0ACity/Area: ${encodeURIComponent(area)}%0AProblem: ${encodeURIComponent(message || "Not specified")}`;
  window.open(`https://wa.me/918130457838?text=${text}`, "_blank");
});
