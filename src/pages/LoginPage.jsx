import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import { Link } from "react-router";
import GoogleLoginButton from "../components/registration/GoogleLoginButton";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logIn, loading } = useAuthContext();
  const onSubmit = (data) => {
    logIn(data);
  };

  const handleAdminLogin = () => {
    logIn({
      email: "parthokumarmondal90@gmail.com",
      password: "Password@12",
    });
  };

  const handleUserLogin = () => {
    logIn({
      email: "64or02bp8g@xkxkud.com",
      password: "Password@12",
    });
  };

  return (
    <div className="h-lvh relative font-['Poppins']">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dinzf10l3/image/upload/v1751517821/510026_ybwhk9.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

        <div className="relative flex items-center justify-center min-h-screen px-3 z-10">
          <div className="glass-card w-full max-w-md bg-white/5 rounded-2xl shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl backdrop-blur-lg">
            <div className="p-3 sm:p-6">
              <div className="text-center mb-4 sm:mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Welcome Back
                </h2>
                <p className="text-white/70">Sign in to your account</p>
              </div>

              <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block text-white/80 font-serif   text-sm mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="mail@site.com"
                    className="w-full px-4 py-2  text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  {errors.email && <span>{errors.email?.message}</span>}
                </div>

                <div>
                  <label className="block text-white/80 font-serif text-sm mb-1">
                    Password
                  </label>
                  <div className="flex items-center  rounded-lg border border-white/30 px-3 py-2">
                    <svg
                      className="h-5 w-5 text-white/60 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      placeholder="Password"
                      minLength="8"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                      className="bg-transparent w-full text-white placeholder-white/70 focus:outline-none"
                    />
                  </div>
                  <p className="text-xs text-white/60 mt-1">
                    Password must be 8+ characters with number, uppercase &
                    lowercase.
                  </p>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
                >
                  {loading ? "Loading.." : "Sign In"}
                </button>
              </form>

              <div className=" mt-3 flex gap-3">
                <button
                  onClick={handleAdminLogin}
                  className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
                >
                  Admin Credential
                </button>
                <button
                  onClick={handleUserLogin}
                  className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
                >
                  User Credential
                </button>
              </div>

              <div className="mt-6 text-center">
                <div className="text-white/70 flex justify-center gap-1">
                  Don't have an account?{" "}
                  <Link to="/registration">
                    <p className="text-white hover:underline">Sign up</p>
                  </Link>
                </div>
              </div>

             <GoogleLoginButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
