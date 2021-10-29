function CategoryFilterButton({categoryName, categoryId, handleClick}) {

    return (
        <div className="col-2">
            <button type="button" className="btn btn-warning btn-sm btn-block mb-3" onClick={handleClick} value={categoryId}>{categoryName}</button>
        </div>
    );
}

export default CategoryFilterButton;