import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'

export default class MateItem extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { activity } = this.props;
        return (
            <div style={{ padding: "10px 30px 10px 25px" }}>
                <div style={{ display: "flex",}}><Avatar style={{marginRight:"10px",}} src={activity.person.avatar} />
                    <div style={{ fontStyle: "semibold", fontSize: "16px", width: "100%" }}>
                        {
                            {
                                'added_leads': <div><strong>{activity.person.name}</strong> added new leads to <strong>{activity.target}</strong></div>,
                                'increased_quota': <div><strong>{activity.person.name}</strong> increased <strong>{activity.target}</strong>'s quota</div>,
                                'archived_team': <div><strong>{activity.person.name}</strong> archived the team <strong>{activity.target}</strong></div>
                            }[activity.action]
                        }
                        <div style={{fontSize:"13px", color:"#565656", opacity:"0.5"}}>{activity.created_at}</div>
                    </div>
                </div>

            </div>
        )
    }
}
