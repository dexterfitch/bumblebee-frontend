import {useState} from "react";

function Palette(
    {pid, 
    title, 
    username, 
    color1, 
    color2, 
    color3, 
    color4, 
    color5, 
    url, 
    image, 
    categories, 
    categoryFilter, 
    palettes, 
    setPalettes}
    ) {
    const [isHidden, setIsHidden] = useState(true);

    const renderDropdown = () => {
        return categories.map(category => {
            return (
                <option key={category.id + category.name} value={category.id}>{category.name}</option>
            )
        })
    }

    const toggleForm = () => {
        setIsHidden(!isHidden)
    }

    const handleChange = (event) => {
        fetch(`http://localhost:9292/palette/${pid}/category/${event.target.value}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                palette_id: pid,
                category_id: event.target.value,
            }),
        })
        .then(toggleForm());
    }

    const updateStatePostDelete = () => {
        const filteredPalettes = palettes.filter(palette => {
            return palette.id !== pid
        })
        setPalettes(filteredPalettes)
    }

    const handleClick = () => {
        fetch(`http://localhost:9292/palette/${pid}/category/${categoryFilter}`, {
            method: 'DELETE',
        })
        .then(updateStatePostDelete())
    }

    const renderCategoryButton = () => {
        if (categoryFilter === "all") {
            return (
                <div className="btn btn-sm btn-outline-dark category-btn" onClick={toggleForm}>
                    <div>+</div>
                </div>
            )
        } else {
            return (
                <div className="btn btn-sm btn-outline-dark category-btn" onClick={handleClick}>
                    <div className="tilt">+</div>
                </div>
            )
        }
    }

    return(
        <div className="col-4 palette">
            <div className="color-title">
                <a href={url}>
                    <h1>{title}<br/>
                    <small><small>by {username}</small></small></h1>
                </a>
                {renderCategoryButton()}
                <div className="category-dropdown">
                    <select className={isHidden ? "hidden" : null} onChange={handleChange}>
                        <option selected disabled>Select</option>
                        {renderDropdown()}
                    </select>
                </div>
            </div>
            <img className="palette-color" src={image} alt={title}/>
            <br />
            <textarea className="color-copy" defaultValue={'#' + color1 + ', #' + color2 + ', #' + color3 + ', #' + color4 + ', #' + color5}></textarea>
        </div>
    )
}

export default Palette;


