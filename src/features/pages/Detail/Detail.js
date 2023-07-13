import { useParams } from "react-router-dom";
import eco from '../../../images/logoeco.png';
import inci from '../../../images/inci.png';
import benefits from '../../../images/benefits.webp';
import NotFound from "../../NotFound";
import './Detail.css';

const Detail = ({ characters }) => {
    const { id } = useParams();
    const findCharacter = characters.find((char) => char.id === id);

    if (findCharacter) {
        return (
            <div>
                <div className="detail-father-div">
                    <div className="product-detail-div">
                        <h2 className='product-detail-name'>{findCharacter.name}</h2>
                        <img className='product-detail-image' src={findCharacter.image} alt={findCharacter.name} />
                        <h3 className="ingredients">INGREDIENTES</h3>
                        <p className="product-detail-ingredients">{findCharacter.ingredients}</p>
                    </div>
                    <div className="big-image-div">
                        <img className='kombucha-image' src={findCharacter.image} alt={findCharacter.name} />
                        <h3>¡Por solo {findCharacter.price} €!</h3>
                    </div>

                </div>
                <div className="other-details-div">
                    <h3 className="eco">¡Y ADEMÁS ES ECOLÓGICA!</h3>
                    <img className='product-detail-eco-logo' src={eco} alt="ecologico" />
                    <p className="product-detail-description">Komvida 100% Kombucha natural y ecológica, sin azúcar añadido, sin gas añadido, sin plástico, respetuosa con el medio ambiente y made in Fregenal.
                    </p>
                    <img src={benefits} alt="benefit" />
                    <p className="product-detail-desc">Hacemos Komvida con ingredientes ecológicos, una cantidad mínima de azúcar residual, burbujas naturales y un sabor que te encantará (está taaaaan buena...). Además, la envasamos en vidrio para cuidar de nuestro planeta.
                        De corazón, deseamos que disfrutes muchísimo de Komvida. ¡Nosotras prometemos poner todo nuestro empeño e ilusión para que siga aportándote tantas cosas buenas!
                    </p>
                    <img className="inci" src={inci} alt="inci" />
                </div>
            </div>
        )
    } else {
        return (
            <NotFound />
        )
    }

}

export default Detail