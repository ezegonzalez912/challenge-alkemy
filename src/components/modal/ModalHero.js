import React from 'react'

export const ModalHero = ({hero, isChangeModal}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modal__container" onClick={handleModalDialogClick}>
            {
                !(hero === null) &&
                <>
                <img src={hero.image.url} alt={hero.name}/>
                <div className="moda__info">
                    <h3>{hero.biography["full-name"]}</h3>
                    <p className="fw-400 c-primary">{hero.biography.aliases}</p>
                    <p>Weight: <span className="fw-400 c-primary">{hero.appearance.weight[1]}</span></p>
                    <p>Height: <span className="fw-400 c-primary">{hero.appearance.height[1]}</span></p>
                    <p>Eyes: <span className="fw-400 c-primary">{hero.appearance["eye-color"]}</span></p>
                    <p>Hair: <span className="fw-400 c-primary">{hero.appearance["hair-color"]}</span></p>
                    <p>Work: <span className="fw-400 c-primary">{hero.work.occupation}</span></p>
                    <button className="btn-primary" onClick={isChangeModal}>Cerrar</button>
                </div>
                </>
            }
        </div>
    )
}