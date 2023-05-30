
function Login(){
    const login=(param:number)=>{
        param==0?  localStorage.setItem('logged-in','1'):  localStorage.setItem('logged-in','2');
    }
    
    return(
        <>
        <h1  onClick={()=>login(0)}>login punekerkues</h1>
        <h1 onClick={()=>login(1)}>Login punedhenes</h1>
        
        </>
    )
}
export default Login