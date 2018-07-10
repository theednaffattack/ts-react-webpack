import * as React from 'react';
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik';
import yup from 'yup'
import VirtualizedSelect from 'react-virtualized-select';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

import styled from 'styled-components';

const StyledError = styled.span`
  color: red;
`;

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const MyForm: React.SFC<{} /* whatever */> = (props: any) => {

  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <div className="form-group">
      <h1>Basic Formik Form</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = { email: '', firstName: '', lastName: '' };
          if (!values.firstName) {
            errors.firstName = 'Required';
          }
          if (!values.lastName) {
            errors.lastName = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values: MyFormValues) => alert(JSON.stringify(values))}
        render={(formikBag: FormikProps<MyFormValues>) => (
          <Form>
            <Field
              name="firstName"
              render={({ field, form }: FieldProps<MyFormValues>) => (
                <div>
                  <label>First name</label>
                  <input
                    type="text"
                    {...field}
                    className={`form-control`}
                    placeholder="First Name" />
                  <StyledError>{form.touched.firstName &&
                    form.errors.firstName &&
                    form.errors.firstName}</StyledError>
                </div>
              )}
            />
            <Field
              name="lastName"
              render={({ field, form }: FieldProps<MyFormValues>) => (
                <div>

                  <label>Last name</label>
                  <input type="text" {...field} placeholder="Last Name" />
                  <StyledError>{form.touched.lastName &&
                    form.errors.lastName &&
                    form.errors.lastName}</StyledError>
                </div>
              )}
            />
            <Field
              name="email"
              render={({ field, form }: FieldProps<MyFormValues>) => (
                <div>

                  <label>Email</label>
                  <input type="text" {...field} placeholder="Email" />
                  <StyledError>{form.touched.email &&
                    form.errors.email &&
                    form.errors.email}</StyledError>
                </div>
              )}
            />


            <button type="submit" className="btn btn-outline-primary">
              CLICK ME
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default MyForm;