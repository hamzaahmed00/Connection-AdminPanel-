import React from 'react'

export default function 
() {
    return (

        <div style={{width:'300%'}}>
        
        
                <div style={{paddingTop:'7rem'}}>
                <h1 style={{color: "tomato" , textAlign:"center" , fontWeight:"bold" , }}>CONNECTION Admin Register</h1>
                </div>

        
        <div style={{marginTop:'8rem',display:'flex',flexDirection:'row',justifyContent:"center", alignItems:'center',fontSize:25}}>
        
        <div style={{alignItems:'center', textAlign:'center',paddingRight:'1rem'}}>
        <button style={{backgroundColor:'#fc5c65',borderRadius:15 ,border:'#fc5c65',fontSize:20,paddingLeft:'2rem',paddingRight:'2rem'
        ,paddingTop: '0.5rem',paddingBottom:'0.5rem'}}>
        <a style={{textDecoration:"none" , color:'white'}} href="adduser">Add User</a>
        </button>
        </div>
       

        <div style={{alignItems:'center',textAlign:'center',paddingLeft:'1rem'}}>
        <button style={{backgroundColor:'#fc5c65',borderRadius:15,border:'#fc5c65',fontSize:20,paddingLeft:'2rem',paddingRight:'2rem'
        ,paddingTop: '0.5rem',paddingBottom:'0.5rem'}}>
        
        <a style={{textDecoration:"none" , color:'white'}} href="addAdmin">Add Admin</a>
        </button>
        </div>
       
        </div>
        
        
        </div>

        
    )
}
