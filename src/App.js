import React from "react";
import { useForm } from "react-hook-form";
import Banner from "./Banner";

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
    <div className = "App">
      <Banner />
      <div className="box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Upload Excel Files less then 50 MB</h3>
          <div class="mb-4 mt-4">
            <input
              class="form-control"
              type="file"
              accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              id="formFile"
              {...register("file")}
            ></input>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
