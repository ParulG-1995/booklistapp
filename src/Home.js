import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main'
import Book1 from './router'
import Book2 from './Book2'
import Book3 from './Book3'
import Book4 from './Book4'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './styles.css'


class App extends React.Component{
    render(){
       return(
            <div>      
            <BrowserRouter>
             <Switch>
              <Route path= "/" component={Main} exact/>
              <Route path= "/book1" component={Book1}/>
              <Route path= "/book2" component={Book2}/>
              <Route path= "/book3" component={Book3}/>
              <Route path= "/book4" component={Book4}/>
             </Switch>
            </BrowserRouter>
            </div>
        )
    }

}
export default App;