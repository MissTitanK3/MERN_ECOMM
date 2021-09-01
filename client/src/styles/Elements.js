import styled from 'styled-components'

export const ElementsDiv = styled.div`
border: 1px solid blue;
`
export const ImgElement = styled.div`
img {
  height: 100%;
  width: 100%;
}
`
export const ImgElementProduct = styled.div`
img {
  height: 100%;
  width: 100%;
}
`
export const BtnElement = styled.div`
width: 100px;
background-color: black;
text-align: center;
padding: 5px;
a {
  color: inherit;
  text-decoration: none;
}
&:hover {
  color: red;
  background-color: darkblue;
}
`
export const AddBtnElement = styled.div`
width: 300px;
background-color: black;
text-align: center;
padding: 5px;
font-size: 50%;
a {
  color: inherit;
  text-decoration: none;
}
&:hover {
  color: red;
  background-color: darkblue;
}
`