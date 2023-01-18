import React from 'react';
import {Create, SimpleForm, TextInput, DateInput} from "react-admin"

const CategoryCreate = (props) => {
  return (
   <Create title='Create a Category' {...props}> 
   <SimpleForm>
    <TextInput source='name'/>
    <TextInput source='description'/>
    <TextInput multiline source='image_url'/>
    <DateInput label='Published' source='created_at'/>
   </SimpleForm>
 </Create>
  )
}

export default CategoryCreate