import React from 'react'
import { Formik, Field, Form, ErrorMessage} from 'formik';
import firebase from "firebase/app";
import "firebase/firestore";


export default function addUser() {
    
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
          //   validationSchema={Yup.object().shape({

          //       email: Yup.string()
          //           .email('Email is invalid')
          //           .required('Email is required'),
          //       password: Yup.string()
          //           .min(6, 'Password must be at least 6 characters')
          //           .required('Password is required'),

          //   })}
            onSubmit={fields => {
               
                Register(fields);
            }}
            render={({ errors, status, touched }) => (
              <div className="container">
    
                <Form className="LoginUI" style={{}}>
                <div>
                <h1 style={{color: "tomato" , textAlign:"center" , fontWeight:"bold" , marginTop:"-7rem"}}>CONNECTION Admin Register</h1>
                </div>
              
                    
                    <div className="form-group" style={{marginBottom:"3rem",marginTop:"2rem"}}>
                        <div style={{display: 'flex',marginLeft:160,marginRight:160, justifyContent:"space-between", marginTop:"5rem"}}>


                             <label  htmlFor="email">Username</label>
                            <Field style={{width:250,height:21}} name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                    </div>
                    <div style={{marginBottom:"3rem",marginLeft:160,marginRight:160,   justifyContent:'center',marginTop:"2rem"}} className="form-group">
                       <div style={{display: 'flex',flex:1, justifyContent:"space-between", }}>

                        <label htmlFor="password">Email</label>
                        <Field style={{width:250,height:21}} name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                       </div>
                    </div>

                    <div style={{marginBottom:"3rem",marginLeft:160,marginRight:160,   justifyContent:'center',marginTop:"2rem"}} className="form-group">
                       <div style={{display: 'flex',flex:1, justifyContent:"space-between", }}>

                        <label htmlFor="password">Password</label>
                        <Field style={{width:250,height:21}} name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                       </div>
                    </div>

                    <div style={{marginBottom:"3rem",marginLeft:160,marginRight:160,   justifyContent:'center',marginTop:"2rem"}} className="form-group">
                       <div style={{display: 'flex',flex:1, justifyContent:"space-between", }}>

                        <label htmlFor="password">Address</label>
                        <Field style={{width:250,height:21}} name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                       </div>
                    </div>

                    <div style={{marginBottom:"3rem",marginLeft:160,marginRight:160,   justifyContent:'center',marginTop:"2rem"}} className="form-group">
                       <div style={{display: 'flex',flex:1, justifyContent:"space-between", }}>

                        <label htmlFor="password">Position</label>
                        <Field style={{width:250,height:21}} name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                       </div>
                    </div>


                    
                    <div className="form-group" style={{marginLeft:"15rem"}}>
                        <button style={{width:300}}  type="submit" className= "button1">Register</button>
                    </div>
                    </Form>
                    </div>
                
            )}
        />
    )


    async function Register(value){
     const userRef = await firebase.firestore().collection('admins').where('email','==',value.email).get()
     if(userRef.empty){
       await firebase.firestore().collection('admins').add(value)
       alert ('Done!')
     }
     else{
      alert ('Already Registered!')
     }
    }

}

    
