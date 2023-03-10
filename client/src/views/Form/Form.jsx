import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validators";
import Loader from "../../components/Loader/Loader";
import style from "./Form.module.css"

const Form = () => {
    const [checkedDiets, setCheckedDiets] = useState([]);
    const diets = useSelector(state=>state.diets);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    const [form,setForm] = useState({
        title:"",
        summary:"",
        healthScore:"",
        instructions:"",
        diets: []
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
      const { id, checked} = event.target;
      if(checked) setCheckedDiets([...checkedDiets,id])
      else setCheckedDiets(checkedDiets.filter(dietId => dietId !== id))
    }

    useEffect(() => {
      setForm({
        ...form,
        diets:checkedDiets
      });
    },[checkedDiets]);

    const submitHandler = (event) => {
        event.preventDefault() 
        fetch("http://localhost:3001/recipes",{
            method: 'POST',
            body: JSON.stringify(form),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error))
    };

  return (
    <form className={style.container} onSubmit={submitHandler}>
      <h1 className={style.title}>Create your own recipe</h1>
      <div>
        <label>Name </label>
        <input type="text" value={form.title} onChange={changeHandler} name="title"/>
        {errors.title && <span>{errors.title}</span>}
      </div>
      <div>
        <label>Summary: </label>
        <textarea value={form.summary} onChange={changeHandler} name="summary"/>
      </div>
      <div>
        <label>Health score: </label>
        <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore"/>
      </div>
      <div>
        <label>Instructions: </label>
        <textarea value={form.instructions} onChange={changeHandler} name="instructions"/>
      </div>
      <div>
        <h3>Diets</h3>
        <ul>
          {diets.map((diet,index) => {
            return (
              <li key={index}>
                <div>
                  <input type="checkbox" name={diet.name} key={index} id={diet.id}
                    value={diet.name} onChange={checkboxChangeHandler}/>
                  <label htmlFor={diet.name}>{diet.name[0].toUpperCase() + diet.name.slice(1)}</label>
                </div>
              </li>
          )})}
        </ul>
      </div>
      <button type="submit">Add recipe!</button>
      {loading && <Loader />}
    </form>
  );
};

export default Form;
