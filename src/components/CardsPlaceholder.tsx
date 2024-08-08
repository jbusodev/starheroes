import React from 'react'

const CardsPlaceholder = () => {
    const placeholders = Array.from({ length: 8 }, (_, index) => index);

    return (
        <div className="cards">
            {placeholders.map((placeholder, index) => (
                <div key={`lazy-card_${index}`} className="card_wrapper col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                    <div className="card disabled" aria-hidden="true">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" focusable="false">
                            <rect width="100%" height="100%" fill="#868e96"></rect>
                        </svg>

                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className='card-text placeholder-glow'>
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                            </p>
                            <div className="d-flex justify-content-between placeholder-glow"><span className='text-muted placeholder col-3'></span><span className='text-muted placeholder col-3'></span></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardsPlaceholder