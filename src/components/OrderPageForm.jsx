import { useState } from "react";
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
const initialFormData = {
  userName: "",
  size: "",
  dough: "",
  ingredients: [],
  note: "",
  count: 1,
  totalPrice: "",
};
export default function OrderPageForm() {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    let { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const oldIngredients = [...formData.ingredients];
      let newIngredients;

      if (checked) {
        if (oldIngredients.length < 10) {
          newIngredients = [...oldIngredients, value];
        } else {
          newIngredients = oldIngredients;
        }
      } else {
        newIngredients = oldIngredients.filter((item) => item !== value);
      }
      setFormData({ ...formData, ingredients: newIngredients });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  console.log(formData);

  return (
    <div className="op-form-wrapper">
      <h2 className="op-form-title">Position Absolute Acı Pizza</h2>
      <div className="product-stats-container">
        <div className="product-price">85.50₺</div>

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
          >
            <option value="" disabled>
              Hamur Kalınlığı
            </option>
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="kalın">Kalın</option>
          </select>
        </div>
      </div>
      <div className="ingredients-selection">
        <h2 className="op-form-title">Ek Malzemeler</h2>
        <p className="product-summary">
          En fazla 10 malzeme seçebilirsiniz. 5₺
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
      </div>
      <div className="order-note-section">
        <label htmlFor="order-note" className="op-form-title">
          Sipariş Notu
        </label>
        <textarea
          className="textarea-order-note"
          name="note"
          id="order-note"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={formData.note}
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
      <div className="order-result">
        <div className="order-amount">
          <button className="btn-amount-change">-</button>
          <span className="amount">1</span>
          <button className="btn-amount-change">+</button>
        </div>
        <div className="result-section">
          <div className="order-price">
            <h2 className="op-form-title">Sipariş Toplamı</h2>
            <div className="result-lines">
              <span>Seçimler</span>
              <span>25.00₺</span>
            </div>
            <div className="result-lines">
              <span>Toplam</span>
              <span>110.50₺</span>
            </div>
          </div>
          <button className="order-button">SİPARİŞ VER</button>
        </div>
      </div>
    </div>
  );
}
