import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import moment from "moment";

import "./BookingForm.css";

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

const schema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  phone: yup.string().min(8, "*Enter a valid phone number").matches(phoneRegex, "*Enter a valid phone number!").required("*Phone number is required!"),
  email: yup.string().email("Must be a valid email").max(255).required("*Email is required!"),
  date: yup.string().required("*Booking date is required!"),
  ticketNumber: yup.string().required("*Number of ticket  is required!"),
});

const BookingForm = ({ onCancel, onConfirm}) => {

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        //submitting data!
        onConfirm(values);
        resetForm();
      }}
      initialValues={{
        name: "",
        phone: "",
        email: "",
        date: moment(),
        ticketNumber: ""  
      }}
    >
      {({ handleSubmit, handleChange, values, touched, isValid, errors, setFieldValue }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
          className="appointmentForm"
        >
          <div className="form-group">
            <label className="fw-bold">Name</label>
            <input type="text" name="name" placeholder="Enter your name" value={values.name} onChange={handleChange} className={touched.name && !errors.name ? "valid" : ""}/>
            <div className="Errormessage">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold">Phone Number</label>
            <input type="tel" name="phone" placeholder="Phone number" value={values.phone} onChange={handleChange} className={touched.phone && !errors.phone ? "valid" : ""}/>
            <div className="Errormessage">
              <ErrorMessage name="phone" />
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold">Email</label>
            <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} className={touched.email && !errors.email ? "valid" : ""}/>
            <div className="Errormessage">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="form-group">
            <label className="fw-bold">Number of tickets</label>
          <select className="form-control" name="ticketNumber" value={values.ticketNumber} onChange={handleChange}>
            <option value="" disabled selected>Number of Tickets booked</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            ...
          </select>
          <div className="Errormessage">
              <ErrorMessage name="ticketNumber" />
            </div>
        </div>
          <div className="form-group">
            <button type="submit" className="button confirm">Book Event</button>
            <button type="button" className="button cancel" onClick={onCancel}>Cancel Booking</button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default BookingForm;


