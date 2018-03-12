import React from 'react';

export default props => {

    return (
        <div className="form-group l8">
            <label>{props.label}</label>
            <input {...props} className="form-control" />
        </div>
    )
}