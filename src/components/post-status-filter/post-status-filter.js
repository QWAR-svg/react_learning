import React, { Component } from 'react';
import './post-status.css';
export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
        {
        name: 'all',
        label: 'All'
        },

        {name: 'like',
        label: 'Liked'
        }

        ]
    }
    
    render(){
        
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const claz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={name} 
                onClick= {() => this.props.onFilterSelect(name)}
                className = {`btn ${claz}`}>{label}</button>

            )
        });
        return (

            <div className = "btn-group">
                {buttons}
                </div>
    
        )
    }
}

