import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes,faClipboardCheck,faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTimes,faClipboardCheck,faPlus)

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
       const newItems= [...this.state.items, newItem];
       this.setState({
         items:newItems,
         currentItem:{
           text:'',
           key:''
         }
       })
    }
  }
  deleteItem(key){
    const deletedItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: deletedItems
    })

  }
  render(){
    return(
       <div className="App">
         <header>
           <form id="todo-form" onSubmit={this.addItem}>
             <div id="formdiv"><h2>To-Do List <FontAwesomeIcon className="fa-1x" icon="clipboard-check"></FontAwesomeIcon></h2></div>
             <input type="text" className="additem" placeholder="Add items to do.."
             value={this.state.currentItem.text}
             onChange={this.handleInput}></input>
             <button type="submit" className="add"> <FontAwesomeIcon className="fa-2x" icon="plus"></FontAwesomeIcon></button>
           </form>
         </header>
         <ListItem items ={this.state.items} deleteItem = {this.deleteItem}></ListItem>
       </div>
    );
  }
}

export default App;
