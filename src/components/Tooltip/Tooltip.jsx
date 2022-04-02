import React, { useState } from 'react'
import s from './tooltip.module.css'

export const Tooltip = ({ children, text, ...rest }) => {
  const [show, setShow] = useState(false)
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  })

  const handleMouseMove = e => {
    setMousePosition({ left: e.pageX, top: e.pageY })
  }

  return (
    <div className={s.tooltip_container} onMouseMove={e => handleMouseMove(e)}>
      <div
        className={show ? `${s.tooltip_box} ${s.visible}` : s.tooltip_box}
        style={{ left: mousePosition.left - 10, top: mousePosition.top + 25 }}
      >
        {text}
        <span className={s.tooltip_arrow} />
      </div>
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} {...rest}>
        {children}
      </div>
    </div>
  )
}
