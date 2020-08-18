import React from 'react'

class ListView extends React.Component {

    render() {

        return (
            <div >
                {
                    this.props.searchedData.map((data, index) => {
                        return(
                          <a className='search-results' href={data.url} target="_blank"> <div className='search' key={index}>
                              {data.title}
                               </div></a>
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default ListView