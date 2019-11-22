import React from 'react'
import { Route, Switch } from 'react-router-dom';
import SessionForm from './session/session_form';
import MentorsIndex from './mentor/mentors_index';
import MentorProfile from './mentor/mentor_profile';
const App = () => (
    <div>
        {/* Route declaration */}
        <Switch>
            <Route exact path='/' component={SessionForm}/>
            <Route exact path='/mentors/index' component={MentorsIndex}/>
            <Route exact path='/mentors/:name' component={MentorProfile}/>
        </Switch>

    </div>
)

export default App;