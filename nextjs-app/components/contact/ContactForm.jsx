"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm({ data }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_API, {
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
    <div className="mx-auto mb-28 grid max-w-[1414px] gap-5 px-4 text-dark-600 lg:mb-48 lg:grid-cols-2 lg:gap-0">
      <h2 className="text-[22px]">{data?.module?.title}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3"
      >
        {data?.module?.fields?.map((field, index) => (
          <div
            key={index}
            className={field.type === "textarea" ? "col-span-2" : ""}
          >
            {field.type === "textarea" ? (
              <textarea
                {...register(field.placeholder, { required: field.required })}
                placeholder={field.placeholder}
                className="min-h-28 w-full border-2 border-black px-[10px] py-[6px] text-sm focus:outline-none focus:ring-0"
              />
            ) : field.type === "select" ? (
              <select
                {...register(field.placeholder, { required: field.required })}
                className="w-full border-2 border-black px-[10px] py-[6px] text-sm focus:outline-none focus:ring-0"
              >
                {field.options?.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                {...register(field.placeholder, { required: field.required })}
                placeholder={field.placeholder}
                className="w-full border-2 border-black px-[10px] py-[6px] text-sm focus:outline-none focus:ring-0"
              />
            )}
            {errors[field.placeholder] && (
              <p className="mt-1 text-sm text-red-600">
                This field is required
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className={`" border-2 border-black px-[10px] py-[6px] text-left text-sm text-light-500 transition-all ${isSubmitting ? "flex cursor-not-allowed items-center justify-center bg-white" : "bg-[#111B13] hover:bg-[#111B13]/90"}`}
        >
          {isSubmitting ? (
            <span className="mini-spinner"></span>
          ) : (
            data?.module?.buttonLabel
          )}
        </button>
      </form>
    </div>
  );
}
