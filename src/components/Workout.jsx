const Workout = () => {
    return ( 
        <div className="w-52 p-5 bg-[#ffff5a1a] hover:bg-[#ffff5a33] duration-200 flex flex-col gap-5 items-center">
            <h3>Pushups</h3>
            <div>
                <p>Load: <span className="ml-2">10 kg</span></p>
                <p>Reps: <span className="ml-2">10</span></p>
                <p>Sets: <span className="ml-2">3</span></p>
            </div>
            <div className="mx-auto w-[60%] flex flex-col gap-2">
                <button className="main-btn-style">Edit</button>
                <button className="danger-btn-style">Delete</button>
            </div>
        </div>
     );
}
 
export default Workout;