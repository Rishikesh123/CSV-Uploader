import React from "react";
import { useForm } from "react-hook-form";

function App() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://localhost:8080/api/csv/upload", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };


    return (
        <div className="box">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Upload CSV Files less then 50 MB</h3>
                <input type="file" {...register("file")} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;