const postData = async(url,form)=>{
    const resp = await fetch(url,{
        method: 'POST', 
        body: new FormData(form)
    });
    const res = await resp.json();
    // console.log(res);
    return res;
};
const getData = async(url)=>{
    const resp = await fetch(url,{method: 'GET'});
    const res = await resp.json();
    console.log(res);
    return res;
};



export {postData,getData};