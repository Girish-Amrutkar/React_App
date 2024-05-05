import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Data from "./Data.json";
import "./profile1.css";

export default class Task extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profiles : []
        }
    }

    componentDidMount() {
        axios.get("./Data.json").then(
            (res) => {
                console.log(res.data);
                this.setState({
                    profiles: res.data
                })
            }
        ).catch(() => {
            console.log("Data Not Found");
        })
    }
    render() {
        let {profiles} = this.state;
        return (
            <React.StrictMode>
                {
                profiles.length ? profiles.map((pro) => {
                    return <div className="cards">
                        <div className="card">
                            <img src={pro.img} alt="" />
                            <div className="card-body">
                                <span className="card-category">{pro.name}</span>
                                <h3 className="title">{pro.country}</h3>
                                <a href={pro.t20}>+
                                    <button>View Profile</button>
                                </a>
                            </div>
                        </div>
                    </div>
                }) : null
            }
            </React.StrictMode>
        )
    }
}
