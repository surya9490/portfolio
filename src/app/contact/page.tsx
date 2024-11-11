"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSending,setIsSending] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    try {
      setIsSending(true);
      const response = await sendEmail(data);
    } catch (error) {
      console.error("Failed to send email:", error);
    }finally {
      setIsSending(false);
      reset()
    }
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-5 text-center my-20">Contact Me</h1>
      <div className="secondary-color rounded-md">
        <div className="sm:px-5 md:max-w-xl mx-auto  py-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-white/70"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-transparent bg-black/20 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-zinc-700 focus:shadow-md"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-white/70"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-transparent bg-black/20 py-3 px-6 text-base font-medium text-white/70 outline-none focus:border-zinc-700 focus:shadow-md"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-white/70"
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-transparent bg-black/20 py-3 px-6 text-base font-medium text-white/70 outline-none focus:border-zinc-700  focus:shadow-md"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className="text-right">
              <button className="hover:shadow-form  rounded-md bg-black/20 hover:border-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
