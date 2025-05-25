import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  passwordForConfirm: string;
};

function FormWithHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const password = watch("password");
  // const passwordForConfirm = watch("passwordForConfirm");

  const onSubmit = (data: FormValues) => {
    if (!isValid) {
      alert("Invalid input.");
      return;
    }

    if (data.password !== data.passwordForConfirm) {
      alert("Please check password once again.");
      return;
    }

    console.log("Sign up request from react-hook-form", data);
  };

  return (
    <>
      <h2>react-hook-form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Put in your e-mail"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format. Try again.",
              },
            })}
          />

          <p>
            {errors.email
              ? errors.email.message
              : "This is valid e-mail format."}
          </p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Put in your password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "You can't use this format. Try again.",
              },
            })}
          />

          <p>
            {errors.password
              ? errors.password.message
              : "This is valid password."}
          </p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Put in your password once again"
            {...register("passwordForConfirm", {
              required: "Confirmation is required",
              // FIXME: 얘는 잘 움직이는데, password가 바뀔 때는 다시 안됨.
              validate: (value) =>
                value === password || "Not matched. Try again.",
            })}
          />

          <p>
            {errors.passwordForConfirm
              ? errors.passwordForConfirm.message
              : "Matched"}
          </p>
        </div>

        <button type="submit">Sign Up!</button>
      </form>
    </>
  );
}

export default FormWithHookForm;
