import React, { memo } from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export const Card = ({ value }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`${value.categoryPath}/${value.id}`)}>
      <Container.Header>
        <Container.Img src={value.img} alt="" />
        {value.new && <Container.Priority> {value?.new} </Container.Priority>}
      </Container.Header>
      <Container.Mobile>
        <Container.Body>
          <Container.Title>{value.title}</Container.Title>
          <Container.Parag>{value.recipe}</Container.Parag>
        </Container.Body>
        <Container.Footer>
          <Container.Button>Выбрать</Container.Button>
          <Container.Price>от {value.price} ₽</Container.Price>
          {value.subPrice && (
            <Container.Cost type="mobile">
              от
              {value?.subPrice} ₽
            </Container.Cost>
          )}
        </Container.Footer>
      </Container.Mobile>
    </Container>
  );
};

export default memo(Card);
