import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import icon from '../../assets/stack-overflow.svg'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width='18'/>
                    <p>Introducing the overflow ofline project.</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width='18'/>
                    <p>He helped build .NET and VS Code — Now’s he working on Web3 (Ep. 499)</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="comment" width='18'/>
                    <p>The 2022 Community-a-thon has begun!</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="comment" width='18'/>
                    <p> Mobile app infrastructure being decommissioned</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={icon} alt="icon" width='18'/>
                    <p>Collectives Update: Recognized Members, Articles, and GitLab</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                   <p>14</p>
                    <p>Proper procedure to take when a combative notice is added to a question</p>
                </div>
            </div>
        </div>    
    )
}

export default Widget
