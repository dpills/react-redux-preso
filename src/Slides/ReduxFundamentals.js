import React from 'react'
import { Heading, Slide, Notes } from 'spectacle'
import { useDispatch } from 'react-redux'
import { sectionActivate } from '../navigateSlice'

export const ReduxFundamentals = () => {
  const dispatch = useDispatch()

  return (
    <Slide backgroundColor='background'>
      <Heading>
        Redux Fundametals{' '}
        <span
          className='clickable'
          onClick={() => dispatch(sectionActivate('Redux Fundametals 🧰'))}
        >
          🧰
        </span>
      </Heading>
      <iframe
        src='https://codesandbox.io/embed/redux-fundamentals-example-hl73q?fontsize=14&hidenavigation=1&theme=dark'
        className='code-sandbox'
        title='JQuery-Counter'
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
      <Notes>
        <ol>
          <li>Full Redux Example</li>
        </ol>
      </Notes>
    </Slide>
  )
}
