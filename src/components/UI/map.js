import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useOnScreen } from '../../hooks/useOnScreen';

const StyledDiv = styled.div`
  position: relative;
  & iframe{
    pointer-events:  ${props => props.hide ? 'none!important' : 'inherit!important'} ;
  }
`

const Map = () => {

  const [hide, setHide] = useState(true)
  const [load, setLoad] = useState('')

  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)
  const map_url = 'https://yandex.ru/map-widget/v1/?um=constructor%3A1c63538db4431c3892ae375c44fbc1e4376289dce05ff24bfb32949075d0f584&amp;source=constructor';

  useEffect(() => {
    if (isOnScreen) setLoad(map_url)
  }, [isOnScreen]);

  return (
    <StyledDiv ref={elementRef} hide={hide} onClick={() => setHide(hide => false)}>
      <iframe title="map" src={load} width="100%" height="600" frameBorder="0"></iframe>
    </StyledDiv>
  )
}

export default Map