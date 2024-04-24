import { summonCars }  from '../custom-hooks/useCallCars.tsx'

function Datatable({setform, deletecar}: any) {
    const { thecars } = summonCars()

  return (
    <div id="datatable" >
        <table className="table-fixed">
            <thead>
                <tr>
        
                    <th>Car Make</th>
                    <th>Car Model</th>
                    <th>Car Price</th>
                    <th>Car Year</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {thecars.map(car => 
                    <tr key={car.car_id} id={car.car_id}>
                        <td>{car.car_make}</td>
                        <td>{car.car_model}</td>
                        <td>{car.car_price}</td>
                        <td>{car.car_year}</td>
                        <td><button id="editbutton" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-blue-500 rounded" onClick={() => setform([car.car_id, car.car_make, car.car_model, car.car_price, car.car_year])}>
                            Edit Car Info</button></td>
                        <td><button id="deletebutton" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-blue-500 rounded" onClick={() => deletecar(car)}>
                            Delete Car Select
                        </button></td>

                    </tr>
                )}
            </tbody>
        </table>
       
    </div>

    
  )
}

export default Datatable