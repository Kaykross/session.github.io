
 import {btnRegister,registerMsg,registerForm} from "./dom.js";
 import {postData} from "./functions.js";
 export default btnRegister.onclick = async e =>{
    e.preventDefault();
    console.log("fired");
    const res = await postData("http://localhost:5000/register",registerForm);
    if(res.error)  {
        registerMsg.classList.remove("valid");
        registerMsg.classList.add("invalid");
        registerMsg.innerHTML = `<span class="msg">${res.error}</span> <span class="close">&times;</span>`;
    }
    if(res.success)  {
        registerMsg.classList.remove("invalid");
        registerMsg.classList.add("valid");
        registerMsg.innerHTML = `<span class="msg">${res.success}</span> <span class="close">&times;</span>`;
        registerForm.reset();
    }

    document.querySelector(".close").onclick = e =>{
        registerMsg.classList.remove("invalid");
        registerMsg.classList.remove("valid");
        registerMsg.innerHTML = ``;
    };
  
};



