import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="background-image"
          />
        </div>
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute p-12 bg-black w-3/12  my-36 mx-auto right-0 left-0 text-white bg-opacity-70"
        >
          <h1 className="font-bold text-3xl p-2 m-2">
            {isSignForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignForm && (
            <input
              type="text"
              placeholder="Username"
              className="p-4 my-4 w-full bg-gray-500 bg-opacity-70 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email adress"
            className="p-4 my-4 w-full bg-gray-500 bg-opacity-70 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-500 bg-opacity-70 rounded-lg"
          />
          <p className="text-red-500 text-lg font-bold p-2 m-2">
            {errorMessage}
          </p>
          <button
            className="bg-red-500 p-4 my-6 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignForm ? "Sign In" : "Sign Up"}
          </button>
          <h2>Forgot Password?</h2>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignForm
              ? "New To Netflix? Sign Up Now"
              : "Already  registered? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
