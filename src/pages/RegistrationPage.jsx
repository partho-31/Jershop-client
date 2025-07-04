
import RegistrationForm from "../components/registration/RegistrationForm";

const RegistrationPage = () => {
  
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dinzf10l3/image/upload/v1751517821/510026_ybwhk9.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 sm:w-1/2 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 my-16 border border-white/30">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-white drop-shadow">
            Create Account
          </h2>
          <p className="text-sm text-white/80 mt-1">
            Fill in your details below
          </p>
        </div>

        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
