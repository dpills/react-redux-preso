import React from 'react'
import { Heading, Slide, Notes } from 'spectacle'
import { useDispatch } from 'react-redux'
import { sectionActivate } from '../navigateSlice'

export const ReactRedux = () => {
  const dispatch = useDispatch()

  return (
    <Slide backgroundColor='background'>
      <Heading>
        React + Redux{' '}
        <span
          className='clickable'
          onClick={() => dispatch(sectionActivate('React + Redux 🎉'))}
        >
          🎉
        </span>
      </Heading>
      <iframe
        src='https://codesandbox.io/embed/react-redux-counter-382mq?fontsize=14&hidenavigation=1&theme=dark'
        className='code-sandbox'
        title='JQuery-Counter'
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
      <Notes>
        <ol>
          <li>Centralizes application state</li>
          <li>Makes state updates more predictable</li>
          <li>Increases observability of state</li>
          <li>
            Organizes common state changes and logic into reusable functions
          </li>
        </ol>
      </Notes>
    </Slide>
  )
}
