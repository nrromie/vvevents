import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }

    return (
        <div className="bg-swhite">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" autoComplete="current-password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary  bg-dblue text-white hover:bg-cblue">Register</button>
                    </div>
                </form>
                <div className="px-6 flex">
                    <p>Already have an account?</p><Link to={'/Login'} className="inline text-cblue font-medium">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;