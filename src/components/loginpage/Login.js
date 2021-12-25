import { React, useState } from "react";
import RoutesNavigates from "../routesNavigates/RoutesNavigates";
import "./Login.scss";
import { validEmail, validPassword } from "./Regex";
import logo from "./assets/Logo.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    console.log(email);

    const validate = (e) => {
        e.preventDefault();
        if (!validEmail.test(email)) {
            setEmailErr(true);
        }
        if (!validPassword.test(password)) {
            setPwdError(true);
        }

        // if (email === "Lira@gmail.com" && password === "Lira@1234") {
        if (email === "Lira@gmail.com") {
            setIsUserLoggedIn(true);
        }
    };
    return (
        <>
            {isUserLoggedIn ? (
                <RoutesNavigates />
            ) : (
                <div className="login_page_container d-flex">
                    <div className="login_page_content">
                        <figure>
                            <img
                                src={logo}
                                className="App-logo"
                                alt="logo"
                                width="70px"
                            />
                        </figure>
                        <h1>LIM System</h1>
                        <form>
                            <fieldset>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">
                                        Email
                                    </label>
                                    <input
                                        className="a"
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    {emailErr && (
                                        <p className="error_msg">
                                            Unable to find your email ID, contact your administrator
                                        </p>
                                    )}
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="input_password"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {pwdError && (
                                        <p className="error_msg">
                                            Incorrect Password
                                        </p>
                                    )}
                                </div>
                                <div className="actions-btn">
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="exampleCheck1"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                        <a href="\">Forgot Password ?</a>
                                    </div>
                                </div>
                                <button
                                    onClick={validate}
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                        <h6>Powered by Shreem</h6>
                    </div>
                </div>
            )}
        </>
    );
}
