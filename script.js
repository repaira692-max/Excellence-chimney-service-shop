document.getElementById("year").textContent=new Date().getFullYear();

document.querySelectorAll("[data-service]").forEach(function(btn){
  btn.addEventListener("click",function(){
    var service=this.getAttribute("data-service");
    var select=document.getElementById("service");
    for(var i=0;i<select.options.length;i++){
      if(select.options[i].value===service){select.selectedIndex=i;break;}
    }
  });
});

document.getElementById("bookingForm").addEventListener("submit",function(e){
  e.preventDefault();
  var name=document.getElementById("name").value.trim();
  var phone=document.getElementById("phone").value.trim();
  var area=document.getElementById("area").value;
  var service=document.getElementById("service").value;
  var message=document.getElementById("message").value.trim() || "No additional message";
  var text="Hello Excellence Chimney Service,%0A%0A"+
    "I want to book a home service.%0A"+
    "Name: "+encodeURIComponent(name)+"%0A"+
    "Mobile: "+encodeURIComponent(phone)+"%0A"+
    "Area: "+encodeURIComponent(area)+"%0A"+
    "Service: "+encodeURIComponent(service)+"%0A"+
    "Problem: "+encodeURIComponent(message);
  window.open("https://wa.me/918130457838?text="+text,"_blank");
});