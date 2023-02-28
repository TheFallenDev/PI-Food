import { useState } from "react";
import { useSelector } from "react-redux";
import validate from "./validators";
import style from "./Form.module.css"

const Form = () => {
    const [checkedDiets, setCheckedDiets] = useState([])
    const diets = useSelector( state=> state.diets);

    const [form,setForm] = useState({
        title:"",
        summary:"",
        healthScore:"",
        instructions:"",
        diets: [],
    });

    const [errors,setErrors] = useState({
        title:"",
        summary:"",
        healthScore:"",
        instructions:"",
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        validate({
          ...form,
          [property]:value
        },errors,setErrors);
        setForm({
          ...form,
          [property]:value
        });
    };

    const checkboxChangeHandler = (event) => {
      const { value, checked} = event.target;
      if(checked) setCheckedDiets([...checkedDiets,value])
      else setCheckedDiets(checkedDiets.filter(diet => diet !== value))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setForm({
          ...form,
          diets:checkedDiets
        })
        fetch("http://localhost:3001/recipes",{
            method: 'POST',
            body: JSON.stringify(form),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
    };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <h1>Crea tu propia receta</h1>
      <div>
        <label>Nombre: </label>
        <input type="text" value={form.title} onChange={changeHandler} name="title"/>
        {errors.title && <span>{errors.title}</span>}
      </div>
      <div>
        <label>Resumen de plato: </label>
        <textarea value={form.summary} onChange={changeHandler} name="summary"/>
      </div>
      <div>
        <label>Nivel de comida saludable: </label>
        <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore"/>
      </div>
      <div>
        <label>Paso a paso: </label>
        <textarea value={form.instructions} onChange={changeHandler} name="instructions"/>
      </div>
      <div>
        <h3>Tipos de dieta</h3>
        <ul>
          {diets.map((diet,index) => {
            return (
              <li key={index}>
                <div>
                  <input type="checkbox" name={diet.name} key={index} id={`checkbox-${index}`}
                    value={diet.name} onChange={checkboxChangeHandler}/>
                  <label htmlFor={diet.name}>{diet.name}</label>
                </div>
              </li>
          )})}
        </ul>
      </div>
      <button type="submit">Crear receta</button>
    </form>
  );
};

export default Form;
