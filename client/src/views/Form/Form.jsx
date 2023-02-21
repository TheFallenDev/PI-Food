const Form = () => {
    return(
        <div>
            <h1>Crea tu propia receta</h1>
            <div>
                <h3>Nombre</h3>
                <input type="form" />
                <h3>Resumen de plato</h3>
                <input type="text" />
                <h3>Nivel de comida saludable</h3>
                <input type="form" />
                <h3>Paso a paso</h3>
                <input type="text" />
                <div>
                    <h3>Tipos de dieta</h3>
                    <div>
                        <input type="checkbox" name="vegetarian" id="vegetarian"/>
                        <label htmlFor="vegetarian" >Vegetariana</label>
                    </div>
                    <div>
                        <input type="checkbox" name="vegan" id="vegan"/>
                        <label htmlFor="vegan" >Vegana</label>
                    </div>
                    <div>
                        <input type="checkbox" name="glutenfree" id="glutenfree"/>
                        <label htmlFor="glutenfree" >Sin T.A.C.C</label>
                    </div>
                    <div>
                        <input type="checkbox" name="dairyfree" id="dairyfree"/>
                        <label htmlFor="dairyfree" >Sin lactosa</label>
                    </div>
                    <div>
                        <input type="checkbox" name="ketogenic" id="ketogenic"/>
                        <label htmlFor="ketogenic">Ketogenica</label>
                    </div>
                    <div>
                        <input type="checkbox" name="pescetarian" id="pescetarian"/>
                        <label htmlFor="pescetarian">Pescetariana</label>
                    </div>
                    <div>
                        <input type="checkbox" name="paleo" id="paleo"/>
                        <label htmlFor="paleo">Paleo</label>
                    </div>
                    <div>
                        <input type="checkbox" name="primal" id="primal"/>
                        <label htmlFor="primal">Primitiva</label>
                    </div>
                    <div>
                        <input type="checkbox" name="lowfodmap" id="lowfodmap"/>
                        <label htmlFor="lowfodmap">Baja en FODMAP</label>
                    </div>
                    <div>
                        <input type="checkbox" name="whole30" id="whole30"/>
                        <label htmlFor="whole30">Whole 30</label>
                    </div>
                </div>
                <button>Crear receta</button>
            </div>
        </div>
    )
};

export default Form;