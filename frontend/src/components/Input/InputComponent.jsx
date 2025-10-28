function InputComponent({
  type,
  placeholder,
  value,
  name,
  onClickHandler,
  icon,
  label,
  iconSize,
  iconStyle,
  inputStyling
}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">{label}</span>
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <InputComponent icon={icon} iconSize={iconSize} iconStyle={iconStyle} />
        </div>
      </div>
      <input
      className={`input input-border ${inputStyling} pl-10`}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onClick={onClickHandler}
      />
    </div>
  );
}

export default InputComponent;
