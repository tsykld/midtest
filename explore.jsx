import './film.css'
const Explore = ({selectedFilm}) => {
    
    return (
        <div>
            <h3 className='title'>Explore</h3>
            <div className='explore-sub'>What are you gonna watch today?</div>
            {selectedFilm && (
                <div className='explore-container'>
                    <div className='explore-content'>
                        <h4>{selectedFilm.movieName}</h4>
                        <p>{selectedFilm.description}</p>
                        <img src={selectedFilm.image} alt={selectedFilm.movieName} />
                    </div>
                </div>
            )}
        </div>


        /*<div>
            <h3 className='explore-title'>Explore</h3>
            <div className='explore-sub'>What are you gonna watch today?</div>
            
            <div className='explore-container'>
                <div className='overlay'></div>
                <div className='explore-content'>
                <h3>Weather With You</h3>
                <p> Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. </p>
            </div>
            </div>
        </div>*/
    )
}

export default Explore 