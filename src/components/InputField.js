import React from "react"
import PropTypes from "prop-types"
import { Controller } from "react-hook-form"
import InputMask from "react-input-mask"

export function InputField({
  control,
  name,
  placeholder,
  inputClassName,
  rules,
  error,
  mask,
}) {
  const inputErrorClassName = "border-red-color dark:border-red-color"

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <InputMask
          mask={mask}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              id={name}
              type="text"
              className={`${inputClassName} ${error ? inputErrorClassName : ""}`}
              placeholder={placeholder}
              required
            />
          )}
        </InputMask>
      )}
      rules={rules}
    />
  )
}

InputField.defaultProps = {
  inputClassName:
    "mt-2 lg:ml-2 md:ml-4 py-3 px-8 border border-colorRounded rounded-xl 2xl:w-full xl:w-[440px] lg:w-[440px] md:w-[615px] w-[340px] bg-white text-black placeholder:text-placeholder-color",
  mask: "",
}

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  mask: PropTypes.string,
}
