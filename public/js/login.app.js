import {btnLogin,loginMsg,loginForm} from "./dom.js";
import {postData} from "./functions.js";
export default btnLogin.onclick = async e =>{
    e.preventDefault();
    console.log("fired");
    const res = await postData("http://localhost:5000/login",loginForm);
    if(res.error)  {
        loginMsg.classList.remove("valid");
        loginMsg.classList.add("invalid");
        loginMsg.innerHTML = `<span class="msg">${res.error}</span> <span class="close">&times;</span>`;
    }
    if(res.success)  {
        loginMsg.classList.remove("invalid");
        loginMsg.classList.add("valid");
        loginMsg.innerHTML = `<span class="msg">${res.success}</span> <span class="close">&times;</span>`;
        loginForm.reset();
        location.assign(res.url);
    }
    document.querySelector(".close").onclick = e =>{
        loginMsg.classList.remove("invalid");
        loginMsg.classList.remove("valid");
        loginMsg.innerHTML = ``;
    };
};
