import React from "react";
import {Formik} from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import './../../styles.css'
import {deleteItemActionCreator, setLoggedActionCreator} from "../../redux/itemsReducer";

class ValidatedLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged : false,
            actualPassword : '',
            actualLogin : '',
        };
    }

    componentDidMount() {
        this.setState({
            actualPassword : this.props.state.actualPassword,
            actualLogin : this.props.state.actualLogin
        })
    }

    deleteItem = () => {
        this.props.dispatch(deleteItemActionCreator(this.props.index));
    };

    setLogged = () => {
        this.props.dispatch(setLoggedActionCreator());
    };

    close = this.props.close;

    render() {
        if (this.close) {
            return (
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log("Logging in", values);
                            if (values.password === this.state.actualPassword) {
                                this.deleteItem();
                                this.close()
                            }
                            setSubmitting(false);
                        }, 500);
                    }}

                    validate={values => {
                        let errors = {};
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
                                values.email === this.state.actualLogin &&
                                values.password === this.state.actualPassword) {
                                this.setLogged();
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
