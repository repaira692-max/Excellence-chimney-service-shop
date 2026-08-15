document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
function sendToWhatsApp(event){
  event.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const service=document.getElementById('service').value;
  const problem=document.getElementById('problem').value.trim();
  const text=`Hello Excellence Chimney Service,%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AProblem: ${encodeURIComponent(problem)}`;
  window.open(`https://wa.me/918130457838?text=${text}`,'_blank','noopener');
}
