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
                        open ? <i  className="fa fa-angle-down"></i> : <i  className="fa fa-angle-up"></i>
                    }
                
                    </Col>

                </Row>
            </AccordionItemTitle>
            <AccordionItemBody>
                   <Accordion>
        <AccordionItem>
            <Row>
            <Col xs={2} sm={2} md={2} lg={2}>
                hello
            </Col>           
            <Col xs={10} sm={10} md={10} lg={10}> 
            <div className="card">
            <AccordionItemTitle>
                <Row  onClick={handleClick}>
                    <Col xs={10} sm={10} md={10} lg={10}>
                    <h3>1.2.2017</h3>
                    <div>
                        <p>International Cotton Ltd. 
                            Cotton collected and cleaned
                            Location: Hangzou, China 
                        </p>
                        <p style={{ textDecoration: "underline", color: "blue" }}>View on map</p>
                    </div>

                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                    {
                        open ? <i  className="fa fa-angle-down"></i> : <i  className="fa fa-angle-up"></i>
                    }
                
                    </Col>

                </Row>
            </AccordionItemTitle>
            <AccordionItemBody >
                <Timeline />
            </AccordionItemBody>
            </div>
            </Col>
            </Row>

        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Raw Materials</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Raw Materials</p>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
            </AccordionItemBody>
        </AccordionItem>
       
    </Accordion>
);
export default enhance(AccordionSet);
