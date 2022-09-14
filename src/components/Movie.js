import React from "react";
import styled from "styled-components";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const Container = styled.div`
  width: 138px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  color: #fff;
  margin-bottom: 20px;

  img{
    width: 100%;
    margin-bottom: 10px;
  }
  .title{
    font-size: 1rem;
    font-weight: bold;
  }
  .year{
    color: #586E94;
  }
  .vote{
    color: #fff;
  }
`;

function Movie({ movie }) {
  const { id, title, poster_path, release_date } = movie;
  const year = release_date.split('-')[0]
  return (
    <Container key={id}>
      <img className="img" src={IMG_URL + poster_path} alt={title} />
      <div className="title">{title}</div>
      <div className="year">{year}</div>
    </Container>
  );
}

export default Movie;
