const regexTitle = /^([A-Za-zÁ-ÿ\s]){4,40}$/;
const regexSummary = /^([A-Za-zÁ-ÿ\s0-9.,]){0,500}$/;
const regexScore = /^([0-9])$/;
const regexInstructions = /^([A-Za-zÁ-ÿ\s0-9.,]){0,1000}$/;

const validate = (form,errors,setErrors) => {
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

export default validate;