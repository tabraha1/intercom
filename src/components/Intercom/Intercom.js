import React, { Component } from 'react';
import NewSingle from './NewSingle';

class Intercom extends Component {
    // create and initliaze state
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    // life-cycle method. Runs after component has been rendered
    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=07b0f91dcdb24dcf901d936fdb779ab1';

        // es6 promise
        fetch(url)
            // once it receives a response
            .then((response) => {
                // return reponse as json
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error))
    }

    renderItems(){
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default Intercom;
