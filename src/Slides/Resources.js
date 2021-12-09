import React from 'react'
import { Heading, Slide, UnorderedList, ListItem } from 'spectacle'
import { useDispatch } from 'react-redux'
import { sectionActivate } from '../navigateSlice'

export const Resources = () => {
  const dispatch = useDispatch()
  const textFontSize = 32
  return (
    <Slide backgroundColor='background'>
      <Heading>
        Resources{' '}
        <span
          className='clickable'
          onClick={() => dispatch(sectionActivate('Resources 📖'))}
        >
          📖
        </span>
      </Heading>
      <UnorderedList>
        <ListItem fontSize={textFontSize}>
          <a
            href='https://reactjs.org/docs/hooks-overview.html'
            target='_blank'
            rel='noreferrer'
            className='text-link'
          >
            React Hooks
          </a>
        </ListItem>
        <ListItem fontSize={textFontSize}>
          <a
            href='https://redux.js.org/introduction/getting-started'
            target='_blank'
            rel='noreferrer'
            className='text-link'
          >
            Redux tutorial
          </a>
        </ListItem>
        <ListItem fontSize={textFontSize}>
          <a
            href='https://codesandbox.io'
            target='_blank'
            rel='noreferrer'
            className='text-link'
          >
            CodeSandbox - Online Playground
          </a>
        </ListItem>
        <ListItem fontSize={textFontSize}>
          <a
            href='https://create-react-app.dev'
            target='_blank'
            rel='noreferrer'
            className='text-link'
          >
            Create React App - Bootstrap Production Apps
          </a>
        </ListItem>
        <ListItem fontSize={textFontSize}>
          <a
            href='https://nodejs.org'
            target='_blank'
            rel='noreferrer'
            className='text-link'
          >
            NodeJS
          </a>
        </ListItem>
        <ListItem fontSize={textFontSize}>
          <a
            href='https://yarnpkg.com'
            target='_blank'
            rel='noreferrer'
            className='text-link'
          >
            Yarn - Package Manager
          </a>
        </ListItem>
      </UnorderedList>
    </Slide>
  )
}
