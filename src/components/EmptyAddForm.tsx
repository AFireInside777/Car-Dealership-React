import {useForm, SubmitHandler } from "react-hook-form"
import { AddNewCar } from "../helpers/ServerCalls"

function EmptyAddForm(funcinherit: any) {

    console.log(funcinherit)

    const { register, handleSubmit } = useForm<IFormInput>()

    const makeDictobj2 = (carobj: object) => {
        let newCar: object = {...carobj, "car_fuel_type": "Unleaded", "car_body_type": "Coupe"}
        return newCar
    }

    const onSubmit: SubmitHandler<IFormInput> = (newcar) => 
        {
            let newcar2: object = makeDictobj2(newcar)
            console.log(newcar2)
            let newcarresponse: any = AddNewCar(newcar2)
            console.log(newcarresponse)
        } 

  return (
    <div id="carformdiv">
            <form onSubmit={handleSubmit(onSubmit)} id="emptycarform">
                <label>Car Make: </label>
                <input ref={register} {...register("car_make")}/>
                <label>Car Model: </label>
                <input ref={register} {...register ("car_model")}/>
                <label>Car Price: </label>
                <input ref={register} {...register ("car_price")}/>
                <label>Car Year: </label>
                <input ref={register} {...register ("car_year")}/>
                <input id="inputBut2"type="Submit"/>
                <button id="cancelbutton" onClick={() => funcinherit.canceledit2()}>Cancel New Car Entry</button>
            </form>
            <p style={{width: "495px"}} id="addinstruct">You may add the new car details in the form fields above.</p>
            <p style={{width: "495px"}}>Press the "Submit" button to submit your data.</p>
        </div>
  )
}

export default EmptyAddForm