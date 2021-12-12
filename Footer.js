import React from 'react';
import {Container, Tooltip, Row} from 'reactstrap';
import { useToggle } from '../../hooks/useToggle';

const COURSE_URL = "https://cs.colostate.edu/~cs314";

export default function Footer(props) {
    const [cs314ToolTip, setCS314ToolTip] = useToggle(false);
    const [aboutToolTip, setAboutToolTip] = useToggle(false);
    

    return (
        <div className="vertical-padding">
          <Container>
              <Row className="justify-content-center" >
                <a href={COURSE_URL}>
                        <h1 className="tco-text-upper" id="cs314-tooltip">CS 314 Site &nbsp;</h1>
                </a>
                    <a role="button" onClick={props.toggleAbout}>
                        <h1 className="tco-text-upper" id="about-tooltip">{' \xa0 '} About Us</h1>
                    </a>
              </Row>
                <Tooltip placement ="bottom" isOpen={cs314ToolTip} target="cs314-tooltip" toggle={setCS314ToolTip}>CS 314</Tooltip>
                <Tooltip placement ="bottom" isOpen={aboutToolTip} target="about-tooltip" toggle={setAboutToolTip}>About</Tooltip>
            </Container>
        </div>
    );
}