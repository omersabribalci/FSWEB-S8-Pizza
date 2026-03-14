import styled from "styled-components";
import logo from "../../../images/iteration-1-images/logo.svg";
const SuccessPageBody = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-red);
  text-align: center;
  img {
    margin-top: 5rem;
  }
  p {
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    color: white;
    font-size: 4rem;
    margin-top: 5rem;
  }
`;

export default function SuccessPageContent() {
  return (
    <SuccessPageBody>
      <img src={logo} alt="" />
      <p>
        TEBRİKLER! <br />
        SİPARİŞİNİZ ALINDI!
      </p>
    </SuccessPageBody>
  );
}
