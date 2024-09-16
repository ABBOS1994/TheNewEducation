import React, { useState, forwardRef } from "react"
import { FooterIcon } from "../assets/Icons/Icons"
import { useForm, Controller } from "react-hook-form"
import InputMask from "react-input-mask"
import axios from "axios"
import { Notification } from "./Notification"

const ContactForm = forwardRef((props, ref) => {
  const [state, setState] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = ({ name, phone, message }) => {
    axios
      .post(`/api/sendMessage`, { name, phone, message })
      .then((r) => {
        setState(true)
        return r
      })
      .catch((e) => {
        setState(false)
        console.error(e.message)
        return e
      })
      .finally(() => {
        setTimeout(() => setState(false), 3000)
        reset({
          name: "", phone: "", message: "",
        })
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
        {/* Icon */}
        <div className="-mt-16 mr-[550px] hidden xl:block">
          <FooterIcon/>
        </div>

        <input
          {...register("name", { required: true })}
          className="border bg-white placeholder:text-gray-500 text-black mt-3 w-[345px] rounded-xl px-5 py-3 md:w-[610px] lg:w-[450px] 2xl:w-full"
          placeholder="Ismingiz"
        />
        {errors.name && <p className="text-red-500">Ismingizni kiriting</p>}

        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref: innerRef } }) => (
            <InputMask
              mask="+\9\98 (99) 999-99-99"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              ref={innerRef}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className="border bg-white placeholder:text-gray-500 text-black mt-4 w-[345px] rounded-xl px-5 py-3 md:w-[610px] lg:w-[450px] 2xl:w-full"
                  placeholder="Telefon raqamingiz"
                  required
                />
              )}
            </InputMask>
          )}
        />
        {errors.phone && <p className="text-red-500">Telefon raqamingizni kiriting</p>}

        <textarea
          {...register("message", { required: true })}
          className="border bg-white placeholder:text-gray-500 text-black mt-3 h-52 w-[345px] rounded-xl px-5 py-3 md:w-[610px] lg:w-[450px] 2xl:w-full"
          placeholder="Xabaringizni shu yerga yozing..."
        />
        {errors.message && <p className="text-red-500">Xabarni kiriting</p>}

        <button
          className="mt-8 h-16 w-10/12 rounded-full bg-gradient-to-r from-gradientStart to-gradientFinish text-base tracking-wide text-white md:w-8/12 xl:h-12 xl:w-7/12 xl:rounded-3xl"
          type="submit"
        >
          Xabarni yuborish
        </button>
      </form>

      <Notification open={state} close={() => setState(false)}/>
    </div>
  )
})

ContactForm.displayName = "ContactForm"


export default ContactForm
