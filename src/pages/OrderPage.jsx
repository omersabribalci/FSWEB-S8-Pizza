import OrderPageForm from "../components/OrderPage/OrderPageForm";
import OrderPageHeader from "../components/OrderPage/OrderPageHeader";

export default function OrderPage({
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
  return (
    <>
      <OrderPageHeader />
      <OrderPageForm
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
    </>
  );
}
