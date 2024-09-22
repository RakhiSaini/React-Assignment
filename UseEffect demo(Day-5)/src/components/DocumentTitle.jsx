import React, { useEffect } from 'react'

function DocumentTitle() {
    useEffect(() => {
        document.title = 'Updated Title';
    
        return () => {
          document.title = 'React App'; // Reset title on unmount
        };
      }, []); // Runs once when the component mounts
  return (
    <div>
      <h1>Document Title Example</h1>
    </div>
  )
}

export default DocumentTitle
