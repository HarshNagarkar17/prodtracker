"use client";

import axios from "axios";
import React, { useState } from "react";
import LoadingBtn from "./LoadingButton";
import toast from "react-hot-toast";
// import sgMail from "@sendgrid/mail";

const JoinWaitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("/api/onboard", { email });
      // const msg = {
      //   to: "recipient@example.com",
      //   from: "youremail@example.com",
      //   subject: "Welcome to Our Waitlist",
      //   text: "Thank you for joining our waitlist!",
      //   html: "<p>Thank you for joining our waitlist!</p>",
      // };
      // await sgMail.send(msg);
      toast.success(response.data ?? "Thank you for joining the waitlist!");
    } catch (err: any) {
      const errorMessage = err.response?.data || "Error saving email";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center max-w-7xl gap-4"
      >
        <input
          id="email"
          className="form-input w-[280px] py-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@email.com"
          required
        />
        <LoadingBtn loading={isLoading} />
      </form>
    </div>
  );
};

export default JoinWaitlist;
