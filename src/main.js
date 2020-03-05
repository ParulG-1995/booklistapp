import React from 'react'
import ReactDOM from 'react-dom'
import uuid from 'uuid'
import Input from './Input'
import Booklist from './List'
import { NavLink } from "react-router-dom";

class Main extends React.Component{
    constructor(props) {
       super(props)
       this.state={
           items:[],
           item:'',
           author:'',
           id:uuid(),
           editItem:false,
           showingAlert:false,
           showingAlerts:false,
           //serialNo: '1',
           willClear:false,
           search:''
           }
    }

    handleChange = (e) => {
         this.setState({
            item:e.target.value            
        })
    }
    
    handleChange2 = (e) => {
        this.setState({
            author:e.target.value
        })
    }
     
    handleChanges = (e) => {
        this.setState({
            search:e.target.value
        }, 
     )}
    
    handleSubmit =(e) => {
        e.preventDefault();
        const newItem = {
            id:this.state.id,
            title:this.state.item,
            genre:this.state.genre,
            author:this.state.author
           }
        
        const updatedItem = [...this.state.items,newItem];
        
            this.setState({
            items:updatedItem,
            id:uuid(),
            author:'',
            genre:'',
            item:'',
            editItem:false,
            //serialNo:serialNo+'1'
        })
    }
    handleEdit=(id)=>{
        const filteredItems=this.state.items.filter(item=>item.id!==id)
        const selectedItem=this.state.items.find(item=>item.id==id)
        this.setState({
            items:filteredItems,
            item:selectedItem.title,
            author:selectedItem.author,
            editItem:true,
            id:id
        })
      }
      
    handleClicks=()=>{
        let search = this.state.search;
            const searchItems=this.state.items.filter(item => item.title == search)
            this.setState({
                 items:searchItems
                })
              } 

     handleClick=()=>{
         this.setState({
             showingAlerts:true
         });
         setTimeout(()=>{
             this.setState({
             showingAlerts:false
            });
        },1500
         )
        }  

    handleDelete=(id)=>{
        const filteredItems = this.state.items.filter(item=> item.id!==id)
        this.setState({
            items:filteredItems,
            showingAlert:true
        });
        setTimeout(()=>{
            this.setState({
                showingAlert:false
            })
        }, 1500)
    }

    clearList=()=>{
        this.setState({
            items:[],
            willClear:true
        })
        setTimeout(()=>{
            this.setState({
                willClear:false
            });
        },1500)
    }

 render(){
     let mess='';
     if (this.state.showingAlert){
        mess=<div className="alert alert-danger">
          <strong>Book deleted successfully!!</strong>
        </div>
     }
    if (this.state.showingAlerts){
        mess=<div className="alert alert-success">
          <strong>Book added successfully!!</strong>
        </div>
     }
    if (this.state.willClear){
        mess=<div className="alert alert-danger">
          <strong>List cleared successfully!!</strong>
        </div>
     }
    
    return(
         <div className="container">
           <div className="body">
             {mess}
           </div> 
            <i className="fas fa-search">
            <input placeholder="Search book.." onChange={this.handleChanges}/>
            <button type="submit" onClick={this.handleClicks}>Enter</button>
           </i>           
         <div className="row">
          <div className="col-12 col-mx-auto mt-3 text-center">
          <h3 style={{color: "green"}}className="text-center">Add Books</h3>
         <Input payload={this.state}
         handleClick={this.handleClick}
         handleChange={this.handleChange}
         handleChange2={this.handleChange2}
         handleSubmit={this.handleSubmit}/>
         <h3 style={{color: "green"}} className="mt-4 text-center">List of books</h3>
         <table className="table table-striped table-bordered table-hover">
         <thead className="table-item justify-content-between my-2 thead-dark">
            <tr>
                <th scope="col-lg-1">Sr No.</th>
                <th scope="col-lg-3">Title</th>
                <th scope="col-lg-3">Genre</th>
                <th scope="col-lg-3">Author</th>
                <th scope="col-lg-2">Actions</th>
            </tr>
         </thead>
         <tbody>
             <tr>
             <th scope="row">1</th> 
             <td> 
                <NavLink to="/book1">Two States</NavLink> 
             </td>
             <td></td>
             <td></td>
             <td></td>
             </tr>
             <tr>
             <th scope="row">2</th>
             <td><NavLink to="/book2">I too had a love story</NavLink></td>
             <td></td>
             <td></td>
             <td></td>
             </tr>
             <tr>
             <th scope="row">3</th>
             <td><NavLink to="/book3">Goddan</NavLink></td>
             <td></td>
             <td></td>
             <td></td>
             </tr>
             <tr>
             <th scope="row">4</th>
             <td><NavLink to="/book4">Carrie</NavLink></td>
             <td></td>
             <td></td>
             <td></td>
             </tr>
         </tbody>
         </table> 
        <Booklist payload={this.state}
         clearList={this.clearList}
         handleDelete={this.handleDelete}
         handleEdit={this.handleEdit}/>
        </div>
        </div>
        </div>
         );
 }
}
export default Main;