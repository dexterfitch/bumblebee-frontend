import { useForm } from "react-hook-form";

function NewCategory({categories, setCategories}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => postNewCategory(data);

    const postNewCategory = (data) => {
        fetch("http://localhost:9292/categories", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(setCategories([...categories, data]))
        .then(reset())
    }

    return(
        <>
            <h1>Add a New Category</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label><br/>
                <input type="text" id="name" name="name" {...register("name", { required: true })} /><br/>
                {errors.name && <span><small>This field is required</small><br /></span>}
                <label>Description:</label><br/>
                <input type="text" id="description" name="description" {...register("description", { required: true })} /><br/>
                {errors.description && <span><small>This field is required</small><br /></span>}
                <br /><input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default NewCategory;