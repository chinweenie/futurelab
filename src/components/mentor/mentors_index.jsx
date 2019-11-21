import React, {Component} from 'react'

export default class MentorsIndex extends React.Component {
    render() {
        return (
            <div className="mentor-index">
                <div className="title">
                    <div>
                        Entrepreneurs Malaysia
                    </div>
                    <div>
                        <img src="resume.jpg" alt=""/>
                    </div>

                </div>
                <div className="upcoming-event">
                    <div className="event-box">
                        <div className="left-section">
                            24 OCT
                        </div>
                        <div className="right-section">
                            <p>UPCOMING</p>
                            <h4>Edward Jackson</h4>
                            <i className="far fa-clock"></i>10.00am - 10.15am
                            <div className="action-row">
                                <i className="fas fa-undo"></i>Reschedule
                                <i className="fas fa-times"></i>Cancel
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    Your active sessions
                    <div className="active-sessions-carousel">
                        
                    </div>
                </div>
                <div>
                    Mentors in portal
                    <div className="mentors-carousel">

                    </div>
                </div>
                <div className="navbar">
                    <ul>
                        <li><i className="fa fa-home"></i>Home</li>
                        <li className="chat"><i className="far fa-comment-alt"></i><i class="fa fa-circle"></i>Chat</li>
                        <li className="appointment"><i className="fa fa-calendar-check-o"></i><i class="fa fa-circle"></i>Appointments</li>
                        <li><i className="fa fa-bell-o"></i>Notifications</li>
                        <li><i className="fa fa-user-o"></i>Members</li>
                    </ul>
                </div>

            </div>
        )
    }
}
