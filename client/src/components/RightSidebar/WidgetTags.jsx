import React from 'react'

const WidgetTags = () => {

    const tags =['c', 'css', 'express', 'firbase', 'html', 'java', 'javascript', 'mern', 'mangodb', 'mysql', 'next.js', 'node.js', 'react.js',]

  return (
    <div className='widget-tags'>
        <h4>Watched tags</h4>
        <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))
            }
        </div> 
    </div>
  )
}

export default WidgetTags
