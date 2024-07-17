import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
import { useDispatch } from 'react-redux';

const ForgotPassword = () =>{
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }
    return(
        <div className='text-white'>
            {
                loading ? (
                    <div> ..Loading </div>
                ) : (
                    <div>
                        <h1>
                            {
                                !emailSent ? "Reset Password" : "Check Your Email"
                            }
                        </h1>
                        <p>
                            {
                                !emailSent 
                                ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" :
                                `We have sent the reset email to ${email}`
                            }
                        </p>
                        <form onSubmit={handleOnSubmit}>
                            {
                                !emailSent && (
                                    <label>
                                        <p>Email Address</p>
                                        <input
                                            required
                                            type='email'
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Enter your Email Password'
                                        />
                                    </label>
                                )
                            }
                            <button 
                            type='submit'>
                                {
                                    !emailSent ? "Reset Password" : "Resend Email"
                                }
                            </button>
                        </form>

                        <div>
                            <Link to="/Login">
                                <p>Back to Log In </p>
                            </Link>
                        </div>
                    </div>
                )
            }

        </div>
    )
};

export default ForgotPassword;