import React from 'react'
import { FlexBox, FullScreen, Progress, Deck, Box } from 'spectacle'
import { Intro } from './Slides/Intro'
import { VanillaJS } from './Slides/VanillaJS'
import { JQuery } from './Slides/JQuery'
import { ReactJS } from './Slides/ReactJS'
import { ReactRedux } from './Slides/ReactRedux'
import './App.css'

export function App() {
  const template = () => (
    <FlexBox
      justifyContent='space-between'
      position='absolute'
      bottom={0}
      width={1}
    >
      <Box padding='0 1em'>
        <FullScreen />
      </Box>
      <Box padding='1em'>
        <Progress />
      </Box>
    </FlexBox>
  )

  return (
    <Deck
      theme={{
        colors: {
          primary: '#00bceb',
          secondary: '#f8f8f8',
          background: '#0d274d',
        },
        fonts: {
          header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
          text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
        },
      }}
      template={template}
    >
      <Intro />
      <VanillaJS />
      <JQuery />
      <ReactJS />
      <ReactRedux />
    </Deck>
  )
}
