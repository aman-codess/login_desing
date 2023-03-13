const toggle = document.querySelector("#toggle");
const pass = document.querySelector("#pass");
const namm = document.querySelector('#namm')
const sub = document.querySelector('#sub')
const success = document.querySelector('#success')
const fail = document.querySelector('#fail')

toggle.addEventListener("click", () => {
  if (toggle.innerText != "visibility_off") {
    toggle.innerText = "visibility_off";
    pass.type = "password";
  } else if (toggle.innerText != "visibility") {
    toggle.innerText = "visibility";
    pass.type = "text";
  }
});

sub.addEventListener('click',()=>{
    if(namm.value!=''&& pass.value!=''){
    success.style.opacity ='1';
    i=setTimeout(function() {
        success.style.opacity='0';
      }, 3000);
}
else {
    success.style.opacity='0';
  
    fail.style.opacity='1';
    setTimeout(function() {
        fail.style.opacity='0';
    
      }, 3000);
}
    pass.value='';
    namm.value='';
    if(toggle.innerText!='visibility_off'){
        toggle.innerText='visibility_off';
    }

})