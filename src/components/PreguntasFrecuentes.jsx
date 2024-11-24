import styled from "styled-components";
import {
    faBan,
    faCartShopping,
    faCreditCard,
    faEnvelope,
    faLocationCrosshairs,
    faRightLeft,
    faShop,
    faTag,
    faTruck
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TituloFAQ = styled.div`
    background-color: #79007B;
    color: white;
    padding: 1rem;
    border-radius: 12px 12px 0 0;
    margin-bottom: 0;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const ParrafoFAQ = styled.p`
    text-align: justify;
    font-size: 1.1rem;
    padding: 1.2rem;
    line-height: 1.6;
    color: #4B5563;
    background: white;
    margin: 0;
    border-radius: 0 0 12px 12px;
`

const CardFAQ = styled.div`
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
    }
`

const PreguntasFrecuentes = () => {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8">
            <h2 className="text-3xl text-center mb-8 font-bold text-[#79007B]">
                Preguntas Frecuentes (FAQ)
            </h2>
            <div className="space-y-6">
                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faCartShopping} style={{fontSize: "1.25rem"}} />
                        <h2>¿Cómo puedo realizar una compra en CyberCore?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Para realizar una compra, simplemente selecciona el producto que deseas, agrégalo a tu carrito y
                        procede al checkout. Solo necesitas completar la información requerida para el envío y elegir tu
                        método de pago preferido.
                    </ParrafoFAQ>
                </CardFAQ>

                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faTruck} style={{fontSize: "1.25rem"}} />
                        <h2>¿Hacen envíos a todo el país?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Sí! Realizamos envíos a todo Bolivia. El tiempo de entrega puede variar dependiendo de tu
                        ubicación, pero en promedio toma entre 2 a 5 días hábiles.
                    </ParrafoFAQ>
                </CardFAQ>

                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faCreditCard} style={{fontSize: "1.25rem"}} />
                        <h2>¿Qué métodos de pago aceptan?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Aceptamos pagos a través de transferencias bancarias, tarjetas de débito/crédito y aplicaciones
                        móviles como QR o billeteras electrónicas.
                    </ParrafoFAQ>
                </CardFAQ>

                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faShop} style={{fontSize: "1.25rem"}} />
                        <h2>¿Puedo recoger mi pedido en tienda física?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Actualmente, somos una tienda online y no contamos con un punto de recogida. Sin embargo,
                        garantizamos un envío rápido y seguro hasta tu domicilio.
                    </ParrafoFAQ>
                </CardFAQ>

                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faRightLeft} style={{fontSize: "1.25rem"}} />
                        <h2>¿Qué hago si el producto que recibí está defectuoso?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Si el producto llega defectuoso o presenta problemas, contáctanos dentro de las primeras 48 horas
                        después de la entrega a través de nuestro formulario de contacto o nuestro WhatsApp.
                        Resolveremos el problema lo antes posible.
                    </ParrafoFAQ>
                </CardFAQ>

                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faLocationCrosshairs} style={{fontSize: "1.25rem"}} />
                        <h2>¿Cómo puedo rastrear mi pedido?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Una vez que tu pedido haya sido enviado, recibirás un número de seguimiento por correo electrónico.
                        Puedes usar este número para rastrear tu pedido en el sitio web de la empresa de mensajería.
                    </ParrafoFAQ>
                </CardFAQ>

                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faBan} style={{fontSize: "1.25rem"}} />
                        <h2>¿Puedo cancelar mi pedido?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Puedes cancelar tu pedido antes de que sea enviado. Por favor, contáctanos lo antes posible
                        para procesar la cancelación y el reembolso.
                    </ParrafoFAQ>
                </CardFAQ>

                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faTag} style={{fontSize: "1.25rem"}} />
                        <h2>¿Tienen productos en oferta?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Sí, constantemente tenemos promociones y ofertas especiales. Puedes revisarlas en nuestra página
                        principal o suscribirte a nuestro boletín para no perderte ninguna.
                    </ParrafoFAQ>
                </CardFAQ>

                <CardFAQ>
                    <TituloFAQ>
                        <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "1.25rem"}} />
                        <h2>¿Cómo puedo contactarlos si tengo más dudas?</h2>
                    </TituloFAQ>
                    <ParrafoFAQ>
                        Si tienes más preguntas, puedes escribirnos a nuestro correo electrónico (soporte@cybercore.bo)
                        o enviarnos un mensaje directo en nuestras redes sociales. Nuestro equipo de atención al cliente
                        estará encantado de ayudarte.
                    </ParrafoFAQ>
                </CardFAQ>
            </div>
        </div>
    );
};

export default PreguntasFrecuentes;