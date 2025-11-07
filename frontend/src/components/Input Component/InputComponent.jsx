import IconComponent from "../Icon Component/IconComponent";

function InputComponent({
  type,
  placeholder,
  value,
  name,
  onChangeHandler,
  icon,
  label,
  iconSize,
  iconStyle,
  showHidePassword,
}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">{label}</span>
      </label>
      <div className="relative">
        <div
          className={
            "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          }
        >
          {icon && (
            <IconComponent
              icon={icon}
              iconSize={iconSize}
              iconStyle={iconStyle}
            />
          )}
        </div>
        <input
          className={`input input-bordered w-full pl-10`}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChangeHandler}
        />
        {showHidePassword}
      </div>
    </div>
  );
}

export default InputComponent;
