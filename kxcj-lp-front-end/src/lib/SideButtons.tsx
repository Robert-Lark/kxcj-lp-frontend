import React from 'react';
import '../styles/sideButtons.css'

type props = {back?: boolean}

function SideButtons(props: props) {
    const { back = false } = props
    return (
        <div className="get-involved-buttons">
            {back ? <a href='/'><button className="button-5">Back</button></a> : <a href='/volunteer'><button className="button-5">Volunteer</button></a>}
            <a href='/submit'><button className="button-5">Submit a PSA</button></a>
            <a href='/becomeadj'><button className="button-5">Become a DJ!</button></a>
            <a href='/donate'><button className="button-5">Donate</button></a>
        </div>
    );
}

export default SideButtons;