import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '@/constants/config';

const WhatsAppButton = ({ packageTitle }) => {

    const message = `¡Hola! Estoy interesado en el paquete: ${packageTitle}. ¿Podrías darme más información?`;

    return (
        <a
            href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[300px] justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-md transition"
            >
            <FaWhatsapp size={20} />
            Contactar por WhatsApp
        </a>
    )
};

export default WhatsAppButton;