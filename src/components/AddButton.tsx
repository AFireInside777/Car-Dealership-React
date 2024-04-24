function AddButton({formfunc}: any) {
  return (
    <div id="buttoncontainer">
        <p>Please view our luxury car inventory above. You may also use the button below to: </p>
        <button id="addbutton" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => formfunc()}>
            Add New Car
        </button>
    </div>
  )
}

export default AddButton