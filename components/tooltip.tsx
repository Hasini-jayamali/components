import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
  return <span style={{ color: 'yellow' }}>Colored</span>
}

// const CustomChild = forwardRef((props, ref) => {
//   return (
//     <div ref={ref}>
//       <div>First line</div>
//       <div>Second line</div>
//     </div>
//   )
// })

function ToolTip ({content,text,placement,arrow}) {
  return (
    <div className='App'>
      <div >
        <Tippy content={content} placement={placement} arrow={arrow}>
          <button>{text}</button>
        </Tippy>
      </div>
      {/* <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredTooltip />} >
          <button>My button</button>
        </Tippy>
      </div> */}
      {/* <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredTooltip />} placement='top-end'>
          <CustomChild />
        </Tippy>
      </div> */}
    </div>
  )
}

export default ToolTip