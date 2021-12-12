import React from 'react';
import { Container, Tooltip, Row, Col, Button } from 'reactstrap';
import { useToggle } from '../../hooks/useToggle';
import HeaderLogo from '../../static/images/tcoLogo.svg';
import { CLIENT_TEAM_NAME } from '../../utils/constants';
import ServerSettings from './ServerSettings';
import { FaLink, FaUnlink } from 'react-icons/fa';

const COURSE_URL = "https://cs.colostate.edu/~cs314";
const UNKNOWN_SERVER_NAME = "Unknown";

export default function Header(props) {
    const [cs314ToolTip, setCS314ToolTip] = useToggle(false);
    const [aboutToolTip, setAboutToolTip] = useToggle(false);
    const [serverSettingsOpen, toggleServerSettings] = useToggle(false);
    
    return (
        <div className="full-width header vertical-center">
            <Container>
                <div className="vertical-center">
                    <a href={COURSE_URL} target="_blank">
                     <img className="tco-logo" src={HeaderLogo} alt="TCO Brand Logo" id="cs314-tooltip" /> 
                    </a>
                    <a role="button" onClick={props.toggleAbout} >
                        <h1 className="tco-text-upper" id="about-tooltip">{CLIENT_TEAM_NAME}</h1>
                    </a>
                </div>
                <Tooltip placement ="bottom" isOpen={cs314ToolTip} target="cs314-tooltip" toggle={setCS314ToolTip}>CS 314</Tooltip>
                <Tooltip placement ="bottom" isOpen={aboutToolTip} target="about-tooltip" toggle={setAboutToolTip}>About</Tooltip>
            </Container>
            <ServerInformation toggleServerSettings={toggleServerSettings} serverSettingsOpen={serverSettingsOpen} {...props} />
        </div>
    );
}

function ServerInformation(props) {
    function connectedToValidServer() {
        const serverConfig = props.serverSettings.serverConfig;
        return serverConfig && serverConfig.serverName;
    }
    const serverName = connectedToValidServer() ? props.serverSettings.serverConfig.serverName : UNKNOWN_SERVER_NAME;
    const linkStatusSymbol = connectedToValidServer() ? <FaLink /> : <FaUnlink />;
    const [serverTooltip, setServerTooltip] = useToggle(false);

    return (
        <div className="small-font vertical-center">
            <Container fluid >
                    {linkStatusSymbol}
                    {'\xa0'+ 'Connected to '}
                    &nbsp;
                <small>
                    <Button size="sm" data-testid="serverIcon" id="serverButton" onClick={props.toggleServerSettings}>
                        {serverName}{'\'s Server'}
                    </Button>
                </small>
                <Tooltip placement="bottom" isOpen={serverTooltip} target="serverButton" toggle={setServerTooltip}>Change Server</Tooltip>
                <ServerSettings isOpen={props.serverSettingsOpen} toggleOpen={props.toggleServerSettings} serverSettings={props.serverSettings} processServerConfigSuccess={props.processServerConfigSuccess} />
            </Container>
        </div>
    );
}
