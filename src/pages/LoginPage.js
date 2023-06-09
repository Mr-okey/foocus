import React from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../icons/profile-icon.png"
import googleSignin from "../images/googlesignin.png"
import LoginPageBG from "../images/loginpageBG.png"
import { motion } from "framer-motion";

export class LoginPage extends React.Component {

    render() {
        const labelStyles = {
            display: "flex",
            flexDirection: "column",
            gap: "0.2em",
            color: "#7D7E82",
        }
        const inputStyles = {
            // width: "60%",
            color: "#7D7F56",
            background: "#E8E8F8",
            fontSize: "1.5em",
            padding: "0.3em",
            borderRadius: "5px",
            border: "1px solid #B3B3B3"
        }

        return <div id="LoginPage"
            style={{
                height: "100vh",
                overflow: "auto",
            }}
        >
            <div style={{
                maxWidth: "750px",
                marginInline: "auto",
                overflow: "hidden",
            }}>
                <div id="loginPageBG"
                    style={{
                        position: "fixed",
                        marginLeft: '-8%',
                        marginTop: '15%',
                    }}
                >
                    <img src={LoginPageBG} width={"100%"} alt="background" />
                </div>
                <div id="loginbox"
                    style={{
                        width: "70%",
                        maxWidth: "650px",
                        marginInline: "auto",
                        marginBottom: "15vh",
                        marginTop: "15vh",
                        padding: "7%",
                        background: "rgba(232, 232, 250, 0.5)",
                        boxShadow: "0px 0px 20px #959595",
                        backdropFilter: "blur(8px)",
                        borderRadius: "0.5em",
                    }}
                >
                    <span style={{ display: "flex", gap: "1em", marginInline: "auto", width: "fit-content" }}>
                        <img src={ProfileIcon} style={{ width: "2.2em" }} alt="icon" />
                        <h1 style={{ color: "#403DEE" }}>LOGIN</h1>
                    </span>
                    <div id="loginInputs" style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "70%",
                        marginInline: "auto",
                        marginTop: "2em",
                        gap: "1em"
                    }}>
                        <label style={labelStyles}>
                            Email / Username
                            <input style={inputStyles} value={"nomail@nomail.com"} type="text" />
                        </label>
                        <label style={labelStyles}>
                            Password
                            <input style={inputStyles} value={"admin"} type="password" />
                        </label>
                        <div className="loginBtn"
                            style={{
                                marginInline: "auto",
                                width: "fit-content",
                            }}>
                            <Link to={"/"} state={{ page : "/" }} 
                            onClick={() => {
                                localStorage.setItem("login", true)
                                window.location.reload()
                            }}>
                                <motion.button id="LoginBtn" style={{
                                    all: "unset",
                                    background: "#6970EF",
                                    textAlign: "center",
                                    paddingInline: "0.8em",
                                    borderRadius: "6px",
                                    color: "#E3E3F7",
                                    fontWeight: "bold",
                                    width: "fit-content",
                                    cursor: "pointer",
                                    fontSize: "1.3em",
                                    marginTop: "1em",
                                    paddingTop: "0.4em",
                                    paddingBottom: "0.4em",
                                }}
                                    whileHover={{ opacity :"0.8" }}
                                >
                                    LOGIN
                                </motion.button>
                            </Link>
                        </div>
                        <span style={{ textAlign: "center" }}>
                            ( OR )
                        </span>
                        <span>
                            <img src={googleSignin}
                                width={"100%"}
                                alt="google-signin"
                            />
                        </span>
                    </div>

                </div>
            </div>
        </div>
    }
}