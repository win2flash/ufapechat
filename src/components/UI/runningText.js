import React, { useEffect, useRef, useState } from 'react'
import { Heading } from 'rebass/styled-components'
import { useOnScreen } from '../../hooks/useOnScreen'

const RunningText = ({ children, words, ...props }) => {

  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)

  const [title, setTitle] = useState('');
  const [titileSpeed, setTitileSpeed] = useState(70)
  const [loopNum, setLoopNum] = useState(0)
  const [revertTitle, setRevertTitle] = useState(false)

  const tick = () => {
    if (!revertTitle) {
      let str = words[loopNum].substring(0, title.length + 1)
      setTitle(str)
      if (str.length === words[loopNum].length) {
        setRevertTitle(true)
        setTitileSpeed(1000)
      }
    } else {
      setTitle(title => title.slice(0, -1))
      setTitileSpeed(70)
      if (title.length === 0) {
        setLoopNum(loopNum => loopNum + 1)
        if (loopNum === words.length - 1) {
          setLoopNum(0)
        }
        setRevertTitle(false)
      }
    }
  }

  useEffect(() => {
    if (isOnScreen) {
      const ticker = setInterval(() => {
        tick()
      }, titileSpeed)
      return () => { clearInterval(ticker) }
    }
  }, [isOnScreen, title, revertTitle])


  return (
    <Heading ref={elementRef} {...props}>{children} {title}</Heading>
  )
}

export default RunningText