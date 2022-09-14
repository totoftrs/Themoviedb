import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 30px;
  color: #fff;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-between;
`
function Movies({ popular, handleOutput }) {
  return (
    <Container>
      <h1>Tous les films</h1>
      <div>trier par :</div>
      <div>filtrer par :</div>
      <Wrapper>
        {popular
        .filter(elem=>{
            const res = elem.title.toLowerCase().includes(handleOutput())
            return res
        } )
        .map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </Wrapper>
    </Container>
  );
}

export default Movies;
