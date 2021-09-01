import styled from 'styled-components'

export const WrapperDiv = styled.div`
border: 3px solid black;
`

export const TopNavWrap = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin: auto;
background-color: black;
height: 35px;
a {
  text-decoration: none;
  color: inherit;
  padding: 0 15px;
  &:hover {
    color: whitesmoke;
  }
}

header {
  max-width: 1200px;

}
`

export const ProductsWrap = styled.div`
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: center;
`