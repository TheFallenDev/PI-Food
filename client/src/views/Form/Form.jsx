import { useState } from "react";
import { regexTitle, regexInstructions, regexScore, regexSummary } from "./validators";

const Form = () => {

    const [form,setForm] = useState({
        title:"",
        summary:"",
        healthScore:"",
        instructions:"",
        diets:[],
    });

    const [errors,setErrors] = useState({
        title:"",
        summary:"",
        healthScore:"",
        instructions:"",
    });

    const validate = (form) => {
        if(regexTitle.test(form.title)) setErrors({...errors,title:""})
        else setErrors({...errors,title:"El nombre debe tener entre 4 y 40 caracteres. Solo letras."})
        if(form.title === "") setErrors({...errors,title:"Nombre vacío"})
        if(regexSummary.test(form.summary)) setErrors({...errors,summary:""})
        else setErrors({...errors,summary:"Hay un caracter no permitido o se superó el maximo de 500 caracteres."})
        if(regexScore.test(form.healthScore)) setErrors({...errors,healthScore:""})
        else setErrors({...errors,healthScore:"Solo se permiten números"})
        if(form.healthScore > 0 && form.healthScore < 100) setErrors({...errors,healthScore:""})
        else setErrors({...errors,healthScore:"Debe ser un valor entre 0 y 100"})
        if(regexInstructions.test(form.instructions)) setErrors({...errors,instructions:""})
        else setErrors({...errors,instructions:"Hay un caracter no permitido o se superó el maximo de 1000 caracteres."})
    }

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        console.log(form);
        validate({...form,[property]:value});
        setForm({...form,[property]:value});
    };

    const submitHandler = (event) => {
        event.preventDefault()
        fetch("http://localhost:3001/recipes",{
            method: 'POST',
            body: JSON.stringify(form),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    };

  return (
    <form onSubmit={submitHandler}>
      <h1>Crea tu propia receta</h1>
      <div>
        <label>Nombre: </label>
        <input type="text" value={form.title} onChange={changeHandler} name="title"/>
        {errors.title && <span>{errors.title}</span>}
      </div>
      <div>
        <label>Resumen de plato: </label>
        <input type="text" value={form.summary} onChange={changeHandler} name="summary"/>
      </div>
      <div>
        <label>Nivel de comida saludable: </label>
        <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore"/>
      </div>
      <div>
        <label>Paso a paso: </label>
        <input type="text" value={form.instructions} onChange={changeHandler} name="instructions"/>
      </div>
      <div>
        <h3>Tipos de dieta</h3>
        <div>
          <input type="checkbox" name="vegetarian" id="vegetarian" />
          <label htmlFor="vegetarian">Vegetariana</label>
        </div>
        <div>
          <input type="checkbox" name="vegan" id="vegan" />
          <label htmlFor="vegan">Vegana</label>
        </div>
        <div>
          <input type="checkbox" name="glutenfree" id="glutenfree" />
          <label htmlFor="glutenfree">Sin T.A.C.C</label>
        </div>
        <div>
          <input type="checkbox" name="dairyfree" id="dairyfree" />
          <label htmlFor="dairyfree">Sin lactosa</label>
        </div>
        <div>
          <input type="checkbox" name="ketogenic" id="ketogenic" />
          <label htmlFor="ketogenic">Ketogenica</label>
        </div>
        <div>
          <input type="checkbox" name="pescetarian" id="pescetarian" />
          <label htmlFor="pescetarian">Pescetariana</label>
        </div>
        <div>
          <input type="checkbox" name="paleo" id="paleo" />
          <label htmlFor="paleo">Paleo</label>
        </div>
        <div>
          <input type="checkbox" name="primal" id="primal" />
          <label htmlFor="primal">Primitiva</label>
        </div>
        <div>
          <input type="checkbox" name="lowfodmap" id="lowfodmap" />
          <label htmlFor="lowfodmap">Baja en FODMAP</label>
        </div>
        <div>
          <input type="checkbox" name="whole30" id="whole30" />
          <label htmlFor="whole30">Whole 30</label>
        </div>
      </div>
      <button type="submit">Crear receta</button>
    </form>
  );
};

export default Form;
