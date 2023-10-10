const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
const send = () => {
   const p = {
    from_name: document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("msg").value,
    phone_no: document.getElementById("ph").value
   }
   emailjs.send("service_4777r27","template_h4fslyv",p).then(function(res){
    document.getElementById("name").value =""
    document.getElementById("email").value=""
    document.getElementById("msg").value="",
    document.getElementById("ph").value=""
    Toastify({
      text: "successfully send",
      duration: 3000,
      destination: "",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
   
   }).catch((e)=>{
    console.log(e);
    Toastify({
      text: "send failed",
      duration: 3000,
      destination: "",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(227,25,63,1) 100%, rgba(0,212,255,1) 100%)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
   })
}
