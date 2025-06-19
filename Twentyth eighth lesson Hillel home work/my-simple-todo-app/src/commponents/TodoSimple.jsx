import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//  схема валідації
const TodoSimpleSchema = Yup.object({
  task: Yup.string()
    .min(5, 'Введіть мінімум 5 символів')
    .required('Поле обовʼязкове'),
});

function TodoSimple() {
  const [todos, setTodos] = useState([]);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h3>Simple ToDo List</h3>

      <Formik
        initialValues={{ task: '' }}
        validationSchema={TodoSimpleSchema}
        onSubmit={(values, { resetForm }) => {
          setTodos([...todos, values.task]); 
          resetForm(); 
        }}
      >
        <Form>
          <Field
            name="task"
            type="text"
            placeholder="Нова задача"
            style={{ padding: '6px', width: '100%' }}
          />
          <div style={{ color: 'red', fontSize: '14px' }}>
            <ErrorMessage name="task" />
          </div>

          <button
            type="submit"
            style={{ marginTop: '10px', padding: '6px 12px' }}
          >
            Додати
          </button>
        </Form>
      </Formik>

      <ul style={{ marginTop: '20px' }}>
        {todos.map((todo, i) => (
          <li key={i}> {todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoSimple;
