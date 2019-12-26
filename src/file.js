import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import './../../styles.css'
import {deleteItemActionCreator, setLoggedActionCreator} from "../../redux/itemsReducer";

class ValidatedLoginForm extends React.Component{

    render (){
        const deleteItem = () => {
            this.props.dispatch(deleteItemActionCreator(id));
        };
        const setLogged = () => {
            this.props.dispatch(setLoggedActionCreator());
        };
        const id = this.props.id;

        if (this.props.close) {
            const close = this.props.close;
            console.log(this.props.close)

            return (
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log("Logging in", values);

                            if (
                                values.password === "11111111") {
                                console.log('props', this.props);
                                deleteItem(id);
                                close()
                            }
                            setSubmitting(false);
                        }, 500);
                    }}


                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (!EmailValidator.validate(values.email)) {
                            errors.email = "Invalid email address";
                        }

                        const passwordRegex = /(?=.*[0-9])/;
                        if (!values.password) {
                            errors.password = "Required";
                        } else if (values.password.length < 8) {
                            errors.password = "Password must be 8 characters long.";
                        } else if (!passwordRegex.test(values.password)) {
                            errors.password = "Invalid password. Must contain numbers only";
                        }
                        return errors;
                    }}

                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        password: Yup.string()
                            .required("No password provided.")
                            .min(8, "Password is too short - should be 8 chars minimum.")
                            .matches(/(?=.*[0-9])/, "Password must contain a number.")
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "error"}
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                <button type="submit" disabled={isSubmitting}>
                                    Delete
                                </button>
                            </form>
                        );
                    }}
                </Formik>
            )
        } else {
            return (
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log("Logging in", values);
                            if (
                                values.email === "iii@iii.com" &&
                                values.password === "11111111") {
                                console.log('props', this.props);
                                console.log('state is ', this.props.state)
                                setLogged();
                            }
                            setSubmitting(false);
                        }, 500);
                    }}

                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (!EmailValidator.validate(values.email)) {
                            errors.email = "Invalid email address";
                        }
                        const passwordRegex = /(?=.*[0-9])/;
                        if (!values.password) {
                            errors.password = "Required";
                        } else if (values.password.length < 8) {
                            errors.password = "Password must be 8 characters long.";
                        } else if (!passwordRegex.test(values.password)) {
                            errors.password = "Invalid password. Must contain numbers only";
                        }
                        return errors;
                    }}

                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        password: Yup.string()
                            .required("No password provided.")
                            .min(8, "Password is too short - should be 8 chars minimum.")
                            .matches(/(?=.*[0-9])/, "Password must contain a number.")
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email && touched.email && "error"}
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}
                                <label htmlFor="email">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "error"}
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                <button type="submit" disabled={isSubmitting}>
                                    Log In
                                </button>
                            </form>
                        );
                    }}
                </Formik>
            )
        }
    }
};

export default ValidatedLoginForm;
