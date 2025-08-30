import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm();

  const [serverError, setServerError] = React.useState("");

  const onSubmit = async (data) => {
    setServerError("");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
    } catch (err) {
      setServerError("Submission failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSubmitSuccessful && !serverError && (
        <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
      )}
      {serverError && (
        <p className="text-red-600 text-center mt-4">{serverError}</p>
      )}
    </form>
  );
};

export default ContactForm;
