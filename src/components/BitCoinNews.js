import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'

export class BitCoinNews extends Component {
    
    render() {
        return (
            <div>
                <div>
                   
                </div>
                <div className='technews-container'>
                    {
                        // this.props.fetchTechNews.map((data, index) => {
                        //     return (
                        //         <div key={index}>
                        //             <Card style={{ width: '18rem', "margin-bottom": "24px" }}>
                        //                 <Card.Img variant="top" src={data.urlToImage} />
                        //                 <Card.Body>
                        //                     <Card.Title>{data.heading}</Card.Title>
                        //                     <Card.Text>
                        //                         {data.description}
                        //                     </Card.Text>
                        //                     <a variant="primary" href={data.url} target='_blank'>read more</a>
                        //                 </Card.Body>
                        //             </Card>
                        //         </div>
                          //  )
                        })
                    }


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state, "state ..........")
    return {
        fetchTechNews: state.fetchTechNews,
    };
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, null)(BitCoinNews)
