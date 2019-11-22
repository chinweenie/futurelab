import React, {Component} from 'react'
import Slide from '../carousel/slide'
import Slider from '../carousel/slider';

export default class MentorsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.activeSessions = [
            {
                name: "Kyle Carpenter",
                occupation: "Student",
                location: "INIT College",
                lastSession: "10 May 2019 at 2.30PM",
                profileImage: "32.jpg"
            }, {
                name: "Ada Lovelace",
                occupation: "Tutor",
                location: "San Francisco",
                lastSession: "11 May 2019 at 2.30PM",
                profileImage: "81.jpg"
            }, {
                name: "Alan Turing",
                occupation: "Computer Scientist",
                location: "London",
                lastSession: "17 May 2019 at 2.30PM",
                profileImage: "36.jpg"
            }, {
                name: "Grace Hopper",
                occupation: "Academia researcher",
                location: "New York",
                lastSession: "14 May 2019 at 2.30PM",
                profileImage: "58.jpg"
            }
        ];
        this.mentors = [
            {
                name: "Brian",
                profile: "96.jpg"
            },
            {
                name: "Devon",
                profile: "47.jpg"
            },
            {
                name: "Kay",
                profile: "66.jpg"
            },
            {
                name: "Wanda",
                profile: "42.jpg"
            },
            {
                name: "Becky",
                profile: "43.jpg"
            },
            {
                name: "Margie",
                profile: "79.jpg"
            }
        ]
        this.toggleName = this
            .toggleName
            .bind(this);
    }

    toggleName(event) {
        event.preventDefault();
        const name = document.getElementsByClassName("name")[0];
        name
            .classList
            .toggle("blue");
        setTimeout(() => {
            name
                .classList
                .toggle("blue");
        }, 300);
    }

    render() {
        const activeSessionsLi = this
            .activeSessions
            .map(session => {
                return (
                    <li className="active-session-li" onClick={this.toggleName}>
                        <div className="profile">
                            <img src={session.profileImage} alt=""/>
                            <i className="fas fa-comment"></i>
                        </div>
                        <div className="name">
                            {session.name}
                        </div>
                        <div className="occupation">
                            {session.occupation}
                        </div>
                        <div className="location">
                            {session.location}
                        </div>
                        <div className="last-session">
                            <p>Last session</p>
                            {session.lastSession}
                        </div>
                        <div className="create">
                            CREATE APPOINTMENT
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </li>
                )
            });

            const mentorsLi = this.mentors.map(mentor => {
                return (
                    <li className="mentor-li">
                        <img src={mentor.profile} alt=""/>
                        {mentor.name}
                    </li>
                )
            })
            
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
                <div className="upcoming-event" onClick={this.toggleName}>
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
                <div className="active-sessions">
                    <p>
                        Your active sessions
                    </p>
                    <div className="active-sessions-carousel">
                        <Slider items={activeSessionsLi}/>
                    </div>
                </div>
                <div className="mentors-list-section">
                    <p>
                        Mentors in portal
                    </p>
                    <div className="mentors-carousel">
                        {mentorsLi}
                    </div>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <i className="fa fa-home"></i>Home</li>
                        <li className="chat">
                            <i className="far fa-comment-alt"></i>
                            <i className="fa fa-circle"></i>Chat</li>
                        <li className="appointment">
                            <i className="fa fa-calendar-check-o"></i>
                            <i className="fa fa-circle"></i>Appointments</li>
                        <li>
                            <i className="fa fa-bell-o"></i>Notifications</li>
                        <li>
                            <i className="fa fa-user-o"></i>Members</li>
                    </ul>
                </div>

            </div>
        )
    }
}
