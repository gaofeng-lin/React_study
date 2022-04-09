import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../home';
import Detail from '../detail';
import Link from 'react-router';



class BasicRoute extends React.Component {
    render() {
        return (
            <HashRouter>
        <Switch>
            
            <Route exact path="/:branch?" component={Home}/>
            
            <Route exact path="/detail/:branch1?" component={Detail}/>
        </Switch>
    </HashRouter>

        )
    }
}

// const BasicRoute = () => (
//     <HashRouter>
//         <Switch>
//             <Route exact path="/:branch?" component={Home}/>
            
//             <Route exact path="/detail/" component={Detail}/>
//         </Switch>
//     </HashRouter>
// );

export default BasicRoute;
