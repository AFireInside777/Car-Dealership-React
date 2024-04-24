const token = 'c2067f8000bb6605cd08e38ca63f32b328237028b4543614'


export const getCarList = async ( ) => {
    
    let response = await fetch('https://car-dealership-api.onrender.com/api/getcars', 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`,
            
        },
        mode: "cors"
        
    });
    if (!response.ok) {
        throw new Error('Failed to fetch data from the server')
    }
    let result = await response.json()

    return result
}



export const sendCarEdit = async ( newpack: object) => {

    const cid: string = newpack.car_id
   
    let response = await fetch(`https://car-dealership-api.onrender.com/api/editcar/${cid}`, 
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`,
            
        },
        mode: "cors",
        body: JSON.stringify(newpack)
        
    });
    if (!response.ok) {
        throw new Error('Failed to fetch data from the server')
    }
    let result = await response.json()
    window.location.reload()
    return result
}


export const AddNewCar = async ( newcar: object ) => 
    {
        const response = await fetch(`https://car-dealership-api.onrender.com/api/addcar`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(newcar)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }
        
        window.location.reload()
        return await response.json()
    }
    


export const DeleteTheCar = async (cardelete: object) =>

    {
        let cid: string = cardelete.car_id

        const response = await fetch(`https://car-dealership-api.onrender.com/api/deletecars/${cid}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete the data on the server')
        }
        
        console.log(response)
        return await response.json()

    }