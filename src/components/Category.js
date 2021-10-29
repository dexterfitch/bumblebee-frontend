import {useState} from "react";

function Category({categoryId, name, description, categories, setCategories}) {

    const [isHidden, setIsHidden] = useState(true);

    const removeThisCategoryFromState = () => {
        let filteredCategories = categories.filter(category => {
            return category.id !== categoryId
        })
        setCategories(filteredCategories)
    }

    const deleteCategory = () => {
        fetch(`http://localhost:9292/categories/${categoryId}`, {
            method: "DELETE",
        })
        .then(removeThisCategoryFromState())
    }

    const toggleForm = () => {
        setIsHidden(!isHidden)
    }

    const editCategory = (event) => {
        fetch(`http://localhost:9292/categories/${categoryId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: event.target[0].value,
                description: event.target[1].value
            }),
        })
        .then(toggleForm())
    }

    return(
        <div className="col-6">
            <div className="card mb-5">
                <div className="card-body">
                    <h2>{name}</h2>
                    <h5>{description}</h5>
                    <button onClick={toggleForm}>Edit</button>&nbsp;&nbsp;
                    <button onClick={deleteCategory}>Delete</button>
                    <form id="editCategoryForm" className={isHidden ? "hidden" : null} onSubmit={editCategory}>
                        <hr />
                        <label>Name:</label><br/>
                        <input type="text" id="name" name="name"/><br/>
                        <label>Description:</label><br/>
                        <input type="text" id="description" name="description" /><br/><br/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Category;