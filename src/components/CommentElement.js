import React, { Component } from 'react';
import Rate from 'react-stars';
import img from "../img/man.png";
class CommentElemnet extends Component {
    constructor(props){
        super(props)
        let time_unix=new Date(this.props.time)
        this.state={
            time:time_unix.toLocaleString()
        }
    }
    
    componentWillMount(){
        
    }
    render() {
        return (
            <div>
            {this.props.commentvalue&&
                <div className="comment mb-2 row bg-light border border-info w-100">
                    <div className="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                        <img className="mx-auto img-fluid" src={img}/>
                    </div>
                    <div className="comment-content col-md-11 col-sm-10">
                        <div className="row small comment-meta">
                            <div className="col text-left">
                                {this.props.email}
                                Rating:
                                <Rate
                                    count={5}
                                    value={this.props.rating}
                                    color2= '#ff9900'
                                    edit={false}
                                />
                            </div>
                            <div className="col text-right">
                                {this.state.time}
                            </div>
                        </div>
                        <div className="comment-body">
                            <p>
                                {this.props.commentvalue}
                            </p>
                        </div>
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default CommentElemnet;