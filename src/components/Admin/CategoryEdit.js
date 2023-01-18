import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin';

const CategoryEdit = (props) => {
  return (
    <Edit title='Edit Category' {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='name'/>
            <TextInput source='description'/>
            <TextInput multiline source='image_url'/>
            <DateInput label='Published' source='created_at'/>
        </SimpleForm>
    </Edit>
  )
}

export default CategoryEdit