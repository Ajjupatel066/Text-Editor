import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  HomeContainer,
  EditorTitleImage,
  Title,
  TitleImage,
  TextAreaContainer,
  TopContainer,
  BoldBtn,
  ItalicBtn,
  UnderlineBtn,
  TextAreaSection,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderLine: false,
  }

  clickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  clickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  clickUnderLine = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state

    return (
      <AppContainer>
        <HomeContainer>
          <EditorTitleImage>
            <Title>Text Editor</Title>
            <TitleImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </EditorTitleImage>
          <TextAreaContainer>
            <TopContainer>
              <li key="1">
                <BoldBtn
                  type="button"
                  data-testid="bold"
                  onClick={this.clickBold}
                  active={isBold}
                >
                  <VscBold size={25} />
                </BoldBtn>
              </li>
              <li key="2">
                <ItalicBtn
                  type="button"
                  data-testid="italic"
                  onClick={this.clickItalic}
                  active={isItalic}
                >
                  <GoItalic size={25} />
                </ItalicBtn>
              </li>
              <li key="3">
                <UnderlineBtn
                  type="button"
                  data-testid="underline"
                  onClick={this.clickUnderLine}
                  active={isUnderLine}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineBtn>
              </li>
            </TopContainer>
            <TextAreaSection
              rows={35}
              cols={64}
              activeBold={isBold}
              activeItalic={isItalic}
              activeUnderline={isUnderLine}
            />
          </TextAreaContainer>
        </HomeContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
