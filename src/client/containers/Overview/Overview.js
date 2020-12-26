import React from 'react';

//import { Button, Form } from 'semantic-ui-react';

import { i18nManager } from '@shipyardsuite/i18n-manager';

export default class Overview extends React.Component 
{
    constructor(props) 
    {
        super(props);
        
        this.state = {
            language: navigator.language.slice(0,2) || 'en'
        };

        this.i18nManager = new i18nManager(this.state.language);
    }
    
    componentDidMount() 
    {
        
        //document.title = `ShipyardSuite | ${ this.i18nManager.message('documentation.category.document.title') }`;
    }

    render()
    {
        return (
            <div>HOME</div>
        );
    }
}
