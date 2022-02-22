import React from 'react'
import styled from 'styled-components'


const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`

const Title = styled.h1`
 font-size:40px;
 color:#212121;`

 const Paragraph = styled.p`
    font-size:20px;
    color:#212221;`


const Home = () => {
  return (
    <Container>
        <Title>Hero App</Title>

        <Paragraph>  Para crear tu equipo va s tener que elegir 6 personajes , ademas vas a
          poder ver sus Stats para decidir si quieres agregarlo a tu equipo o no</Paragraph>

    </Container>
  )
}

export default Home