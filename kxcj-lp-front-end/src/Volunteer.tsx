import React from 'react';
import Form from './Form';
import '../src/styles/innerPages.css';
import SideButtons from './SideButtons';
import {useQuery, gql} from "@apollo/client"

const VOLUNTEER_QUERY = gql`
    query GetAllVolunteer {
        allVolunteer {
            heading
            content
        }
    }
`

function Volunteer() {
    const {loading, error, data} = useQuery(VOLUNTEER_QUERY)
    if (loading) return <p>loading...</p>;
console.log(data)
    return (
        <div className='outer-container'>
        <div className="inner-container">
            <SideButtons back/>
            <div className="content-container">
                <h1>{data?.allVolunteer[0]?.heading}</h1>
                <span>
                    <Form value={''} placeholder={''} name={''} />
                </span>
            </div>
        </div>
    </div>
    );
}

export default Volunteer;