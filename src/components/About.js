function About() {
    return(
        <div className="container pt-4">
            <h1>About</h1>
            <div className="row justify-content-center mt-5">
                <div className="col-6">
                    <div className="card about-card">
                        <div className="card-body">
                            <p className="display-2">Hello!</p>
                            <p>My name is <a href="https://github.com/dexterfitch">Dex</a>, and I'm a software engineering instructor!</p>
                            <p>This little app was thrown together using data from the <a href="https://www.colourlovers.com/api" target="_new">COLOURlovers API</a>, for the purpose of demonstrating the relationships and passage of data between a Ruby API backend and a React frontend.</p>
                            The cute bee image on the front page is from <a href="https://www.maxpixel.net/Bumblebee-Honey-Bee-Bee-Insect-Cartoon-Wings-6395170" target="_new">MaxPixel</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;