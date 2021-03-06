import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition,
} from "react-toasts";
import base64 from "react-native-base64";
import { validateName, validatePassword } from "../../validations/validations";
import css from "../../../../../project_travel_advisor/src/view/pages/Login/login.module.css"

class Register extends React.Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        userName: "",
                        password: "",
                        cpassword: "",
                    }}
                    validate={(values) => {
                        const errors = {};

                        errors.firstName =
                            validateName(values.firstName, "First Name") || null;
                        errors.lastName =
                            validateName(values.lastName, "Last Name") || null;
                        errors.userName =
                            validateName(values.userName, "User Name") || null;
                        errors.password =
                            validatePassword(values.password, "password") || null;
                        errors.cpassword =
                            validatePassword(
                                values.cpassword,
                                "cpassword",
                                values.password
                            ) || null;

                        for (var key in errors) {
                            if (errors[key] !== null) return errors;
                        }
                        return true;
                    }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);

                        if (!localStorage.getItem(values.userName)) {
                            localStorage.setItem(
                                values.userName,
                                JSON.stringify({
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    userName: values.userName,
                                    password: base64.encode(values.password),
                                    isUserLoggedIn: false,
                                })
                            );

                            ToastsStore.success("?????????????? ?????????????? ????????????.");
                            actions.resetForm();
                        } else {
                            ToastsStore.error("?????? ???????????????????????? ???? ???????????? ????????????.");
                        }
                    }}
                >
                    {(props) => (
                        <div className={css.login}>
                            <div className={css.login__inner}>
                                <h1>??????????????????????</h1>
                                <div>
                                    <div>
                                        <div>
                                            <form onSubmit={props.handleSubmit}>
                                                <div>
                                                    <label className={css.label__login}>
                                                        ?????? <span className={css.login__danger}>*</span>
                                                        <span className={css.error__message}>
                              {props.errors.firstName &&
                              props.touched.firstName &&
                              props.errors.firstName}
                            </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="??????"
                                                        name="firstName"
                                                        className={css.input__login}
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        value={props.values.firstName}
                                                    />
                                                </div>
                                                <div>
                                                    <label className={css.label__login}>
                                                        ?????????????? <span className={css.login__danger}>*</span>
                                                        <span className={css.error__message}>
                              {props.errors.lastName &&
                              props.touched.lastName &&
                              props.errors.lastName}
                            </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="??????????????"
                                                        name="lastName"
                                                        className={css.input__login}
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        value={props.values.lastName}
                                                    />
                                                </div>
                                                <div>
                                                    <label className={css.label__login}>
                                                        ?????? ???????????????????????? <span className={css.login__danger}>*</span>
                                                        <span className={css.error__message}>
                              {props.errors.userName &&
                              props.touched.userName &&
                              props.errors.userName}
                            </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className={css.input__login}
                                                        placeholder="?????? ????????????????????????"
                                                        name="userName"
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        value={props.values.userName}
                                                    />
                                                </div>

                                                <div>
                                                    <label className={css.label__login}>
                                                        ???????????? <span className={css.login__danger}>*</span>
                                                        <span className={css.error__message}>
                              {props.errors.password &&
                              props.touched.password &&
                              props.errors.password}
                            </span>
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className={css.input__login}
                                                        placeholder="***********"
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        value={props.values.password}
                                                    />
                                                </div>
                                                <div>
                                                    <label className={css.label__login}>
                                                        ?????????????????????? ????????????{" "}
                                                        <span className={css.login__danger}>*</span>
                                                        <span className={css.error__message}>
                              {props.errors.cpassword &&
                              props.touched.cpassword &&
                              props.errors.cpassword}
                            </span>
                                                    </label>
                                                    <input
                                                        className={css.input__login}
                                                        type="password"
                                                        name="cpassword"
                                                        placeholder="***********"
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        value={props.values.cpassword}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        className={css.input__submit}
                                                        type="submit"
                                                        name="signupsubmit"
                                                        value="????????????????????????????????????"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={css.overlay}>
                                <h6>?????? ???????? ???????????????</h6>
                                <p>
                                    {" "}
                                    <Link to={"/login"}><button className={css.ghost}>??????????</button></Link>{" "}
                                </p>
                            </div>
                        </div>
                    )}
                </Formik>
                <ToastsContainer
                    store={ToastsStore}
                    position={ToastsContainerPosition.TOP_RIGHT}
                />
            </div>
        );
    }
}

export default Register;
