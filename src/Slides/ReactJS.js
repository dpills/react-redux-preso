import React from 'react'
import { Heading, Slide, Notes } from 'spectacle'
import { useDispatch } from 'react-redux'
import { sectionActivate } from '../navigateSlice'

export const ReactJS = () => {
  const dispatch = useDispatch()

  return (
    <Slide backgroundColor='background'>
      <Heading>
        React{' '}
        <span
          className='clickable'
          onClick={() => dispatch(sectionActivate('React ✨'))}
        >
          ✨
        </span>
      </Heading>
      <iframe
        src='https://codesandbox.io/embed/react-counter-wtp5k?fontsize=14&hidenavigation=1&theme=dark'
        className='code-sandbox'
        title='JQuery-Counter'
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
      <Notes>
        <ol>
          <li>Created and supported by Facebook</li>
          <li>One of the most popular JS Libraries</li>
          <li>Allows for better organization of Components</li>
          <li>No Longer stores state in the DOM</li>
          <li>Utilizes a virtual DOM and Reacts to changes in state</li>
          <li>One way data flow, top down</li>
        </ol>
      </Notes>
    </Slide>
  )
}
