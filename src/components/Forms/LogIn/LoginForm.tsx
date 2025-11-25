import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { classes } from "../../../utils/tailwindClasses";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import registerValidation from "../validations/registerValidation";


const LoginForm = ({setOpenModal} : {setOpenModal: (state: boolean) => void}) => {
    const [openPass, setOpenPass] = useState<boolean>(false)

    return (
        <Formik
            initialValues={{
                email: "",
                pass: "",
            }}
            onSubmit={() => console.log()}
            validationSchema={registerValidation()}
        >
            <Form>
                <h3 className="hidden text-center text-[20px] font-semibold mb-5 mdx:text-[24px] lg:text-[32px] lg:mb-8 sm:block">Log In</h3>
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
                <button onClick={() => setOpenModal(true)} className="text-bg_green cursor-pointer md:mb-2 xl:mb-4">Forgot your password?</button>
                <button type="submit" className={classes.formsBtn}>Log In</button>
            </Form>
        </Formik>
    )
}

export default LoginForm