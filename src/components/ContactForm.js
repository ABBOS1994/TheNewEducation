import React from "react"
import { FooterIcon } from "../assets/Icons/Icons"
import { InputField } from "./InputField"
import { useForm } from "react-hook-form"
import axios from "axios"

function ContactForm({ setState }) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (value) => {
    axios
      .post(`/api/sendMessage`, {
        name: value.name,
        phone: value.number,
        message: value.message,
      })
      .then((r) => {
        setState(true)
        return r
      })
      .catch((e) => {
        setState(true)
        console.error(e.message)
        return e
      })
      .finally(() => {
        setTimeout(() => setState(false), 3000)
        reset()
      })
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-20 flex flex-col items-center justify-center"
        method="POST"
        id="sheetdb-form"
      >
        <div className="-mt-16 mr-[550px] hidden xl:block">
          <FooterIcon />
        </div>
        <InputField
          register={register}
          control={control}
          error={errors.name}
          name="name"
          placeholder="Ismingiz"
        />
        <InputField
          register={register}
          control={control}
          error={errors.phone_number}
          name="number"
          className="text-secondary mt-4 h-11 w-full rounded-full pl-6"
          placeholder="Telefon raqamingiz"
          mask="+\9\98 (99) 999-99-99"
        />
        <textarea
          name="message"
          {...register("message")}
          className="border-colorRounded/40 bg-message-bg placeholder:text-placeholder-color text-secondary mt-3 h-52 w-[345px] rounded-xl border bg-white px-5 py-3 text-black md:w-[610px] lg:w-[450px] 2xl:w-full"
          placeholder="Xabaringizni shu yerga yozing..."
        />
        <button
          className="mt-8 h-16 w-10/12 rounded-full bg-gradient-to-r from-gradientStart to-gradientFinish text-base tracking-wide text-white md:w-8/12 xl:h-12 xl:w-7/12 xl:rounded-3xl"
          type="submit"
        >
          Xabarni yuborish
        </button>
      </form>
    </div>
  )
}

export default ContactForm
