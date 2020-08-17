import React from 'react'

class ListView extends React.Component {

    render() {

        return (
            <div>
                {
                    this.props.searchedData.map((data, index) => {
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