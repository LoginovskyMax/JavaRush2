import { Formik, Form, Field, ErrorMessage } from 'formik';
// Для Yup
import * as Yup from 'yup';
import './index.css'


function FormikForm() {
    const schema = Yup.object().shape({
        // Поле username: строка, минимум 3 символа, обязательно
       name: Yup.string()
           .min(3, 'Минимум 3 символа')
           .max(20, 'Максимум 20 символов')
           .required('Имя пользователя обязательно'), // Обязательное поле
       email: Yup.string()
         .email('Email невалидан')
         .required('Email обязателен'),
});

    const sunmitFunc = (event:{name: string, age: number, email: string}) => {
        console.log('submit');
        console.log(event);
        fetch('someApi', {
            method: 'POST',
            body: JSON.stringify(event)
        })
    }

    return(
        <div className="test"> 
           <h2>Formic Component</h2>
           <Formik
             initialValues={{
                 name: '',
                 age: 0,
                 email: ''
             }}
             validationSchema={schema}
            //  validate={(values) => {
            //     const errors = {
            //         name: '',
            //         age: '',
            //         email: ''
            //     }

            //     if(!values.name) {
            //           errors.name = 'Name is required field'
            //     } else if(values.name.length < 2){
            //         errors.name = 'Name is too short'
            //     } else if(values.name.length > 30){
            //         errors.name = 'Name is too long'
            //     }

            //     if(!values.email) {
            //         errors.email = 'Required field'
            //     } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)){
            //           errors.email = 'Invalid email adress'
            //     }

            //     return Object.values(errors).some((val:string) => val) ? errors : {}
            //  }}
             onSubmit={sunmitFunc}
             >
                <Form className='form'>
                    <Field name='name' type='text' placeholder='name'/>
                    <ErrorMessage name='name' component='div'/>
                    
                    <Field name='age' type='number' placeholder='Your age is...'/>

                    <Field name='email' type='email' placeholder='Email' autocomplete="off"/>
                    <ErrorMessage name='email' component='div' />
                    
                    <button type='submit'>Подтвердить</button>
                </Form>
             </Formik>
         </div>
    )
}


export default FormikForm