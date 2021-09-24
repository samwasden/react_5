import React from 'react'

function Image(props) {
    let { url } = props;
    return (
        <div>
            <img src={url} alt='mountains'/>
        </div>
    )
}

export default Image
