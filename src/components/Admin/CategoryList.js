import React from 'react';
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from "react-admin";

const CategoryList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='name'/>
            <TextField source='description'/>
            <TextField source='image_url'/>
            <DateField source='created_at'/>
            <EditButton basePath="/categories"/>
            <DeleteButton basePath='/categories'/>
        </Datagrid>
    </List>
  )
}

export default CategoryList;