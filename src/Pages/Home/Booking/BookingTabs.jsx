import React from "react";
import "./bookingtab.css";
import { Nav, Tab } from "react-bootstrap";

export default function BookingTabs() {
  return (
    <div className="container">
     <div className="tab-container">
     <Tab.Container defaultActiveKey='booking' id="book"  transition={false}>
        <Nav variant='underline' fill>
          <Nav.Item>
            <Nav.Link eventKey='booking'>Booking</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='manage'>Manage booking</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='check'>Check in</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='status'>Flight status</Nav.Link>
          </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey='booking'>
               booking Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              maiores soluta nobis perferendis debitis aut quia reprehenderit.
              Q aliquam explicabo illo maiores repellat nisi. Fuga
              laudantium minus illo voluptate.
            </Tab.Pane>
            <Tab.Pane eventKey='manage'>
              Manage Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              maiores soluta nobis perferendis debitis aut quia reprehenderit.
              Quas ipsa aliquam explicabo illo maiores repellat nisi. Fuga
              laudantium minus illo voluptate.
            </Tab.Pane>
            <Tab.Pane eventKey='check'>
            Check Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              maiores soluta nobis perferendis debitis aut quia reprehenderit.
              Quas ipsa aliquam explicabo illo maiores repellat nisi. Fuga
              laudantium minus illo voluptate.
            </Tab.Pane>
            <Tab.Pane eventKey='status'>
             Status Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              maiores soluta nobis perferendis debitis aut quia reprehenderit.
              Quas ipsa aliquam explicabo illo maiores repellat nisi. Fuga
              laudantium minus illo voluptate.
            </Tab.Pane>
          </Tab.Content>
      </Tab.Container>
     </div>
    </div>
  );
}
