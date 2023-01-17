// import React from "react";
// import { Formik, ErrorMessage } from "formik";
// import * as yup from "yup";
// import moment from "moment";
// import  Button  from "react-bootstrap/Button";
// import  Form  from "react-bootstrap/Form";
// // import TimeSelector from "../TimeSelector/TimeSelector";

// import "./BookingForm.css";

// const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required!"),
//   phone: yup.string().min(8, "*Enter a valid phone number").matches(phoneRegex, "*Enter a valid phone number!").required("*Phone number is required!"),
//   email: yup.string().email("Must be a valid email").max(255).required("*Email is required!"),
//   date: yup.string().required("*Booking date is required!"),
//   ticketNumber: yup.string().required("*Number of ticket  is required!"),
// });

// const BookingForm = ({ onCancel, onConfirm}) => {

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={(values, { resetForm }) => {
//         //submitting data!
//         onConfirm(values);
//         resetForm();
//       }}
//       initialValues={{
//         name: "",
//         phone: "",
//         email: "",
//         date: moment(),
//         ticketNumber: ""  
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, isValid, errors, setFieldValue }) => (
//         <Form
//           noValidate
//           //   validated={!errors}
//           onSubmit={handleSubmit}
//           className="appointmentForm mx-auto p-3 "
//         >
//           <Form.Group className="mb-3">
//             <Form.Label className="fw-bold">Name</Form.Label>
//             <Form.Control type="text" name="name" placeholder="Enter your name" value={values.name} onChange={handleChange} isValid={touched.name && !errors.name} />
//             <div className="Errormessage">
//               <ErrorMessage name="name" />
//             </div>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fw-bold">Phone Number</Form.Label>
//             <Form.Control type="tel" name="phone" placeholder="Phone number" value={values.phone} onChange={handleChange} isValid={touched.phone && !errors.phone} />
//             <div className="Errormessage">
//               <ErrorMessage name="phone" />
//             </div>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fw-bold">Email</Form.Label>
//             <Form.Control type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} />
//             <div className="Errormessage">
//               <ErrorMessage name="email" />
//             </div>
//           </Form.Group>

//           <Form.Group className="mb-3">
//           <Form.Label className="fw-bold">Number of tickets</Form.Label>
//           <select >
//           <Form.Control type="integer" name="ticketnumber" placeholder="Number of Tickets booked" value={values.ticketNumber} onChange={handleChange} isValid={touched.ticketNumber && !errors.ticketNumber} />
//   <option value="placeholder" selected disabled hidden>Number of Tickets booked</option>
//   <option value="option1">1</option>
//   <option value="option2">2</option>
//   <option value="option3">3</option>
//   <option value="option4">4</option>
//   <option value="option5">5</option>
//   <option value="option6">6</option>
//   <option value="option7">7</option>
//   <option value="option8">8</option>
// </select>
// <div className="Errormessage">
//   <ErrorMessage name="ticketNumber"/>

// </div>
// </Form.Group>


//           <div className="d-flex justify-content-around p-2">
//             <Button variant="success" type="submit" className="w-100 me-1" disabled={false}>
//               Confirm Booking
//             </Button>

//             <Button variant="danger" type="button" className="w-100 ms-1" onClick={() => onCancel()}>
//               Cancel
//             </Button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default BookingForm;
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


