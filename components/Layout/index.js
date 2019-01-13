
import Nav from '../Nav';
import MyHead from '../MyHead';
import Title from '../Title';

import '../root.css';
import './style.css';

export default (props) => (
    <div>
        <MyHead />
        <div className="layout">
            <Nav active={props.page} />
            <Title>{props.title}</Title>
            {props.children}
        </div>
    </div>
);
