import React, {  useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormFields";

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange(e){
    setValue(
        e.target.getAttribute('name'),
        e.target.value
      )

  }

  return (
    <>
        <PageDefault>
          
          <h1>Cadastro de categoria: { values.nome }</h1>

          <form 
            onSubmit={function handleSubmit(e) {
              e.preventDefault()
              
              setCategorias([
                ...categorias,
                values
              ])

              setValues(valoresIniciais)
            }}
          >
            <FormField
              label="Nome da categoria" 
              type="text"
              value={values.nome}
              name="nome"
              onChange={handleChange}
            />

            <FormField
              label="Descrição" 
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />

            <FormField
              label="Cor" 
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />

            <button>
              Cadastrar
            </button>

          </form>

          <ul>
            {categorias.map((categoria, indice) => {
              return(
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )})}
          </ul>

          <Link to="/">
              ir para home
          </Link>
        </PageDefault>
    </>
  );
}

export default CadastroCategoria;
