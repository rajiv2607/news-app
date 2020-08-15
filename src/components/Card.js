import React from 'react'

class Card extends React.Component {

    constructor(props) {
        super(props)
    }

     normalizeDate(timestamp) {
        let date = timestamp.split("T")
        return (
            "Time : " + date[0] + "      " +  date[1].substr(0,date[1].length-1)
        )
    }

    render() {
        return (

            <div className='news-container'>
                {
                    this.props.fetchedData.map((data, index) => {
                        return (
                            <div class="card mb-3" style={{ "max-width": "75rem" , "box-shadow": "1px 1px 1px"}}>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={data.urlToImage} class="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5><a  href = {data.url} target = "_blank"  class="card-title">{data.title}</a></h5>
                                            <label class="card-text">{data.description}</label>
                                            <p class="card-text">{data.content}</p>
                                            <p class="card-text"><small class="text-muted">{this.normalizeDate(data.publishedAt)}</small></p>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}

export default Card