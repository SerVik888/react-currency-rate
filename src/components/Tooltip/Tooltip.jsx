import React, { useState } from 'react'
import s from './tooltip.module.css'

export const Tooltip = ({ children, text, ...rest }) => {
  const [show, setShow] = useState(false)

  return (
    <div className={s.tooltip_container}>
      <div className={show ? `${s.tooltip_box} ${s.visible}` : s.tooltip_box}>
        {text}
        <span className={s.tooltip_arrow} />
      </div>
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} {...rest}>
        {children}
      </div>
    </div>
  )
}
