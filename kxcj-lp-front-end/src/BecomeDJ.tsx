import React from 'react';
import Form from './lib/Form';
import SideButtons from './lib/SideButtons';
import {useQuery, gql} from "@apollo/client"
import ErrorState from './lib/ErrorState';


const SUBMITPSA_QUERY = gql`
    query allBecomeDJ {
        allBecomeDJ {
            heading
            contentRaw
            text
        }
    }
`

function BecomeDJ() {
    const {loading, error, data} = useQuery(SUBMITPSA_QUERY)
    if (loading) return <p>loading...</p>;
    if (error) return <ErrorState error={error}/>;

    const heading = data?.allBecomeDJ[0]?.heading
    const content = data?.allBecomeDJ[1]?.contentRaw[0]?.children[0]?.text
    const formHeader = data?.allBecomeDJ[1]?.text
    const fallback = <span></span>
    return (
        <div className='outer-container'>
        <div className="inner-container">
            <SideButtons back/>
            <div className="content-container">
                <h1>{heading ? heading : 'Become A DJ'}</h1>
                <span>
                    {content ? content : fallback}
                </span>
                <span>
                    <h2>{formHeader ? formHeader : 'Send us your idea for a new program on KXCJ!'}</h2>
                    {/* <BecomeDJForm/> */}
                </span>
            </div>
        </div>
    </div>
    );
}

export default BecomeDJ;