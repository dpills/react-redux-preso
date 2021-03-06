import React from 'react'
import { Heading, Slide, Notes } from 'spectacle'
import { useDispatch } from 'react-redux'
import { sectionActivate } from '../navigateSlice'

export const VanillaJS = () => {
  const dispatch = useDispatch()

  return (
    <Slide backgroundColor='background'>
      <Heading>
        Vanilla Javascript{' '}
        <span
          className='clickable'
          onClick={() => dispatch(sectionActivate('Vanilla Javascript 🍦'))}
        >
          🍦
        </span>
      </Heading>
      <iframe
        src='https://codesandbox.io/embed/vanilla-js-counter-b91w9?fontsize=14&hidenavigation=1&theme=dark'
        className='code-sandbox'
        title='Vanilla-JS-Counter'
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
      <Notes>
        <ol>
          <li>Lots of boilerplate</li>
          <li>Difficult to organize</li>
          <li>State is tracked in the DOM</li>
        </ol>
      </Notes>
    </Slide>
  )
}
