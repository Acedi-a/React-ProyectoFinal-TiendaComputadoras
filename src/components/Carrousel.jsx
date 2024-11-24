import { Carousel } from "flowbite-react";

const Carrusel = () => {
    return (
        <div className="hidden xl:block xl:w-full sm:object-none max-w-screen-2xl mx-auto bg-amber-black">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                <img
                        src="https://dlcdnwebimgs.asus.com/gain/08557FA1-E6BB-4FB3-BF2B-D18ED0E0A57C/fwebp"
                        alt="Imagen 1"
                        className="object-cover h-full w-full"
                    />
                    <img
                        src="https://www.mobileadvance.com/product_images/uploaded_images/msi-banner-dragonfever17-1200.jpg"
                        alt="Imagen 2"
                        className="object-cover w-full h-full"
                    />
                    <img
                        src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1494/innergigabyteimages/banner.jpg"
                        alt="Imagen 3"
                        className="object-cover w-full h-full"
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default Carrusel;