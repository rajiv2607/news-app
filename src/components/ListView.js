import React from 'react'
import {ListGroup } from 'react-bootstrap'
class ListView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                {
                    this.props.serchData.map((data, index) => {
                        return(
                           <div className='search' key={index}>
                              {data.title}
                               </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default ListView