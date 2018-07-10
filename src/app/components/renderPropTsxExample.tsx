import React from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik'

interface MyFormValues {
  firstName: string;
}

const BasicForm = (props: any) => {
  return (

    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={{ firstName: '' }}
        onSubmit={(values: MyFormValues) => alert(JSON.stringify(values))}
        render={(formikBag: FormikProps<MyFormValues>) => (
          <Form>
            <Field
              name="firstName"
              render={({ field, form }: FieldProps<MyFormValues>) => (
                <div>
                  <input type="text" {...field} placeholder="First Name" />
                  {form.touched.firstName &&
                    form.errors.firstName &&
                    form.errors.firstName}
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  )
}

export default BasicForm;