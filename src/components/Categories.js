import Category from "./Category"
import NewCategory from "./NewCategory";

function Categories({categories, setCategories, setCategoryFilter}) {

    const renderCategories = () => {
        return categories.map(category => {
            return (
                <Category 
                    key={category.id + category.name}
                    categoryId={category.id} 
                    name={category.name} 
                    description={category.description} 
                    categories={categories} 
                    setCategories={setCategories} 
                />
            )
        })
    }

    return(
        <div className="container pt-4">
            <div className="row">
                <div className="col-4">
                    <NewCategory 
                        categories={categories} 
                        setCategories={setCategories}
                        setCategoryFilter={setCategoryFilter}
                    />
                </div>
                <div className="col-8">
                    <h1>Categories</h1>
                    <div className="row">
                        {renderCategories()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;