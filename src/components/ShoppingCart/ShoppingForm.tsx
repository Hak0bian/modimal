import { Formik, Form, Field } from "formik"
import { classes } from "../../utils/tailwindClasses"
import { NavLink } from "react-router-dom"

const ShoppingForm = () => {
    return (
        <div className="w-full px-5 max-w-[600px] mx-auto">
            <div>
                <div className="flex justify-between text-[14px] pb-4 pt-8">
                    <p>Contact</p>
                    <div className="flex justify-center gap-1 xl:gap-7">
                        <p>Have an account?</p>
                        <p className="text-bg_green"><NavLink to='/login'>Log In</NavLink></p>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <input type="email" placeholder="Email" className={classes.shippingInput} />
                    </div>
                    <div className="flex gap-1 text-[12px] mt-2">
                        <input type="checkbox"/>
                        <p>Email Me With News And Offers</p>
                    </div>
                </div>
            </div>
            <Formik
                initialValues={{
                    country: "",
                    fname: "",
                    lname: "",
                    company: "",
                    address: "",
                    apartment: "",
                    code: "",
                    city: "",
                    phone: ""
                }}
                onSubmit={() => console.log()}
            >
                <Form>
                    <p className="text-[14px] pt-6 pb-4">Shipping Address</p>
                    <div className="flex">
                        <Field name='country' type='text' placeholder='Country/Region' className={classes.shippingInput} />
                    </div>
                    <div className="xs:flex gap-4">
                        <Field name='fname' type='text' placeholder='First Name' className={classes.shippingInput} />
                        <Field name='lname' type='text' placeholder='Last Name' className={classes.shippingInput} />
                    </div>
                    <div className="flex">
                        <Field name='company' type='text' placeholder='Company (Optional)' className={classes.shippingInput} />
                    </div>
                    <div className="flex">
                        <Field name='address' type='text' placeholder='Address' className={classes.shippingInput} />
                    </div>
                    <div className="flex">
                        <Field name='apartment' type='text' placeholder='Apartment, suite, Etc. (Optional)' className={classes.shippingInput} />
                    </div>
                    <div className="xs:flex gap-4">
                        <Field name='postal' type='number' placeholder='Postal Code' className={classes.shippingInput} />
                        <Field name='city' type='text' placeholder='City' className={classes.shippingInput} />
                    </div>
                    <div className="flex">
                        <Field name='phone' type='number' placeholder='Phone' className={classes.shippingInput} />
                    </div>
                </Form>
            </Formik>
            <div className="flex gap-1 text-[12px] mt-2">
                <input type="checkbox" />
                <p>Save This Information For Next Time</p>
            </div>
            <div className="py-6 flex flex-col gap-6 xs:flex-row-reverse justify-between">
                <button className="w-full h-10 bg-bg_green text-[14px] text-primary xs:w-[184px]">Continue To Shipping</button>
                <NavLink to='/cart'>
                    <button className="w-full h-10 text-[14px] text-bg_green text-center">Return To Cart</button>
                </NavLink>
            </div>
        </div>
    )
}

export default ShoppingForm