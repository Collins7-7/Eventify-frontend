import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from "react-admin"

const EventEdit = (props) => {
  return (
    <Edit title="Edit post" {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
            <TextInput multiline source="image_url"/>
            <TextInput multiline source="description"/>
            <TextInput source="location"/>
            <DateInput source="start_date"/>
            <DateInput source="end_date"/>
            <TextInput source="start_time"/>
            <TextInput source="end_time"/>
            <TextInput source="total_tickets"/>
            <TextInput source="remaining_tickets"/>
            <TextInput source="amount"/>
            <TextInput source="category_id"/>
        </SimpleForm>
    </Edit>
  )
}

export default EventEdit;