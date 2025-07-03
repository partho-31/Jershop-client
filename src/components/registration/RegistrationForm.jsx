import { useForm } from "react-hook-form";
import useAuthContext from "../../hooks/useAuthContext";
import { Link } from "react-router";

const RegistrationForm = () => {
  const { registration, loading } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleClick = (data) => {
    registration(data);
    reset();
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(handleClick)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 font-serif text-sm mb-1">
              First Name
            </label>
            <input
              {...register("first_name")}
              type="text"
              placeholder="John"
              className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-white/80 font-serif text-sm mb-1">
              Last Name
            </label>
            <input
              {...register("last_name")}
              type="text"
              placeholder="Doe"
              className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="mail@site.com"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
          />
          {errors.email && <p>Please enter valid email.</p>}
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required!" })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
            required
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <p className="text-xs text-white/60 mt-1">
            Must include uppercase, lowercase, and number.
          </p>
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Confirm Password
          </label>
          <input
            {...register("confirm_password", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Password did not match",
            })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
            required
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          {errors.confirm_password && (
            <span className="text-white/60  text-xs mb-1">
              {errors.confirm_password.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Phone No.
          </label>
          <input
            {...register("phone_number", { required: true })}
            placeholder="+880 1712 345678"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
          />
          {errors.phone_number && <p>Please enter valid number!</p>}
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Address
          </label>
          <textarea
            {...register("address")}
            placeholder="Your address"
            rows="3"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        <div className="text-center mt-2">
          <p className="text-sm text-white/70">
            Already have an account?
            <Link to="/login">
              <button className="hover:underline text-white/90 font-semibold">
                Login
              </button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
