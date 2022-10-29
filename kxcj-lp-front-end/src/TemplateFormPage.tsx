import React from 'react';
import {useLocation} from 'react-router-dom';
import ErrorState from './lib/ErrorState';
import Form from './lib/Form';
import SideButtons from './lib/SideButtons';
import {useQuery} from "@apollo/client"
import './styles/formPages.css'

function TemplateFormPage(props: any) {
    const location = useLocation();
    const { query, heading, fallBackHeading, content, FallBackBody} = props
    const {loading, error} = useQuery(query)

    if (loading) return <p>loading...</p>;
    if (error) return <ErrorState error={error}/>;
    
    return (
        <div className='top-level-container'>
            <SideButtons back currentPage={location.pathname}/>
            <div className='glass-container'>
                <h1>{heading ? heading : fallBackHeading}</h1>
                <p>
                    {content ? content : FallBackBody}
                </p>
                <span>
                    <Form value={''} placeholder={''} name={''} />
                </span>
            </div>
        </div>
    );
}

export default TemplateFormPage;