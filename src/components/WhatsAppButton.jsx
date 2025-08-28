import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '@/constants/config';

const WhatsAppButton = ({ packageTitle, packageSubtitle, general = false }) => {
    // CONSTANTE PARA MODIFICAR EL MENSAJE DE WHATSAPP
    const message = general 
        ? "¡Hola! Me podrian dar mas informacion?"
        : `¡Hola! Estoy interesado en el siguiente paquete: ${packageTitle} de ${packageSubtitle}. ¿Podrías darme más información?`;

    return (
        <a
            href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-full shadow-md transition 
            ${general ? "fixed bottom-6 right-3 w-auto px-3 py-3 rounded-full shadow-lg z-50" : "w-[300px]"}`}
            >
            <FaWhatsapp size={general ? 28 : 20} />
            {!general && "Contactar por WhatsApp"}
        </a>
    )
};

export default WhatsAppButton;