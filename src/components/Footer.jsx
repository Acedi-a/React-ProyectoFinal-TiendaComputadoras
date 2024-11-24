import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components";
import {NavLink} from "react-router-dom";

const pulse = keyframes`
    0% {
        transform: scale(1);
        opacity: 0.5;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 0.5;
    }
`;

const Listado = styled.li`
    color: #8b8b8b;
    transition: all 0.3s ease-in-out;
    position: relative;
    cursor: pointer;
    padding: 4px 8px;
    
    
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%;
        margin-left: 25%;
        height: 2px;
        background: linear-gradient(90deg, #79007b, #a855f7);
        transform: scaleX(0);
        transition: transform 0.3s ease;
        transform-origin: right;
    }

     &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            circle at center,
            rgba(121, 0, 123, 0.2) 0%,
            transparent 70%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
    }

    &:hover {
        color: black;
        transform: translateY(-2px);
        letter-spacing: 0.5px;
        padding-left: 12px;

        &::after {
            transform: scaleX(1);
            transform-origin: left;
        }

        &::before {
            opacity: 1;
            animation: ${pulse} 2s infinite ease-in-out;
        }
    }

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;


const IconSocial = styled.a`
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.2);
    }
`


const Footer = () => {
    return (
        <footer className=" h-auto shadow-[0_-10px_50px_-5px_rgba(0,0,0,0.4)] mx-auto py-10 px-0 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
                <h2 className="text-3xl font-bold text-purple-700 mb-4">Cyber_Core</h2>
                    <div className="flex justify-center md:justify-start space-x-10 text-4xl text-gray-600">
                        <IconSocial href="/" className="hover:text-purple-500">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </IconSocial>
                        <IconSocial href="/" className="hover:text-purple-500">
                            <FontAwesomeIcon icon={faFacebook} />
                        </IconSocial>
                        <IconSocial href="/" className="hover:text-purple-500">
                            <FontAwesomeIcon icon={faInstagram} />
                        </IconSocial>
                        <IconSocial href="/" className="hover:text-purple-500">
                            <FontAwesomeIcon icon={faYoutube} />
                        </IconSocial>
                        <IconSocial href="/" className="hover:text-purple-500">
                            <FontAwesomeIcon icon={faTiktok} />
                        </IconSocial>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-lg text-gray-800 mb-4">Contactar</p>
                    <ul className="space-y-2 text-gray-600 text-center">
                        <NavLink to="faq"><Listado>Preguntas frecuentes</Listado></NavLink>
                        <Listado>Contacto</Listado>
                        <Listado>Devoluciones y garantías</Listado>
                        <Listado>Publicidad</Listado>
                        <Listado>Empleo</Listado>
                        <Listado>Sugerencias</Listado>
                    </ul>
                </div>

                <div>
                    <p className="font-bold text-lg text-gray-800 mb-4">Sobre nosotros</p>
                    <ul className="space-y-2 text-gray-600">
                        <Listado>Compromisos</Listado>
                        <Listado>Sucursales</Listado>
                        <Listado>Marcas asociadas</Listado>
                        <Listado>Afiliados</Listado>
                        <Listado>Aviso legal</Listado>
                        <Listado>Privacidad</Listado>
                    </ul>
                </div>

                <div>
                    <p className="font-bold text-lg text-gray-800 mb-4">Otros Servicios</p>
                    <ul className="space-y-2 text-gray-600">
                        <Listado>Black Friday</Listado>
                        <Listado>Cyber Monday</Listado>
                        <Listado>Servicio técnico</Listado>
                        <Listado>Concursos</Listado>
                    </ul>
                </div>
        </footer>
    );
};

export default Footer;


