import React, { Component } from 'react';
import {StyledDiv} from './pagination.css';

class Pagination extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentPage: 0
        };
    }

    switchPage = (direction) => {

        if(this.state.currentPage + direction <= 0)
        {
            this.setState({
                currentPage : 0
            });
        }else if(this.state.currentPage + direction <= (this.props.children.length / this.props.pageLimit))
        {
            this.setState({
                currentPage : this.state.currentPage + direction
            });
        }
    }

    render()
    {
        let startPosition = this.state.currentPage*this.props.pageLimit;
        let children = React.Children.toArray(this.props.children);
        let paginatedList = children.slice(startPosition, startPosition + this.props.pageLimit);

        return(
            <div>
                {paginatedList}
                <StyledDiv>
                    <span onClick={()=>{this.switchPage(-1)}}>{"<-"}</span>
                    {this.state.currentPage}
                    <span onClick={()=>{this.switchPage(+1)}}>-></span>
                </StyledDiv>
            </div>
        );
    }
}

export default Pagination;