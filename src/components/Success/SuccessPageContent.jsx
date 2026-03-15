import styled from "styled-components";
import logo from "../../../images/iteration-1-images/logo.svg";
import { useNavigate } from "react-router";

const SuccessPageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--primary-red);
`;

const SuccessPageBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    margin: 1rem 0;
    width: 18rem;
  }

  p:first-of-type {
    font-family: "Satisfy", cursive;
    font-weight: 400;
    font-style: normal;
    color: var(--primary-yellow);
    font-size: 2rem;
  }

  h1 {
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    color: white;
    font-size: 2.5rem;
    margin-top: 1rem;
    text-align: center;
  }

  hr {
    border: 0;
    border-top: 1px solid #faf7f2;
    width: 21rem;
    margin: 1rem;
  }
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;

  width: 21rem;

  h2 {
    margin-bottom: 0.8rem;
    font-weight: 700;
    text-align: center;
  }

  ul {
    line-height: 1.5rem;
    font-weight: 600;
  }

  span {
    font-weight: 400;
  }
`;

const PriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 1rem;
  padding: 1.5rem 4rem;
  gap: 1rem;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  width: 21rem;
  div {
    display: flex;
    justify-content: space-between;
    color: white;
  }

  h2 {
    margin-bottom: 0.4rem;
    font-weight: 700;
  }
`;

const HomeButton = styled.button`
  background-color: var(--primary-yellow);
  margin: 1rem;
  padding: 0.8rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  color: black;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  border: none;
`;

export default function SuccessPageContent({
  formData,
  pizzaPrice,
  extraItemPrice,
  setFormData,
  initialFormData,
  apiResponse,
}) {
  const extraItemTotalPrice =
    formData.ingredients.length * extraItemPrice * formData.amount;
  const totalPrice =
    (pizzaPrice + formData.ingredients.length * extraItemPrice) *
    formData.amount;

  let navigate = useNavigate();
  console.log("ResData:", apiResponse);
  return (
    <SuccessPageWrapper>
      <SuccessPageBody>
        <img src={logo} alt="" />
        <p>lezzetin yolda </p>
        <h1>SİPARİŞ ALINDI</h1>
        <hr />
        <OrderDetails>
          <h2>Position Absolute Acı Pizza</h2>
          <ul>
            <li>
              <span>Sipariş Zamanı:</span>{" "}
              {new Date(apiResponse.createdAt).toLocaleString("tr-TR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </li>
            <li>
              <span>Sipariş No:</span> #{apiResponse.id}
            </li>
            <li>
              <span>Adet:</span> {apiResponse.amount}
            </li>
            <li>
              <span>İsim:</span> {apiResponse.userName}
            </li>
            <li>
              <span>Boyut:</span> {apiResponse.size}
            </li>
            <li>
              <span>Hamur:</span> {apiResponse.dough}
            </li>
            <li>
              <span>Ek Malzemeler:</span> {apiResponse.ingredients.join(", ")}
            </li>
            {apiResponse.note && (
              <li>
                <span>Sipariş Notu:</span> {apiResponse.note}
              </li>
            )}
          </ul>
        </OrderDetails>
        <PriceSummary>
          <h2>Sipariş Toplamı</h2>
          <div>
            <span>Seçimler</span>
            <span>{extraItemTotalPrice}₺</span>
          </div>
          <div>
            <span>Toplam</span>
            <span>{totalPrice}₺</span>
          </div>
        </PriceSummary>
        <HomeButton
          onClick={() => {
            {
              setFormData(initialFormData);
              navigate("/");
            }
          }}
        >
          Ana Sayfa
        </HomeButton>
      </SuccessPageBody>
    </SuccessPageWrapper>
  );
}
