import  { FC,ReactNode } from 'react'
import Warning from './Warning'

interface Props{
    children:ReactNode
}

const Popup:FC<Props> = ({children}) => {
  return (
    <div className='green'>
      
        {children}
        
        </div>
  )
}

export default Popup