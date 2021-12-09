import React from 'react'
import { Heading, Slide, Notes } from 'spectacle'
import { useDispatch } from 'react-redux'
import { sectionActivate } from '../navigateSlice'

export const JQuery = () => {
  const dispatch = useDispatch()

  return (
    <Slide backgroundColor='background'>
      <Heading>
        JQuery{' '}
        <span
          className='clickable'
          onClick={() => dispatch(sectionActivate('JQuery 👴🏻'))}
        >
          👴🏻
        </span>
      </Heading>
      <iframe
        src='https://codesandbox.io/embed/jquery-counter-ffu3w?fontsize=14&hidenavigation=1&theme=dark'
        className='code-sandbox'
        title='JQuery-Counter'
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
      <Notes>
        <ol>
          <li>Created 15 years ago</li>
          <li>Helped overcome browser compatability issues</li>
          <li>First popular webframework</li>
          <li>Greatly reduced boilerplate</li>
          <li>Commonly imported with CDN</li>
        </ol>
      </Notes>
    </Slide>
  )
}
