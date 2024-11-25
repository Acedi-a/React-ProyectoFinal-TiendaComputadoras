import React from "react";
import Marquee from "react-fast-marquee";

const CarrouselMarcas = () => {
    const marcas = [
        "https://images.seeklogo.com/logo-png/10/1/nvidia-logo-png_seeklogo-101614.png?v=638663250390000000",
        "https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png?v=638653798000000000",
        "https://seeklogo.com/images/M/msi-logo-6A5602A14D-seeklogo.com.png",
        "https://seeklogo.com/images/D/dell-logo-49B6BF5FC9-seeklogo.com.png",
        "https://images.seeklogo.com/logo-png/1/1/asus-logo-png_seeklogo-12597.png?v=638654624130000000",
        "https://images.seeklogo.com/logo-png/20/1/acer-logo-png_seeklogo-209268.png?v=638663326980000000",
        "https://images.seeklogo.com/logo-png/12/1/samsung-logo-png_seeklogo-122023.png?v=638653750940000000",
        "https://images.seeklogo.com/logo-png/18/1/intel-logo-png_seeklogo-181977.png?v=638663306710000000",
        "https://seeklogo.com/images/A/AMD-logo-2847522454-seeklogo.com.png"
    ];

    return (
        <Marquee>
            {marcas.map((marc) => (
                <div className="w-56">
                    <img src={marc} alt={marc} className="w-full px-10 h-full object-cover" />
                </div>
            ))}
        </Marquee>
    )
};

export default CarrouselMarcas;
