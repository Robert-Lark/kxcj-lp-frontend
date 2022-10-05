import React from 'react';
import Form from './lib/Form';
import SideButtons from './lib/SideButtons';
import {useQuery, gql} from "@apollo/client"
import ErrorState from './lib/ErrorState';

const SUBMITPSA_QUERY = gql`
    query allSubmitPSA {
        allSubmitPSA {
            heading
            contentRaw
        }
    }
`

function SubmitPSA() {
    const {loading, error, data} = useQuery(SUBMITPSA_QUERY)
    if (loading) return <p>loading...</p>;
    if (error) return <ErrorState error={error}/>;

    const heading = data?.allSubmitPSA[0]?.heading
    const content = data?.allSubmitPSA[1]?.contentRaw[0]?.children[0]?.text
    const fallback = <span>We broadcast Public Service Announcements (PSA) as a free service to the Illinois Valley community.
                        Before submitting your PSA, time it as you read it aloud; it should be 10-30 seconds .
                        KXCJ reserves the right to edit PSA submissions for brevity and/or clarity.
                        Please submit announcements at least 10 days before the event,
                        so there is ample air time for your PSA to be heard!
                        You can submit the written script for your PSA using the form below.</span>


    return (
        <div className='outer-container'>
        <div className="inner-container">
            <SideButtons back/>
            <div className="content-container">
                <h1>{heading ? heading : 'Public Service Announcements'}</h1>
                <span>
                    {content ? content : fallback}
                </span>
                <span>
                    <Form value={''} placeholder={''} name={''} />
                </span>
            </div>
        </div>
    </div>
    );
}

export default SubmitPSA;