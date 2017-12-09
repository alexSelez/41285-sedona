    var btn = document.querySelector(".form-search-btn-title");
    var popup = document.querySelector(".form-search-content");
    var form = document.querySelector("form");
    var din = popup.querySelector("[name=date-in]");
    var dout = popup.querySelector("[name=date-out]");
    var storage = localStorage.getItem("In");
   
      btn.addEventListener("click", function(evt){

         if (popup.classList.contains("form-hide")) {
          evt.preventDefault();
          popup.classList.remove("form-hide");
          popup.classList.remove("info-error");
          popup.classList.add("form-show");
        }
        else{
          evt.preventDefault();
          popup.classList.remove("form-show");
          popup.classList.add("form-hide");
        }  
    });
    form.addEventListener("submit", function (evt) {
      if ((!din.value) || (!dout.value)){
        evt.preventDefault();
        popup.classList.remove("info-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("info-error");
      }      
    });