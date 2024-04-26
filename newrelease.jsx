import './film.css'
const NewRelease = ({films, onSelectFilm}) => {

    const handleFilmClick = (film) => {
        onSelectFilm(film);
    }

    return (
        <div>
            <h3 className='title'>New Release</h3>
            <div className="d-flex list-film"> 
                {films.map(film => (
                    <div className="film-card" key={film.id} onClick={() => handleFilmClick(film)}>
                        <img src={film.image}/>
                        <p className="episode">Episode {film.episode}</p>
                        <h5>{film.movieName}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewRelease