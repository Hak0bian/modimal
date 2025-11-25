import * as YUP from 'yup'

const registerValidation = () => {
    return YUP.object().shape({
        firstname : YUP
            .string()
            .min(3, "Min length 3")
            .max(20, "Max length 20")
            .required("Name is required!")
            .matches(/^[A-Z][a-z]+$/, "Must start with an uppercase and contain only letters"),
        lastName : YUP
            .string()
            .min(3, "Min length 3")
            .max(20, "Max length 20")
            .required("Lastname is required!")
            .matches(/^[A-Z][a-z]+$/, "Must start with an uppercase and contain only letters"),
        email : YUP
            .string()
            .min(5, "Min length 5")
            .matches(/^[a-zA-Z0-9._%+-]+@/, "Invalid characters before @")
            .matches(/@/, "Email must contain @ symbol")
            .matches(/@[a-zA-Z0-9.-]+$/, "Invalid domain") 
            .matches(/\.[a-zA-Z]{2,4}$/, "Domain must end with a valid extension (com, net)")
            .required("Email is required!"),
        pass : YUP
            .string()
            .min(10, "Min length 10")
            .max(30, "max lenght 30")
            .required("Password is required!")
            .matches(/[A-Z]/, "Password must contain uppercase letter")
            .matches(/[a-z]/, "Password must contain lowercase letter")
            .matches(/\d/, "Password must contain number"),
    })
}

export default registerValidation