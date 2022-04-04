import React, { useState } from 'react';
import { useFormik } from 'formik';
import { validateYupSchema } from 'formik';
import * as Yup from 'yup';


function Formik() {

    const [text, setText] = useState('PlaceHolder');
    const validationSchema = Yup.object({
        email: Yup.string().required('Fuckin Email is Required'),
        password: Yup.string().required('Fuckin Password is Required')

    });

    const formik = useFormik({
        initialValues:{

            email:'',
            password:'',
            repassword:''

        },

        onSubmit : values => {
            //alert(JSON.stringify(values, null, 2))
            setText(values.email)
            
        },

        validationSchema


            
    })



    return ( 

       

        <>
        
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} id='email' value={formik.values.email} name='email'/>
            {formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>):null}

            <br/>

            <label htmlFor='password'>Password</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} id='password' value={formik.values.password} name='password'/>
            {formik.touched.password && formik.errors.password ? (<div className='error'>{formik.errors.password}</div>):null}


            <br/>
            <label htmlFor='repassword'>ReType Password</label>
            <input onChange={formik.handleChange} value={formik.values.repassword} id='repassword' name='repassword'/>
            <br/>

        <button className='btn btn-primary' type="submit">Submit</button>
        </form>
        
        <h1>{text}</h1>
        
        </>




     );
}

export default Formik;