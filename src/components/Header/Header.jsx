import React from "react";
import s from './Header.module.scss'
import { Row, Col } from 'react-bootstrap'

function Header() {
  return (
    <Row>
      <Col>
        <header className={s.root}>Header</header>
      </Col>
    </Row>
  );
}

export default Header;