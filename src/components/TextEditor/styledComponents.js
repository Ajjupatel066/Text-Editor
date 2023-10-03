import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1b1c22;
  width: 80vw;
`
export const EditorTitleImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  padding: 20px;
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  color: #f8fafc;
  font-size: 30px;
`
export const TitleImage = styled.img`
  width: 35vw;
`
export const TextAreaContainer = styled.div`
  background-color: #25262c;
  margin: 20px;
  border-radius: 10px;
  border: 1px solid #334155;
  height: 80vh;
  width: 35vw;
`
export const TopContainer = styled.ul`
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #334155;
  padding: 10px;
  margin: 0px;
  list-style-type: none;
`

export const BoldBtn = styled.button`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`

export const ItalicBtn = styled(BoldBtn)`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
`

export const UnderlineBtn = styled(BoldBtn)`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
`

export const TextAreaSection = styled.textarea`
  font-weight: ${props => (props.activeBold ? 'bold' : 'normal')};
  font-style: ${props => (props.activeItalic ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.activeUnderline === true ? 'underline' : 'normal'};
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 10px;
  color: #cbd5e1;
  font-size: 20px;
`
