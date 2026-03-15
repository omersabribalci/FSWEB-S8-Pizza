import { useEffect, useState } from "react";
import "./OrderPageForm.css";
import RadioButton from "./RadioButton";
import OrderPageCheckbox from "./OrderPageCheckbox";

const pizzaSizes = ["Küçük", "Orta", "Büyük"];
const extraIngredients = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Zeytin",
  "Ananas",
  "Kabak",
];

const errorMessages = {
  size: "Lütfen boyut seçiniz !",
  dough: "Lütfen hamur tipi seçiniz !",
  ingredients: "Lütfen en az 4 tane malzeme seçiniz !",
  userName: "Lütfen isminizi giriniz !",
};
export default function OrderPageForm({
  formData,
  setFormData,
  initialFormData,
  handleChange,
  handleAmountChange,
  handleSubmit,
  pizzaPrice,
  extraItemPrice,
  isFormValid,
  setIsFormValid,
  errorMessage,
}) {
  const [errors, setErrors] = useState({
    size: "",
    dough: "",
    ingredients: "",
    userName: "",
  });
  const extraItemTotalPrice =
    formData.ingredients.length * extraItemPrice * formData.amount;
  const totalPrice =
    (pizzaPrice + formData.ingredients.length * extraItemPrice) *
    formData.amount;

  useEffect(() => {
    let newErrors = {
      size: "",
      dough: "",
      ingredients: "",
      userName: "",
    };

    if (!formData.size) {
      newErrors.size = errorMessages.size;
    }

    if (!formData.dough) {
      newErrors.dough = errorMessages.dough;
    }

    if (formData.ingredients.length < 4) {
      newErrors.ingredients = errorMessages.ingredients;
    }

    if (formData.userName.length < 3) {
      newErrors.userName = errorMessages.userName;
    }

    setErrors(newErrors);

    if (
      !newErrors.size &&
      !newErrors.dough &&
      !newErrors.ingredients &&
      !newErrors.userName
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className="op-form-wrapper">
      <h2 className="op-form-title">Position Absolute Acı Pizza</h2>
      <div className="product-stats-container">
        <div className="product-price">{pizzaPrice}₺</div>

        <div className="product-social">
          <span className="rating-score">4.9</span>
          <span className="review-count">(200)</span>
        </div>
      </div>
      <p className="product-summary">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </p>
      <div className="product-selection">
        <div className="size-selection">
          <h2 className="op-form-title">Boyut Seç</h2>
          {pizzaSizes.map((item) => (
            <RadioButton
              key={item}
              label={item}
              name="size"
              value={item}
              onChange={handleChange}
              checked={formData.size === item}
              id={item}
            />
          ))}
          {errors.size && <span className="error-text">{errors.size}</span>}
        </div>
        <div className="dough-selection">
          <label className="op-form-title" htmlFor="dough">
            Hamur Seç
          </label>
          <select
            className="dough-options"
            value={formData.dough}
            name="dough"
            id="dough"
            onChange={handleChange}
            data-cy="dough-select"
          >
            <option value="" disabled>
              Hamur Kalınlığı
            </option>
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="kalın">Kalın</option>
          </select>
          {errors.dough && <span className="error-text">{errors.dough}</span>}
        </div>
      </div>
      <div className="ingredients-selection">
        <h2 className="op-form-title">Ek Malzemeler</h2>
        <p className="product-summary">
          En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
        <div className="ingredients-grid">
          {extraIngredients.map((item) => (
            <OrderPageCheckbox
              key={item}
              label={item}
              name="ingredients"
              value={item}
              onChange={handleChange}
              checked={formData.ingredients.includes(item)}
              id={item}
            />
          ))}
        </div>
        {errors.ingredients && (
          <span className="error-text">{errors.ingredients}</span>
        )}
      </div>
      <div className="user-name-wrapper">
        <label className="op-form-title" htmlFor="userName">
          İsim
        </label>
        <input
          maxLength={20}
          type="text"
          id="userName"
          value={formData.userName}
          onChange={handleChange}
          name="userName"
          data-cy="username-input"
        />
        {errors.userName && (
          <span className="error-text">{errors.userName}</span>
        )}
      </div>
      <div className="order-note-section">
        <label htmlFor="order-note" className="op-form-title">
          Sipariş Notu
        </label>
        <textarea
          maxLength={140}
          className="textarea-order-note"
          name="note"
          id="order-note"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={formData.note}
          onChange={handleChange}
          data-cy="order-note"
        ></textarea>
      </div>
      <hr />
      <div className="order-result">
        <div className="order-amount">
          <button
            type="button"
            disabled={formData.amount <= 1}
            name="button"
            className="btn-amount-change-left"
            onClick={() => handleAmountChange("decrease")}
          >
            -
          </button>
          <span className="amount">{formData.amount}</span>
          <button
            type="button"
            name="button"
            className="btn-amount-change-right"
            onClick={() => handleAmountChange("increase")}
          >
            +
          </button>
        </div>
        <div className="result-section">
          <div className="order-price">
            <h2 className="op-form-title">Sipariş Toplamı</h2>
            <div className="result-lines">
              <span>Seçimler</span>
              <span>{extraItemTotalPrice}₺</span>
            </div>
            <div className="result-lines-total">
              <span>Toplam</span>
              <span>{totalPrice}₺</span>
            </div>
          </div>
        </div>
      </div>
      <button
        disabled={!isFormValid}
        className="order-button"
        data-cy="order-btn"
      >
        SİPARİŞ VER
      </button>
      {errorMessage && <p className="error-text">{errorMessage}</p>}
    </form>
  );
}
