import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

/**
 * Spinned wwhite we are fetching data
 */
class Loader extends React.Component {
    render() {
        return (
            <>
                <Spinner animation="border" role="status" id='loader'>
                    <span  id ="spinner"className="sr-only">Loading...</span>
                </Spinner>
            </>
        )
    }
}

export default Loader