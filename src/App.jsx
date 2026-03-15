import "./App.css";
import OrderPage from "./pages/OrderPage";
import { Routes, Route, useNavigate } from "react-router";
import Home from "./pages/Home";
import Success from "./pages/Success";
import { useState } from "react";
import axios from "axios";

const initialFormData = {
  userName: "",
  size: "",
  dough: "",
  ingredients: [],
  note: "",
  amount: 1,
};
const pizzaPrice = 85.5;
const extraItemPrice = 5;

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  let navigate = useNavigate();
  const [apiResponse, setApiResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
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

  function handleAmountChange(name) {
    if (name === "increase") {
      setFormData({ ...formData, amount: formData.amount + 1 });
    } else if (name === "decrease" && formData.amount > 1) {
      setFormData({ ...formData, amount: formData.amount - 1 });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid) {
      setErrorMessage("");
      axios
        .post("https://reqres.in/api/pizza", formData, {
          headers: {
            "x-api-key": "reqres_6c48c9d1f92f49028935d3ed2b82e173",
          },
        })
        .then((res) => {
          setApiResponse(res.data);

          navigate("/success");
        })
        .catch((err) => {
          if (!err.response) {
            setErrorMessage(
              "İnternet bağlantısı kurulamadı. Lütfen ağınızı kontrol edin.",
            );
          } else {
            setErrorMessage(
              "Sipariş alınırken bir hata oluştu. Lütfen tekrar deneyin.",
            );
          }
          console.error("Hata detayı:", err);
        });
    }
  }

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/order"
        element={
          <OrderPage
            formData={formData}
            setFormData={setFormData}
            initialFormData={initialFormData}
            handleChange={handleChange}
            handleAmountChange={handleAmountChange}
            handleSubmit={handleSubmit}
            pizzaPrice={pizzaPrice}
            extraItemPrice={extraItemPrice}
            isFormValid={isFormValid}
            setIsFormValid={setIsFormValid}
            errorMessage={errorMessage}
          />
        }
      />
      <Route
        path="/success"
        element={
          <Success
            formData={formData}
            pizzaPrice={pizzaPrice}
            extraItemPrice={extraItemPrice}
            setFormData={setFormData}
            initialFormData={initialFormData}
            apiResponse={apiResponse}
          />
        }
      />
    </Routes>
  );
}

export default App;
