import logo from "../images/bumblebee.png"

function Home() {
    return(
        <>
            <div className="home-bg"></div>
            <div className="bee-logo">
                <img className="img-fluid" src={logo} alt="bumblebee" />
                <h1 className="text-center">palettes</h1>
            </div>
        </>
    )
}

export default Home;