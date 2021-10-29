import CategoryFilterButton from "./CategoryFilterButton";

function CategoryFilter({categories, setCategoryFilter}) {

    const handleClick = (event) => {
        setCategoryFilter(event.target.value)
    }

    const renderButtons = () => {
        return categories.map(category => {
            return (
                <CategoryFilterButton 
                    key={category.id + category.name} 
                    categoryName={category.name} 
                    categoryId={category.id}
                    setCategoryFilter={setCategoryFilter}
                    handleClick={handleClick}
                />
            )
        })
    }

    return (
        <>
            <div className="col-2">
                <button type="button" className="btn btn-warning btn-sm btn-block mb-3" onClick={handleClick} value="all">All</button>
            </div>
            {renderButtons()}
        </>
    );
}

export default CategoryFilter;