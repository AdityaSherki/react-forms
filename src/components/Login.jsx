import { useFormik } from "formik";
import { loginSchema } from "../schemas/validationSchema";
import React from 'react'



const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    const { username, password } = values;
    console.log(email);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();

};

export default function Login() {
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit,
    });

    // console.log(errors);

    return (
        <div className="formConatiner">
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter Username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.username && touched.username ? "input-error" : ""}
                />
                {errors.username && touched.username && <p className="error">{errors.username}</p>}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? "input-error" : ""}
                />
                {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                )}
                <button disabled={isSubmitting} type="submit">
                    Sign In
                </button>
            </form>
        </div>
    );
}

