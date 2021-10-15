import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import './AdicionaCliente.css';

const AdicionaCliente = () => {

  const esquemaValidacao = yup.object({
    nome: yup.string()
      .required('O nome é obrigatório')
      .min(2, 'O nome deve ter no mínimo dois caracteres')
      .max(45, 'O nome deve ter no máximo 45 caracteres'),

    email: yup.string()
      .required('O email é obrigatório')
      .email('O email é inválido'),

    nascimento: yup.string()
      .required('A data de nascimento é obrigatória')
      .max(new Date(), 'Você não pode ter nascido no futuro!')
  });

  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initalValues={{ nome: '', email: '', nascimento: '' }}
        validationSchema={esquemaValidacao}
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
