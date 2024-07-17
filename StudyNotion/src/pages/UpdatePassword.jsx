import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetPassword } from "../services/operations/authAPI";
import {AiFillEyeInvisible} from "react-icons/ai";
import {AiFillEye} from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdatedPassword = () =>{
    const dispatch = useDispatch();
    const location = useLocation();
    const [formData, setFormData] = useState[{
        password: "",
        confirmPassword: "",
    }]
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {password, confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ))
    }

    const {loading} = useSelector((state) => state.auth);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token));
    }
    return (
        <div>
            {
                loading ? (
                    <div>
                        Loading...
                    </div>
                ) : (
                    <div>
                        <h1>Choose a New Password</h1>
                        <p>Almost done</p>
                        <form onSubmit={handleOnSubmit}>
                            <label>
                                <p>New Passowrd</p>
                                <input 
                                  required
                                  type={showPassword ? "text" : "password"}
                                  name='password'
                                  value={password}
                                  onChange={handleOnChange}
                                />
                                <span
                                onClick={() => setShowPassword((prev) => !prev)}>
                                    {
                                        showPassword ? <AiFillEyeInvisible fontSize={24}/> 
                                        :<AiFillEye fontSize={24}/>
                                    }
                                </span>
                            </label>

                            <label>
                                <p>Confirm Passowrd</p>
                                <input 
                                  required
                                  type={showConfirmPassword ? "text" : "password"}
                                  name='confirmPassword'
                                  value={confirmPassword}
                                  onChange={handleOnChange}
                                />
                                <span
                                onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                    {
                                        showConfirmPassword ? <AiFillEyeInvisible fontSize={24}/> 
                                        :<AiFillEye fontSize={24}/>
                                    }
                                </span>
                            </label>

                            <button type='submit'>
                                Reset Password
                            </button>

                            <div>
                            <Link to="/Login">
                                <p>Back to Log In </p>
                            </Link>
                        </div>
                        </form>
                    </div>
                )
            }

        </div>
    )
}; 

export default UpdatedPassword;