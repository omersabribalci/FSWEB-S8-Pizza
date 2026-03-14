import "./RadioButton.css";

export default function RadioButton({
  label,
  value,
  name,
  onChange,
  checked,
  id,
}) {
  return (
    <div className="btn-radio-wrapper">
      <div className="btn-radio">
        <label htmlFor={id}>{label}</label>
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          id={id}
        />
      </div>
    </div>
  );
}
