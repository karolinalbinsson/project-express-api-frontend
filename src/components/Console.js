
import React from 'react';

export const Console = ({content}) => {

const jsoncontent = JSON.stringify(content,undefined, 2);

  return (
    <div className="console">
      <pre className="json-data-text">
        {jsoncontent}
      </pre>
    </div>
  )
}