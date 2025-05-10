import React from "react";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuItem from "../MenuItem";
import { Link } from "react-router-dom";
import MobileMenuList from "./MobileMenuList";

const MobileMenu = ({ categories }) => {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [menu, setMenu] = useState(null);

      useEffect(() => {
            if (show) {
                  setMenu(
                        <MobileMenuList
                              categories={categories}
                              setShow={setShow}
                        />
                  );
            } else {
                  setMenu(null);
            }
      }, [show]);

      return (
            <>
                  <div className="side-menu" onClick={handleShow}>
                        <i className="ri-menu-line"></i>
                  </div>
                  <Offcanvas show={show} onHide={handleClose} backdrop="static">
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title>
                                    <img src="/images/logo.png" alt="logo" />
                              </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>{menu}</Offcanvas.Body>
                  </Offcanvas>
            </>
      );
};

export default MobileMenu;
