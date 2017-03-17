import React, {Component} from 'react';

class TotalPriceContainer extends Component {

    render() {
        let totalAmount = 0;
        {
            this.props.data.map((item) =>
                totalAmount += (item.price * item.qty)
            )
        }
        return (
            <div id="totalvalue">

                <table id="totalamount">

                    <tbody>
                    <tr>
                        <td>Total Amount :</td>
                        <td style={{color: 'red'}}>{totalAmount}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}


export default TotalPriceContainer;
