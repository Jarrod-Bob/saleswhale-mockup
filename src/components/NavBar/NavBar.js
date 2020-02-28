import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, TextField, Avatar } from '@material-ui/core'
import BreadcrumbsNav from './components/BreadcrumbsNav'
import MenuNotif from './components/MenuNotif'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "current_user": {
                "id": 4,
                "name": "John",
                "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040",
                "notifications_count": 5
            }
        }
    }
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <AppBar position="relative" elevation="0"  style={{ background: "#FFFFFF", borderStyle:"none none solid none", borderWidth:"1px", borderColor:"#E2e2e2" }}>
                    <div className="title" style={{display: "flex", color: "#1A1919", fontSize: "18px", padding: "0px 0px 0px 10px",marginRight:"40px" }}>
                        <span style={{ padding: "29px 30px 0 30px",display:"inline-block",position:"relative",  borderStyle: "none solid none none", borderColor: "#E2E2E2", borderWidth: "1px", width: "160px", height: "80px", textAlign: "center", fontStyle: "Semibold", opacity: "0.5", color: "#1A1919" }}>
                            <strong style={{margin:"auto"}}>NARWHAL</strong>
                        </span>
                        <span style={{ display: "inline-block", margin: "auto 0px auto 0px", width: "100px", textAlign: "center" }}>
                            <BreadcrumbsNav /></span>
                        <span style={{ marginLeft: "auto", marginTop: "auto", marginBottom: "auto", padding: "20px 30px 20px 20px" }}><MenuNotif /></span>
                        <span style={{ display: "flex", marginTop: "auto", marginBottom: "auto", fontSize:"14px",opacity:"0.7" }}><strong>Hello, {this.state["current_user"].name}</strong></span>
                        <Avatar style={{margin:"auto 10px"}} src={this.state["current_user"].avatar} />
                        <svg style={{margin:"auto 0px"}} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M0.757324 5H9.24261L4.99996 9.24264L0.757324 5Z" fill="black"/>
</svg>

                    </div>
                </AppBar>
            </div>
        )
    }
}
