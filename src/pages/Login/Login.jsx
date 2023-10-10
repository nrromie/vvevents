import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn, GoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignIn();
        } catch (error) {
            console.error(error);
        }
        navigate(location?.state ? location.state : '/');
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="bg-swhite">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
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
                        <input type="password" placeholder="password" className="input input-bordered" autoComplete="current-password" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-dblue text-white hover:bg-cblue">Login</button>
                    </div>
                </form>
                <div className="px-6 flex">
                    <p>Don't have an account?</p><Link to={'/Register'} className="inline text-cblue font-medium">Register</Link>
                </div>
                <div className="text-center">
                    <button className="my-6 py-2 px-4 rounded bg-dblue text-white w-fit" onClick={handleGoogleSignIn} type="button">Login using Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;