import React from "react"

export default class Container extends React.Component
{

    constructor(props)
    {
        super(props);
        this.containerStyle = {
            width: '1400px',
            margin: '0 asuto'
        };
    

    }
    render()
    {
        return(
            <div style = {this.containerStyle}>
                {this.props.children}
            </div>
        )
    }
}