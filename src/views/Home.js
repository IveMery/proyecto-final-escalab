import React, { useContext } from "react";
import styled from "styled-components";
import { HeroContext } from "../contexts/HeroContext";
import { Link } from "react-router-dom";
import superheroes from "../assets/images/superheroes.jpg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 80%;
`;

const ContainerLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 83vh;
  margin-bottom: 10px;
`;
const DivInfo = styled.div`
  background-color: rgba(54, 53, 53, 0.800);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin:0;
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin: 0;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 6px;
  border: none;
  text-align: center;
  width: 120px;
  color: white;
  height: 50px;
  font-family: "Russo One";
  margin-top:5px;
  cursor: pointer;
  background: #f50057;
  :hover {
    background: #891232;
  }
`;

const Home = () => {
  const { heroes } = useContext(HeroContext);

  return (
    <ContainerLayout style={{ background: `url("${superheroes}")` }}>
      <DivInfo>
        <Container>
          <Title>Hero App</Title>
          {heroes.length > 0 ? (
            <Container>
              <Paragraph>
                Vemos que ya agregaste algunos personajes
                😁,  puedes ver tu equipo haciendo click en el siguiente botón. Recuerda que también puedes
                ver la suma de sus estadísticas.
              </Paragraph>
              <Link to="/MyTeam">
                <Button>Ver equipo</Button>
              </Link>
            </Container>
          ) : (
            <Container>
              <h2>Instrucciones</h2>
              <Paragraph>
                Tu equipo esta vacío 😢 por favor agrega algunos personajes!!!
              </Paragraph>
              <Paragraph>
                Para crear tu equipo puedes elegir 6 personajes, podrás revisar
                las estadísticas de cada personaje como
                fuerza, velocidad, durabilidad, inteligencia, poder y combate para
                decidir si quieres agregarlo a tu equipo o no.
              </Paragraph>
              <Link to="/Search">
                <Button>Comenzar</Button>
              </Link>
            </Container>
          )}
        </Container>
      </DivInfo>
    </ContainerLayout>
  );
};

export default Home;
