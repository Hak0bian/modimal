import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { classes } from "../../../utils/tailwindClasses";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import registerValidation from "../validations/registerValidation";


const RegisterForm = ({setOpenModal} : {setOpenModal: (state: boolean) => void}) => {
    const [openPass, setOpenPass] = useState<boolean>(false)
    const handleSubmit = (_: any, { resetForm }: { resetForm: () => void }) => {
        resetForm();
        setOpenModal(true)
    };

    return (
        <Formik
            initialValues={{
                firstname: "",
                lastName: "",
                email: "",
                pass: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={registerValidation()}
        >
            <Form>
                <h3 className="hidden text-center text-[20px] font-semibold mb-5 mdx:text-[24px] lg:text-[32px] lg:mb-8 sm:block">Creat Account</h3>
                <div className="mb-2">
                    <Field name='firstname' placeholder='First Name' className={classes.registerInput} />
                    <ErrorMessage name="firstname" component="div" className={classes.errorMessage} />
                </div>
                <div className="mb-2">
                    <Field name='lastName' placeholder='Last Name' className={classes.registerInput} />
                    <ErrorMessage name="lastName" component="div" className={classes.errorMessage} />
                </div>
                <div className="mb-2">
                    <Field name='email' type='email' placeholder='Email' className={classes.registerInput} />
                    <ErrorMessage name="email" component="div" className={classes.errorMessage} />
                </div>
                <div className="relative mb-2">
                    <Field name='pass' type={openPass ? 'text' : 'password'} placeholder='Password' className={`${classes.registerInput} pr-8`} />
                    <button type="button" onClick={() => setOpenPass(!openPass)} className="absolute right-3 top-2.5 xs:top-3">
                        {
                            openPass ? <IoEyeOutline /> : <IoEyeOffOutline />
                        }
                    </button>
                    <ErrorMessage name="pass" component="div" className={classes.errorMessage} />
                </div>

                <button type="submit" className={classes.formsBtn}>Register Now</button>

                <div className="flex justify-center gap-4 xl:gap-7">
                    <p>Already have an account?</p>
                    <p className="text-bg_green"><NavLink to='/login'>Log In</NavLink></p>
                </div>
            </Form>
        </Formik>
    )
}

export default RegisterForm