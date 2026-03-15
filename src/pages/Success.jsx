import SuccessPageContent from "../components/Success/SuccessPageContent";

export default function Success({
  formData,
  pizzaPrice,
  extraItemPrice,
  setFormData,
  initialFormData,
  apiResponse,
}) {
  return (
    <>
      <SuccessPageContent
        formData={formData}
        pizzaPrice={pizzaPrice}
        extraItemPrice={extraItemPrice}
        setFormData={setFormData}
        initialFormData={initialFormData}
        apiResponse={apiResponse}
      />
    </>
  );
}
