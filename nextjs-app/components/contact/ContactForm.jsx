import React from "react";

export default function ContactForm() {
  return (
    <div className="grid max-w-[1414px] gap-5 px-4 lg:grid-cols-2 lg:gap-0">
      <h2>Fill-out the form and reach out to us.</h2>
      <form className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="First Name*"
          className="border-2 border-black px-[10px] py-[6px] text-sm"
        />
        <input
          type="text"
          placeholder="Last Name*"
          className="border-2 border-black px-[10px] py-[6px] text-sm"
        />
        <input
          type="email"
          placeholder="Email address*"
          className="col-span-2 border-2 border-black px-[10px] py-[6px] text-sm"
        />
        <input
          type="tel"
          placeholder="Phone number*"
          className="border-2 border-black px-[10px] py-[6px] text-sm"
        />
        <input
          type="text"
          placeholder="Organization*"
          className="border-2 border-black px-[10px] py-[6px] text-sm"
        />
        <input
          type="text"
          placeholder="Country/Region*"
          className="border-2 border-black px-[10px] py-[6px] text-sm"
        />

        <button
          type="submit"
          className="border-2 border-black bg-[#111B13] px-[10px] py-[6px] text-left text-sm text-light-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
