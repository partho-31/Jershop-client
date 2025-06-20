import { Link } from "react-router";
import RegistrationForm from "../components/registration/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dinzf10l3/image/upload/v1747369185/black-notebook-with-pen_fmelpt.jpg')`,
      }}
    >
      <div className="w-full max-w-md bg-white/0 backdrop-blur-sm rounded-xl shadow-lg p-8 my-16  border border-white/30">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white drop-shadow">
            Create Account
          </h2>
          <p className="text-sm text-white/80 mt-1">
            Fill in your details below
          </p>
        </div>
        <RegistrationForm />

        <div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Dear Sir!</h3>
              <p className="py-4">
                A message is send to your email.Please click on the activation
                link to active your accout!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link to="/login">
                    <button className="btn">Close</button>
                  </Link>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
