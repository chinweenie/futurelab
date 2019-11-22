import React, {Component} from 'react'

export default class MentorProfile extends Component {
    constructor(props) {
        super(props);
        this.profileHash = {
            Kyle: {
                name: "Kyle Carpenter",
                occupation: [
                    {
                        title: "Senior Manager",
                        company: "ManagementWorks",
                        duration: "September 2016 - Current"
                    }, {
                        title: "Graphic Design",
                        company: "Freelance",
                        duration: "September 2014 - AUgust 2016"
                    }, {
                        title: "Senior Executive",
                        company: "Ambank",
                        duration: "September 2011 - September 2014"
                    }
                ],
                location: "INIT College",
                lastSession: "10 May 2019 at 2.30PM",
                profileImage: "32.jpg",
                introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                        "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                        "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                        "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                        "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                        " officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consect" +
                        "etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
                        " aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
                        " ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in v" +
                        "oluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae" +
                        "cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es" +
                        "t laborum.",
                skills: [
                    "Web development", "Branding", "Marketing and Advertising"
                ],
                education: {
                    title: "Bachelor in Advertising",
                    institution: "University of Berkeley",
                    duration: "September 2010 - September 2013"
                }
            },
            Ada: {
                name: "Ada Lovelace",
                occupation: [
                    {
                        title: "Senior Manager",
                        company: "ManagementWorks",
                        duration: "September 2016 - Current"
                    }, {
                        title: "Graphic Design",
                        company: "Freelance",
                        duration: "September 2014 - AUgust 2016"
                    }, {
                        title: "Senior Executive",
                        company: "Ambank",
                        duration: "September 2011 - September 2014"
                    }
                ],
                location: "San Francisco",
                lastSession: "11 May 2019 at 2.30PM",
                profileImage: "81.jpg",
                introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                        "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                        "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                        "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                        "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                        " officia deserunt mollit anim id est laborum.",
                skills: [
                    "Web development", "Branding", "Marketing and Advertising"
                ],
                education: {
                    title: "Bachelor in Advertising",
                    institution: "University of Berkeley",
                    duration: "September 2010 - September 2013"
                }
            },
            Alan: {
                name: "Alan Turing",
                occupation: [
                    {
                        title: "Senior Manager",
                        company: "ManagementWorks",
                        duration: "September 2016 - Current"
                    }, {
                        title: "Graphic Design",
                        company: "Freelance",
                        duration: "September 2014 - AUgust 2016"
                    }, {
                        title: "Senior Executive",
                        company: "Ambank",
                        duration: "September 2011 - September 2014"
                    }
                ],
                location: "London",
                lastSession: "17 May 2019 at 2.30PM",
                profileImage: "36.jpg",
                introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                        "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                        "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                        "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                        "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                        " officia deserunt mollit anim id est laborum.",
                skills: [
                    "Web development", "Branding", "Marketing and Advertising"
                ],
                education: {
                    title: "Bachelor in Advertising",
                    institution: "University of Berkeley",
                    duration: "September 2010 - September 2013"
                }
            },
            Grace: {
                name: "Grace Hopper",
                occupation: [
                    {
                        title: "Senior Manager",
                        company: "ManagementWorks",
                        duration: "September 2016 - Current"
                    }, {
                        title: "Graphic Design",
                        company: "Freelance",
                        duration: "September 2014 - AUgust 2016"
                    }, {
                        title: "Senior Executive",
                        company: "Ambank",
                        duration: "September 2011 - September 2014"
                    }
                ],
                location: "New York",
                lastSession: "14 May 2019 at 2.30PM",
                profileImage: "58.jpg",
                introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
                        "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
                        "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
                        "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
                        "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
                        " officia deserunt mollit anim id est laborum.",
                skills: [
                    "Web development", "Branding", "Marketing and Advertising"
                ],
                education: {
                    title: "Bachelor in Advertising",
                    institution: "University of Berkeley",
                    duration: "September 2010 - September 2013"
                }
            }
        };
    }

    render() {
        const profile = this.profileHash[this.props.match.params.name];
        const skillsLi = profile
            .skills
            .map(skill => {
                return (
                    <li className="skill-li" key={skill}>
                        {skill}
                    </li>
                )
            });
        const occupationLi = profile
            .occupation
            .map(job => {
                return (
                    <li className="job-li" key={job.title}>
                        <div className="work-logo"></div>
                        <div className="work-detail">
                            <h5>{job.title}</h5>
                            <p>{job.company}</p>
                            <p>{job.duration}</p>
                            <p>Show details</p>
                        </div>
                    </li>
                )
            })
        return (
            <div className="mentor-profile">
                <div className="header-bar">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="profile-section">
                    <img src={profile.profileImage} alt=""/>
                    <div className="profile-name">
                        <h3>
                            {profile.name}
                        </h3>
                    </div>
                    <div className="profile-occupation">
                        {profile.occupation[0].title}
                    </div>
                    <div className="profile-location">
                        {profile.location}
                    </div>
                    <div className="profile-action">
                        <div>
                            <i className="far fa-calendar-alt"></i>
                            Book
                        </div>
                        <div>
                            <i className="far fa-comment-dots"></i>
                            Chat
                        </div>
                    </div>
                </div>

                <div className="user-detail">
                    <div className="about-me">
                        <h4>About Me</h4>
                        {profile.introduction}
                    </div>
                    <div className="skills">
                        <h4>My skills</h4>
                        <ul className="skills-ul">
                            {skillsLi}
                        </ul>
                    </div>
                    <div className="working-experience">
                        <h4>Working experience</h4>
                        <ul className="occupation-ul">
                            {occupationLi}
                        </ul>
                    </div>
                    <div className="education">
                        <ul className="education-ul">
                            <li className="education-li">
                                <div className="education-logo"></div>
                                <div className="education-detail">
                                    <h5>{profile.education.title}</h5>
                                    <p>{profile.education.institution}</p>
                                    <p>{profile.education.duration}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
