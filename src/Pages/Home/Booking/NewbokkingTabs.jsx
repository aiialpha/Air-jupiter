import React from 'react'
import './bookingtab.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function NewbokkingTabs() {
  return (
    <div className='container'>
    <div className="container tab-container">
    <Tabs
      defaultActiveKey="book"
      id="booking-tabs"
      className="mb-3"
      justify
      transition={false}
      variant='pills'
    >
      <Tab eventKey="book" title="Booking">
        Tab content for Home
      </Tab>
      <Tab eventKey="manage" title="Manage booking">
        Tab content for Profile
      </Tab>
      <Tab eventKey="check" title="Check in">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="status" title="Flight status" >
        Tab content for Contact
      </Tab>
    </Tabs>
    </div>
    </div>
  )
}
