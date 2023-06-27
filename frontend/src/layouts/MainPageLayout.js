import React from 'react'
import styled from 'styled-components'
import mypageBgImg from 'assets/img/mypage_bg_img.png'

export default function MainPageLayout({ children }) {
  const [Up, Middle, Down] = children

  return (
    <Container>
      <UpperPane>{Up}</UpperPane>
      <MiddlePane>{Middle}</MiddlePane>
      <StyledH1 className="secondary">Find Your Match!</StyledH1>
      <LowerPane>{Down}</LowerPane>
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  background-image: url(${mypageBgImg});
  background-size: cover;
`

const StyledH1 = styled.h1`
  font-family: 'bigjohn';
`

const UpperPane = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

const MiddlePane = styled.div`
  padding: 0rem 2rem;
  margin-bottom: 2rem;
`
const LowerPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%
  height: 100rem;

  margin: 2rem 3rem;

  border-radius: 1rem;
  box-shadow: 5px 5px 10px #00000050;

  background-color: ${({ theme }) => theme.bgColor};

  @media screen and (min-width: 1024px) {
    min-width: 1000px;
    width: 85%;
  }
  @media screen and (min-width: 1400px) {
    min-width: 1200px;
    width: 75%;
  }
`
