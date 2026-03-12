import "./OrderPageCheckbox.css";

export default function OrderPageCheckbox({
  label,
  name,
  value,
  onChange,
  checked,
  id,
}) {
  return (
    <div className="checkbox-wrapper">
      <input
        className="checkbox-input"
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
