import React from 'react';
import SideButtons from './lib/SideButtons';
import './styles/formPages.css'

function TemplateFormPage() {
    return (
        <div className='top-level-container'>
            <SideButtons back/>
            <div className='glass-container'></div>
        </div>
    );
}

export default TemplateFormPage;