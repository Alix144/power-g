const EditWorkout = () => {
    return ( 
        <div className="w-full h-screen fixed top-0 left-0 bg-[#ffff5a33] flex justify-center items-center">
            <div className="p-10 bg-primary ">
                <h2 className="mb-5 text-center">Edit Workout</h2>
                <form action="" className="mb-10 flex flex-col gap-3">
                    <div className="w-full">
                        <p>Workout name *</p>
                        <input type="text" className="w-full"/>
                    </div>
                    <div className="w-1/2">
                        <p>Load (kg)</p>
                        <input type="number"className="w-full" />
                    </div>
                    <div className="w-1/2">
                        <p>Reps</p>
                        <input type="number" className="w-full"/>
                    </div>
                    <div className="w-1/2">
                        <p>Sets</p>
                        <input type="number" className="w-full"/>
                    </div>
                </form>

                <div className="w-full flex justify-between gap-5">
                    <button className="w-28 white-btn-style">Cancel</button>
                    <button className="w-28 main-btn-style">Add</button>
                </div>
            </div>
        </div>
     );
}
 
export default EditWorkout;