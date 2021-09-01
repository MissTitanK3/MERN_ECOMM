import styled from 'styled-components'

export const ComponentsDiv = styled.div`
border: 2px solid green;
`

export const ProductComp = styled.div`
border: 3px solid black;
border-top: 20px solid black;
border-radius: 5px;
box-shadow: 2px 2px 5px black;
width: 225px;
height: 350px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
text-align: center;
margin: 25px;

a {
  text-decoration: none;
  color: inherit;
}
`

export const SingleProductComp = styled.div`
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: 100px auto;
background-color: white;
div {
  width: 33%;
  margin: auto;
}
`