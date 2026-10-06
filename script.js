const phone = "918130457838";

function setBookingValues(service, area) {
  if (service) document.getElementById("service").value = service;
  if (area) document.getElementById("area").value = area;
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => setBookingValues(link.dataset.service, ""));
});

document.querySelectorAll(".area").forEach(button => {
  button.addEventListener("click", () => setBookingValues("", button.dataset.area));
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const userPhone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const area = document.getElementById("area").value.trim();
  const problem = document.getElementById("problem").value.trim();

  const message =
`Hello Excellence Chimney Service,

I want to book a doorstep service.

Name: ${name}
Mobile: ${userPhone}
Service: ${service}
City/Area: ${area}
Problem/Requirement: ${problem || "Not specified"}

Please confirm the visit.`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
});
