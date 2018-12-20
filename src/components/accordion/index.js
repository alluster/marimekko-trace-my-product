import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import { withState, withHandlers, compose } from 'recompose';
import 'font-awesome/css/font-awesome.min.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import Timeline from './Timeline'

const enhance = compose(
    withState('open', 'setOpen', false),
    withHandlers({
    handleClick: props => event => {
        props.setOpen(!props.open)
    }
    })
)

const AccordionSet = ({open, handleClick}) => (
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <Row  onClick={handleClick}>
                    <Col xs={10} sm={10} md={10} lg={10}>
                    <h3>Timeline</h3>

                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                    {
                        open ? <i  className="fa fa-angle-down fa-2x"></i> : <i  className="fa fa-angle-up fa-2x"></i>
                    }
                
                    </Col>

                </Row>
            </AccordionItemTitle>
            <AccordionItemBody>
                   <Accordion>
        <AccordionItem>
            <Row>
            <Col xs={2} sm={2} md={2} lg={2}>
                <div className="progress-bar"></div>
            </Col>           
            <Col xs={10} sm={10} md={10} lg={10}> 
            <Accordion>
            <div className="card">
            <AccordionItem>
                <AccordionItemTitle>
                    <Row  onClick={handleClick}>
                        <Col xs={10} sm={10} md={10} lg={10}>
                        <h3>1.2.2017</h3>
                        <div>
                            <p style={{ textAlign: "left", color: "gray"}}>International Cotton Ltd. 
                                Cotton collected and cleaned
                                Location: Hangzou, China 
                            </p>
                            <p style={{ textDecoration: "underline", color: "blue" }}>View on map</p>
                        </div>

                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                        {
                        open ? <i  className="fa fa-angle-down fa-2x"></i> : <i  className="fa fa-angle-up fa-2x"></i>
                    }
                    
                        </Col>

                    </Row>
                </AccordionItemTitle>
                
                <AccordionItemBody >
                    <Timeline />
                </AccordionItemBody>
                </AccordionItem>
            </div>
            <br/>
            <div className="card">
            <AccordionItem>
                <AccordionItemTitle>
                    <Row  onClick={handleClick}>
                        <Col xs={10} sm={10} md={10} lg={10}>
                        <h3>2.2.2017</h3>
                        <div>
                            <p style={{ textAlign: "left", color: "gray"}}>Transport Company Ltd.
                                Transportation of goods
                                Location: Hangzou, China 
 
                            </p>
                            <p style={{ textDecoration: "underline", color: "blue" }}>View on map</p>
                        </div>

                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                        {
                        open ? <i  className="fa fa-angle-down fa-2x"></i> : <i  className="fa fa-angle-up fa-2x"></i>
                    }
                    
                        </Col>

                    </Row>
                </AccordionItemTitle>
                
                <AccordionItemBody >
                    <Timeline />
                </AccordionItemBody>
                </AccordionItem>
            </div>
            <div className="card">
            <AccordionItem>
                <AccordionItemTitle>
                    <Row  onClick={handleClick}>
                        <Col xs={10} sm={10} md={10} lg={10}>
                        <h3>3.2.2017</h3>
                        <div>
                            <p style={{ textAlign: "left", color: "gray"}}>Marimekko Company Ltd.
                            Colouring of Fabric
                            Location: Hangzou, China
 
                            </p>
                            <p style={{ textDecoration: "underline", color: "blue" }}>View on map</p>
                        </div>

                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                        {
                        open ? <i  className="fa fa-angle-down fa-2x"></i> : <i  className="fa fa-angle-up fa-2x"></i>
                    }
                    
                        </Col>

                    </Row>
                </AccordionItemTitle>
                
                <AccordionItemBody >
                    <Timeline />
                </AccordionItemBody>
                </AccordionItem>
            </div>
            </Accordion>
            </Col>
            </Row>

        </AccordionItem>
        
    </Accordion>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
        <AccordionItemTitle>
                <Row  onClick={handleClick}>
                    <Col xs={10} sm={10} md={10} lg={10}>
                    <h3>Raw Materials</h3>

                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                    {
                        open ? <i  className="fa fa-angle-down fa-2x"></i> : <i  className="fa fa-angle-up fa-2x"></i>
                    }
                
                    </Col>

                </Row>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Raw Materials</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
        <AccordionItemTitle>
                <Row  onClick={handleClick}>
                    <Col xs={10} sm={10} md={10} lg={10}>
                    <h3>Fabric</h3>

                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                    {
                        open ? <i  className="fa fa-angle-down fa-2x"></i> : <i  className="fa fa-angle-up fa-2x"></i>
                    }
                
                    </Col>

                </Row>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Fabric Information</p>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
        <AccordionItemTitle>
                <Row  onClick={handleClick}>
                    <Col xs={10} sm={10} md={10} lg={10}>
                    <h3>Coloring</h3>

                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                    {
                        open ? <i  className="fa fa-angle-down fa-2x"></i> : <i  className="fa fa-angle-up fa-2x"></i>
                    }
                
                    </Col>

                </Row>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Coloring Information</p>
            </AccordionItemBody>
        </AccordionItem>

    </Accordion>
);
export default enhance(AccordionSet);
