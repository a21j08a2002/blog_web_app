
// isLoggedIn =>
 export const isLoggedIn = ()=>{
    let data=localStorage.getItem("data")
    if(data!=null) return true;
    else return false;
    
 };
// doLogin => data=>set to localstorage
export  const  doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()
};
// dalogout=> remove from localStorage
   export const doLogout=(next)=>{
       localStorage.removeItem("data")
       next()
   }
// get currentUser
export const getCurrentuserDetail =()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    } else {
        return undefined;
    }
};

