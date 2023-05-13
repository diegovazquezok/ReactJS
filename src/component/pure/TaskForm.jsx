import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TaskForm = ({ onSubmit }) => {
  const initialValues = {
    title: '',
    description: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('El título es obligatorio'),
    description: Yup.string().required('La descripción es obligatoria'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="title">Título:</label>
            <Field type="text" name="title" id="title" />
            <ErrorMessage name="title" />
          </div>

          <div>
            <label htmlFor="description">Descripción:</label>
            <Field as="textarea" name="description" id="description" />
            <ErrorMessage name="description" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Crear tarea
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;