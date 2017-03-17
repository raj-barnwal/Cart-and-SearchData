import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import ItemList from './components/ItemList'
import TotalPriceContainer from './components/TotalPriceContainer'
import DisplayItem from './components/DisplayItem'

 class App extends Component {
     constructor() {
         super();
         this.state = {
             listOfFruits: [],
             errorText:'',
             weburl:[
                 {
                 id:1,
                 name:'JQuery',
                 url:'www.jquery.io'
             },
                 {
                     id:2,
                     name:'HTML',
                     url:'www.w3schools.com'
                 },
                 {
                     id:3,
                     name:'ReactJS',
                     url:'www.reactjs.com'
                 },
                 {
                     id:4,
                     name:'JavaScript',
                     url:'www.udacity.com'
                 },
                 {
                     id:5,
                     name:'To The New',
                     url:'www.tothenew.com'
                 },
             ]
         }
     }
     addItems(event) {
         const regEx=/[a-zA-Z]-[0-9]/;
         if(regEx.test(event.target.value)) {
             this.setState({
                 text: event.target.value
             })
             this.setState({
                 errorText: ''
             })
             const {listOfFruits}=this.state;

             let inputDetails = {
                 fruit: event.target.value.split('-')[0],
                 price: event.target.value.split('-')[1],
                 qty: 1,
             }
             this.setState({
                 listOfFruits:[...listOfFruits,inputDetails],
             })
         }
         else{
             this.setState({
                 errorText:'You have entered wrong input.'
             })

         }
        /* this.totalValue();*/
         event.target.value='';
 }

     incrementItems(i){
         let {listOfFruits}=this.state;
         let obj=listOfFruits[i];
         obj.qty+=1;
         this.setState({listOfFruits})
        /* this.totalValue();*/
     }

     decrementItems(i){
         let {listOfFruits}=this.state;
         let obj=listOfFruits[i];
         if(obj.qty>1){
             obj.qty-=1;
         }
         this.setState({listOfFruits})
       /*  this.totalValue();*/
     }

     deleteItems(i){
         let {listOfFruits}=this.state;
         listOfFruits.splice(i,1);
         this.setState({listOfFruits})
         this.totalValue();
     }



     /*totalValue(){
        let {listOfFruits}=this.state;
        let temp_total=0;
        for(let temp in listOfFruits){
            temp_total+=temp.qty*temp.price;
        }
         console.log(temp_total)
        this.setState({
            totalprice:temp_total,
        })

     }
*/
    render() {
        return (
            <div>

                <Header />,
                <div id="inputcontainer">
                    <input id="inputbox" type="text" onBlur={this.addItems.bind(this)} placeholder="Enter item name and price with hyphen (-)"/>
                    <h4>{this.state.errorText}</h4>
                </div>
                <ItemList data={this.state.listOfFruits}
                          incItem={this.incrementItems.bind(this)}
                          decItem={this.decrementItems.bind(this)}
                          delete={this.deleteItems.bind(this)}

                />,
                <TotalPriceContainer data={this.state.listOfFruits}/>

                <DisplayItem urldata={this.state.weburl}/>

            </div>
        );
    }

}

export default App;







