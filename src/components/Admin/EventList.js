import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from "react-admin"

export const EventList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="image_url"/>
            <TextField source="description"/>
            <TextField source="location"/>
            <DateField source="start_date"/>
            <DateField source="end_date"/>
            <TextField source="start_time"/>
            <TextField source="end_time"/>
            <TextField source="total_tickets"/>
            <TextField source="remaining_tickets"/>
            <TextField source="amount"/>
            <TextField source="category_id"/>
            <EditButton basePath="/events"/>
            <DeleteButton basePath="/events"/>
        </Datagrid>
    </List>
  )
}

export default EventList