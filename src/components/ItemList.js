import React, { Component } from 'react';

class ItemList extends Component {

    render() {
        return (
            <div id="itemshow">
                <table id="itemlist">
                    <caption>Item Details</caption>
                    <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Items (+)&nbsp;&nbsp;</th>
                        <th>Items (-)</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data.map((item,i) =>

                        <tr key={i}>
                            <td>{item.fruit}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td><span className="glyphicon glyphicon-plus" onClick={this.props.incItem.bind(this,i)}></span></td>
                            <td><span className="glyphicon glyphicon-minus" onClick={this.props.decItem.bind(this,i)}></span></td>
                            <td onClick={this.props.delete.bind(this,i)}>
                                <span id="del" className="glyphicon glyphicon-remove-circle"></span>
                            </td>
                        </tr>

                        )}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default ItemList;

