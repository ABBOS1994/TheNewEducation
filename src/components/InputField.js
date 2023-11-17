import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

export function InputField(props) {
  const { control, name, placeholder, inputClassName, rules, error } = props;

  const inputErrorClassName = 'border-red-color dark:border-red-color';

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <input
              id={name}
              type='text'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={`${inputClassName} ${error && inputErrorClassName}`}
              placeholder={placeholder}
            />
          );
        }}
        rules={rules}
      />
      {error && (
        <span className='text-red-500 text-xs'>
          * Please fill out this field
        </span>
      )}
    </>
  );
}

InputField.defaultProps = {
  inputClassName:
    'mt-2 lg:ml-2 md:ml-4  py-3 px-8 border border-colorRounded rounded-xl  2xl:w-full xl:w-[440px] lg:w-[440px] md:w-[615px] w-[340px] bg-white text-black' +
    ' placeholder:text-placeholder-color',
};

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
};
