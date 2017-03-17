import React, {Component} from 'react';

class DisplayItem extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substring(0, 20)})
    }

    render() {
        let filteredAddress = this.props.urldata.filter(
            (item) => {
                return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div>
                <h1>Live Search</h1>
                <input type="text" id="searchInput" placeholder="Enter text to search"
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}/>
                <table id="urltable">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Url</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredAddress.map((item) =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.url}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default DisplayItem;