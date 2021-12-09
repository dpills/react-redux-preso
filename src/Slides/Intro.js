import React from 'react'
import { FlexBox, Heading, Slide } from 'spectacle'
import ciscoLogo from '../img/cisco.svg'
import reactLogo from '../img/react.svg'
import reduxLogo from '../img/redux.svg'

export const Intro = () => {
  return (
    <Slide backgroundColor='background'>
      <FlexBox height='100%' flexDirection='column'>
        <Heading margin='0px' fontSize='120px'>
          <img src={reactLogo} height={100} className='App-logo' alt='redux' />{' '}
          React + Redux{' '}
          <img src={reduxLogo} height={100} className='App-logo' alt='redux' />
        </Heading>
        <Heading margin='0px' fontSize='h2'>
          <i>Modern FrontEnd Development</i>
        </Heading>
        <Heading margin='0px 32px' color='primary' fontSize='h3'>
          <img src={ciscoLogo} height={50} alt='Cisco'></img>
          {'  '}Deon Pillsbury
        </Heading>
      </FlexBox>
    </Slide>
  )
}
