/* eslint-disable react/prop-types */


export default function Input({label,type,placeholder,customcss , ...rest}) {
  return (

      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-semibold">{label}</span>
        </label>
        <input
        {...rest}
          type={type}
          placeholder={placeholder}
          className={` ${customcss} input text-black placeholder:text-black border-black input-bordered  bg-transparent`}
          required
        />
      </div>
  
  
  );
}
