"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function Newsletter({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const response = await fetch(process.env.NEXT_PUBLIC_NEWSLETTER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Success! Message sent.");
      reset(); // ✅ Reset the form
    } else {
      console.error("Error submitting form");
    }
  };

  return (
    <>
      <h3 className="mb-5">{data?.title}</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-14 flex items-center gap-4 lg:mb-20"
      >
        <div className="w-full">
          <input
            type="email"
            placeholder={data?.placeholder}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full border-2 border-black px-[10px] py-[6px] text-sm text-dark-600 outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-white px-[10px] py-[6px] text-sm text-light-500 transition-all hover:border-dark-600 hover:bg-white hover:text-[#111b13] disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : data?.buttonLabel}
        </button>
      </form>
    </>
  );
}
