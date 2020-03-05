import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content'

class Booklist extends React.Component{
    render(){
    const {payload,handleDelete,handleEdit,clearList}=this.props;
    return(
        <>    
        <table className="table table-striped table-bordered table-hover">  
         {
             payload.items.map(item=>{
              return(
                <Content key={item.id}
                title={item.title}
                serialNo={item.serialNo}
                author={item.author}
                handleDelete={()=>handleDelete(item.id)}
                handleEdit={()=>handleEdit(item.id)}
                payload={this.props.payload}/>
                 )
             })
            }
        </table>
        <button type="button" className="btn btn-danger btn btn-block" onClick={clearList}>Clear List</button>
         </>       
    )
    
    }



}

export default Booklist;