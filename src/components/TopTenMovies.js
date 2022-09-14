import React, { useEffect } from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Container = styled.div`
  color: #fff;
  padding: 30px;

  h1{
    padding-bottom: 30px
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function TopTenMovies({ popular }) {
  const filt = popular.filter((elem, index) => index < 10);

  return (
    <Container>
      <h1>TopTenMovies</h1>
      <Wrapper>
        {filt.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default TopTenMovies;
