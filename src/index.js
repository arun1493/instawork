import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import MemberList from './teammanagement/components/MemberList';
import Add from './teammanagement/components/Add';
import Edit from './teammanagement/components/Edit';
import store from './indexReducer';


const app = <BrowserRouter>
    <Provider store={store}>
        <div>
            <Route
                exact path="/" component={() => {
                return (
                        <Redirect to={`/list`} />
                );
            }}
            />
            <Route exact path={'/add'} component={Add}/>
            <Route exact path={'/list'} component={MemberList}/>
            <Route exact path={'/edit'} component={Edit}/>
        </div>
    </Provider>
</BrowserRouter>;

ReactDOM.render(app, document.getElementById('root'));
