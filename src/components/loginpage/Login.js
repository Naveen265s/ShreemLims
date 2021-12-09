import { React, useState } from "react";
import RoutesNavigates from "../routesNavigates/RoutesNavigates";
import "./Login.scss";
import { validEmail, validPassword } from "./Regex";

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

        if (email === "Lira@gmail.com" && password === "Lira@1234") {
            setIsUserLoggedIn(true);
        }
    };
    return (
        <>
            {isUserLoggedIn ? (
                <RoutesNavigates />
            ) : (
                <div className="box_shadow">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input
                                className="a"
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailErr && (
                                <p className="error_msg">
                                    Your email is invalid
                                </p>
                            )}
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="input_password"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {pwdError && (
                                <p className="error_msg">
                                    Your password is invalid
                                </p>
                            )}
                        </div>
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                                Remind me
                            </label>
                        </div>
                        <button
                            onClick={validate}
                            type="submit"
                            class="btn btn-primary"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
