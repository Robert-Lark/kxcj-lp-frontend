import React from 'react';
import '../src/styles/sideButtons.css'

type props = {back?: boolean}

function SideButtons(props: props) {
    const { back = false } = props
    return (
        <div className="get-involved-buttons">
            {back ? <button className="button-5"><a href='/'>Back</a></button> : <button className="button-5"><a href='/volunteer'>Volunteer</a></button>}
            <button className="button-5"><a href='/submit'>Submit a PSA</a></button>
            <button className="button-5"><a href='/becomeadj'>Become a DJ!</a></button>
            <button className="button-5"><a href='/donate'>Donate</a></button>
        </div>
    );
}

export default SideButtons;