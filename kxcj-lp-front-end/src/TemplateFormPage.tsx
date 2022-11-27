import {useLocation} from 'react-router-dom';
import ErrorState from './lib/ErrorState';
import Form from './lib/Form';
import SideButtons from './lib/SideButtons';
import {useQuery} from "@apollo/client"
import './styles/formPages.css'

function TemplateFormPage(props: any) {
    // use location is used to ensure we dont display a link in the side buttons to the page we are currently on
    const location = useLocation();
    const { query, heading, fallBackHeading, content, FallBackBody, formHeading} = props
    const {loading, error} = useQuery(query)

    if (loading) return <p>loading...</p>;
    if (error) return <ErrorState error={error}/>;
    
    return (
        <div className='top-level-container'>
            <SideButtons back currentPage={location.pathname}/>
            <div className='glass-container'>
                <h1>{heading ? heading : fallBackHeading}</h1>
                <span>
                    {content ? content : FallBackBody}
                </span>
                <span className='formHeading'>{formHeading}</span>
                <span className='form-container'>
                    <Form value={''} placeholder={''} formHeading={formHeading} />
                </span>
            </div>
        </div>
    );
}

export default TemplateFormPage;