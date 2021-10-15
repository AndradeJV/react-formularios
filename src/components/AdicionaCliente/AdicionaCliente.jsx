import React from 'react';
import { Formik, Field } from 'formik';

import './AdicionaCliente.css';

const AdicionaCliente = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initalValues={{ nome: '', email: '', nascimento: '' }}
        validate={values => {
          const errors = {};
          if (!values.nome)
            errors.nome = 'O nome é obrigatório';
          if (!values.email)
            errors.email = 'O email é obrigatório';
          else if (!/^[A-Z0._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'O email é inválido';
          }
          return errors;
        }}
        onSubmit={values => {
          alert(JSON.stringify(values));
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <Field
                id="nome"
                name="nome"
                type="text"
              />
            </div>

            {props.errors.nome && props.touched.nome ? (
              <div>
                {props.errors.nome}
              </div>) : null}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
              />
            </div>

            {props.errors.email && props.touched.email ?
              (<div>
                {props.errors.email}
              </div>) : null}

            <div className="form-group">
              <label htmlFor="nascimento">Data de Nascimento</label>
              <Field
                id="nascimento"
                name="nascimento"
                type="date"
              />
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;
