import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { i18nManager } from '@shipyardsuite/i18n-manager';

import { 
    Grid,
    Container,
    Header,
    Image,
    Card
} from 'semantic-ui-react';

//import './Layout.sass';

class Layout extends React.Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            language: navigator.language.slice(0,2) || 'en'
        };

        this.i18nManager = new i18nManager(this.state.language);
    }

    render() 
    {
        return (
            <Container fluid>
                <Grid style={{ height: '100vh' }}>
                    <Grid.Column mobile={16} computer={3}>
                        A
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={13}>
                        <Header as='h2'>
                            ShipyardSuite Documentation
                        </Header>

                        <Card.Group centered>

                            <Card>
                                <Image src={`https://via.placeholder.com/200x100?text=${"Category+Title"}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>category title</Card.Header>
                                    <Card.Description>
                                        This is a description
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Image src={`https://via.placeholder.com/200x100?text=${"Category+Title"}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>category title</Card.Header>
                                    <Card.Description>
                                        This is a description
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Image src={`https://via.placeholder.com/200x100?text=${"Category+Title"}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>category title</Card.Header>
                                    <Card.Description>
                                        This is a description
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Image src={`https://via.placeholder.com/200x100?text=${"Category+Title"}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>category title</Card.Header>
                                    <Card.Description>
                                        This is a description
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Image src={`https://via.placeholder.com/200x100?text=${"Category+Title"}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>category title</Card.Header>
                                    <Card.Description>
                                        This is a description
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Image src={`https://via.placeholder.com/200x100?text=${"Category+Title"}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>category title</Card.Header>
                                    <Card.Description>
                                        This is a description
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Image src={`https://via.placeholder.com/200x100?text=${"Category+Title"}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>category title</Card.Header>
                                    <Card.Description>
                                        This is a description
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Image src={`https://via.placeholder.com/200x100?text=${"Category+Title"}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>category title</Card.Header>
                                    <Card.Description>
                                        This is a description
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.array
};

export default withRouter(Layout);

//{/* B */}
//{/* {this.props.children} */}
