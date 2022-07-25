import React from "react";
import Card from "../Card1";
import { Container, Title } from "./style";

export const ShowCrads = ({ data, name }) => {
  return (
    <>
      <Title> {name}</Title>
      <Container>
        {data.map((item) => {
          return <Card value={item} key={item.id} />;
        })}
      </Container>
    </>
  );
};

export default ShowCrads;
