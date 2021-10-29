import { useState, useEffect } from "react";
import Palette from "./Palette"
import CategoryFilter from "./CategoryFilter"

function Palettes({categories, categoryFilter, setCategoryFilter, palettes, setPalettes}) {

    const renderPalettes = () => {
        return palettes.map(palette => {
            return (
                <Palette
                    key={palette.id + palette.title}
                    pid={palette.id} 
                    title={palette.title} 
                    username={palette.username} 
                    color1={palette.color1} 
                    color2={palette.color2} 
                    color3={palette.color3} 
                    color4={palette.color4} 
                    color5={palette.color5} 
                    url={palette.url}
                    image={palette.image}
                    categories={categories}
                    categoryFilter={categoryFilter}
                    palettes={palettes}
                    setPalettes={setPalettes}
                />
            )
        })
    }

    return(
        <div className="container pt-4">
            <h1>Palettes</h1>
            <div className="row mt-4">
                <CategoryFilter 
                    categories={categories}
                    setCategoryFilter={setCategoryFilter}
                />
            </div>
            <div className="row mt-4">
                {renderPalettes()}
            </div>
        </div>
    )
}

export default Palettes;