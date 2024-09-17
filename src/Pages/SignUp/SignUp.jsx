import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Icon } from '@iconify/react';
import useAxiosSecure from "../../hooks/useAxiosSecure";


function SignUp() {

    useEffect(() => {
        document.title = "Magical Soul | Sign Up"
    }, [])

    const { signUp, updateName, updatePhotoURL, googleSignIn } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure()
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const fullName = firstName + " " + lastName;
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(password);
    const previousLocation = useLocation().state || '/';

    useEffect(() => {
        setConfirmPassword(password);
    }, [password]);



    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const navigate = useNavigate()

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!regex.test(password)) {
            setError('Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.');
            return
        }


        signUp(email, confirmPassword)
            .then(res => {
                if (res.user) {
                    const email = res.user.email;
                    const userInfo = { firstName, lastName, fullName, email }

                    axiosSecure.post('/profile', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {

                                Swal.fire({
                                    title: 'Success!',
                                    text: 'You have successfully created an account',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                                navigate(previousLocation)
                            }
                        })
                }
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError("Email already in use.")
                }
                else {
                    setError(error.message)
                }
            })
    }


    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                if (res.user) {
                    Toast.fire({
                        icon: "success",
                        title: "Signed in successfully"
                    });
                    navigate(previousLocation)
                    setError(null)
                }
            })
            .catch(error => console.log(error))
    }


    return <>
        <section className="card-body max-w-lg bg-gray-200 mx-auto rounded-3xl mb-14 text-black">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input onChange={handleFirstNameChange} type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input onChange={handleLastNameChange} type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={handlePasswordChange} name="password" type="password" placeholder="Your Password" className="input input-bordered" required />
                </div>
                <p className="text-red-500 mt-3">{error}</p>
                <div className="form-control my-6">
                    <button className="btn btn-neutral text-xl">Sign Up</button>
                </div>
                <p className="text-lg">Already have an account? <Link className="link text-blue-800" to='/login'>Login here!</Link></p>
            </form>
            <div className="divider">OR</div>
            <div className="flex flex-col gap-5">
                <button onClick={handleGoogleLogin} className="btn btn-block btn-outline text-xl font-bold"><Icon icon="devicon:google" /> Continue With Google</button>
            </div>
        </section>
    </>
}

export default SignUp;