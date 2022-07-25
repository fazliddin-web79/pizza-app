import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 480px;
  background: #ffffff;
  border: 1px solid #fff0f0;
  border-radius: 12px;
  margin: 30px 0 15px 0;
  @media (max-width: 660px) {
    height: 160px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    margin: 15px 0 8px 0;
  }
  @media (max-width: 390px) {
    height: 130px;
  }
`;

Container.Mobile = styled.div`
  @media (max-width: 660px) {
    width: 70%;
    padding-right: 12px;
    height: 90%;
  }
  @media (max-width: 390px) {
    padding: 0;
  }
`;

Container.Header = styled.div`
  position: relative;
  @media (max-width: 660px) {
    width: 30%;
    padding-right: 12px;
  }
`;

Container.Img = styled.img`
  width: 300px;
  height: 300px;
  @media (max-width: 660px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 540px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 440px) {
    width: 100px;
    height: 100px;
  }
`;
Container.Priority = styled.div`
  position: absolute;
  top: 7%;
  left: 0%;
  width: 65px;
  height: 32px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #e23535;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 390px) {
    width: 44px;
    height: 22px;
    font-size: 12px;
    line-height: 14px;
  }
`;
Container.Body = styled.div`
  width: 90%;
  margin: 0 auto;
  /* padding: 12px 0; */
  @media (max-width: 390px) {
    padding: 0;
  }
`;
Container.Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #191919;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: "Source Sans Pro", "sans-serif";
  @media (max-width: 660px) {
    font-size: 16px;
  }
  @media (max-width: 390px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
Container.Parag = styled.p`
  font-family: "Source Sans Pro", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #191919;
  flex: none;
  order: 1;
  flex-grow: 0;
  padding: 12px 0;
  @media (max-width: 410px) {
    padding: 6px 0;
  }
  @media (max-width: 390px) {
    font-size: 12px;
    line-height: 16px;
    padding: 3px 0;
  }
`;

Container.Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15px;
  @media (max-width: 390px) {
    padding-bottom: 8px;
  }
`;

Container.Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 32px;
  gap: 10px;
  background: #ff7010;
  border-radius: 6px;
  border: none;
  user-select: none;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
  // for text
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 660px) {
    display: none;
  }
`;
Container.Price = styled.h2`
  font-family: "Source Sans Pro", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ff7010;
  @media (max-width: 390px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 7px 16px;
    gap: 10px;
    width: 93px;
    height: 32px;
    background: #ffeee2;
    border-radius: 6px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    user-select: none;
    :active {
      transform: scale(0.96);
    }
  }
`;
Container.Cost = styled.div`
  display: none;
  /* display: ${(props) => (props.type === "mobile" ? "none" : "block")}; */
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #ff7010;
  @media (max-width: 660px) {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-decoration-line: line-through;
    color: #a5a5a5;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  @media (min-width: 391px) {
    display: none;
  }
`;
