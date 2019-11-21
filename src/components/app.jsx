import React from 'react'
import { Route, Switch } from 'react-router-dom';
import SessionForm from './session/session_form';
import MentorsIndex from './mentor/mentors_index';
const App = () => (
    <div>
        {/* Route declaration */}
        <Switch>
            <Route exact path='/login' component={SessionForm}/>
            <Route exact path='/mentors/index' component={MentorsIndex}/>
        </Switch>

    </div>
)

export default App;