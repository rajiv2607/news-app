import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

class Loader extends React.Component {
    render() {
        return (
            <>
                <Spinner animation="border" role="status" id='loader'>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </>
        )
    }
}

export default Loader