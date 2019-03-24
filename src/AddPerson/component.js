import React from "react"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
// import TextField from "@material-ui/core/TextField"
import { Button } from "@material-ui/core/Button"
import { TextField } from "formik-material-ui"

export default () => (
  <div className="add-person">
    <h2>Add Person</h2>
    <Formik
      initialValues={{}}
      validationSchema={Yup.object({
        name: Yup.string()
          .email("email")
          .required("Required"),
      })}
      onSubmit={({ values, actions }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
      render={({ errors, touched }) => (
        <Form>
          <Field name="name" label="Name" component={TextField} />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  </div>
)
