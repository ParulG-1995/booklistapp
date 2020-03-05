import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";

class Input extends React.Component{
    render(){
        const{handleChange,handleClick, handleChange2,handleSubmit,payload}=this.props
        return(
           <div className="card mt-5" >
            <br/>
            <h4 style={{color: "red"}} className="text-center font-italic">Book</h4>
            <form onSubmit={handleSubmit}>                        
                <div className="card-body">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary">
                                    <i className="fas fa-book"/>
                                </div>
                            </div>
                            <input type="text" placeholder="Add book here.." className="form-control" value={payload.item} 
                            onChange={handleChange}/>
                        </div>
                </div>
                
                 <h4 style={{color: "red"}} className="text-center font-italic">Author</h4>
                 <div className="card-body">
                  <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary">
                               <i className="fas fa-book"/>
                           </div>
                       </div>
                       <input type="text" placeholder="Add author here.." className="form-control" value={payload.author} 
                       onChange={handleChange2}/>
                   </div>
                 </div>   
               <button type="submit" className={
                 payload.editItem ? "btn btn-success btn btn-block mt-1":"btn btn-primary btn btn-block mt-1"} onClick={handleClick} >
                {payload.editItem ? "Edit book" : "Add book"} </button>  
            </form>
          </div>
        )
    }
}

export default Input;