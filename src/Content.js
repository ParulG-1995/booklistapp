import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
 

class Content extends React.Component{
    render(){
        const {title,author,serialNo,handleDelete,handleEdit}=this.props;
        return(
            <div className="table-responsive height">
               <tbody className="width">
                    <tr className="width">
                    <th scope="row" className="width"></th>
                    <td className="width text-capitalize">{title}</td>
                    <td className="width text-capitalize">
                    <select>
                        <option value="select">--Select--</option>
                        <option value="horror">Horror</option>
                        <option value="love story">Love story</option>
                        <option value="comic">Comic</option>
                        <option value="drama">Drama</option>
                        <option value="biography">Biography</option>
                        <option value="Autobiography">Autobiography</option>
                    </select>
                    </td>
                    <td className="width text-capitalize">{author}</td>
                    <td className="width">
                    <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen" onClick={handleEdit}  />
                    </span>
                    <span className="text-danger" >
                       <i className="fas fa-trash" onClick={handleDelete} />
                    </span>
                    </div>
                    </td>
                    </tr>
                </tbody>
            </div>
    
             );
    }
}

export default Content;