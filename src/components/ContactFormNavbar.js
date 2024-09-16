import React, { useState, forwardRef } from "react"
import { useForm, Controller } from "react-hook-form"
import InputMask from "react-input-mask"
import axios from "axios"
import { Notification } from "./Notification"

const ContactFormNavbar = forwardRef((props, ref) => {
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
      .finally(() => reset({
        name: "",
        phone: "",
        message: "",
      }))
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col items-center justify-center space-y-6 text-black"
      >
        <div className="w-full lg:flex lg:space-x-4 2xl:w-11/12">
          <input
            {...register("name", { required: true })}
            className="border bg-white placeholder:text-placeholder-color text-secondary w-full lg:w-1/2 h-12 rounded-full px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ismingiz"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">Ismingizni kiriting</p>}

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
                    className="border bg-white placeholder:text-placeholder-color text-secondary mt-4 lg:mt-0 w-full lg:w-1/2 h-12 rounded-full px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Telefon raqamingiz"
                    required
                  />
                )}
              </InputMask>
            )}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">Telefon raqamingizni kiriting</p>}
        </div>

        <textarea
          {...register("message", { required: true })}
          className="border bg-white placeholder:text-placeholder-color text-secondary w-full h-52 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Qanday savollaringiz bor, yerga yozing..."
          required
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">Xabarni kiriting</p>}

        <button
          className="h-12 w-full lg:w-5/12 rounded-full bg-gradient-to-r from-gradientStart to-gradientFinish text-white tracking-wide text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Kurs uchun arizani yuborish
        </button>
      </form>

      <Notification open={state} close={() => setState(false)}/>
    </div>
  )
})

export default ContactFormNavbar
