import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSchool() {
  const { register, handleSubmit, reset } = useForm();
  const [schools, setSchools] = useState([]);

  const onSubmit = (data) => {
    const newSchool = {
      ...data,
      image: URL.createObjectURL(data.image[0]),
    };
    setSchools([...schools, newSchool]);
    alert("School added successfully!");
    reset();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" required /><br />
        <input {...register("address")} placeholder="Address" required /><br />
        <input {...register("city")} placeholder="City" required /><br />
        <input {...register("state")} placeholder="State" required /><br />
        <input {...register("contact")} placeholder="Contact" required /><br />
        <input {...register("email_id")} placeholder="Email" required /><br />
        <input type="file" {...register("image")} required /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
