import CardCategoria from "./CardCategoria.jsx";

const Categoria = () => {
    return (
        <div className="lg:flex lg:flex-row sm:items-center sm:grid sm:grid-cols-1 ">
            <CardCategoria
                img="https://ea7afb82ef.clvaw-cdnwnd.com/372c680b73f7635a4aa3d4a3c21bf815/200003139-e518be615f/OFERTA%20ESPECIAL.png?ph=ea7afb82ef"
                name="Ofertas" url="ofertas"/>
            <CardCategoria
                img="https://marketingyservicios.com/wp-content/uploads/2018/11/blackfriday_af2ed436.webp"
                name="Liquidacion" url="liquidacion"/>
            <CardCategoria
                img="https://prod.scorptec.com.au/11/1177/99239/284879_large.jpg"
                name="Procesadores" url="Procesador"/>
            <CardCategoria
                img="https://www.asus.com/microsite/motherboard/Intel-Alder-Lake-Z690-H670-B660/es/websites/img/pd/MZ690E_1-1.png"
                name="Placas base" url="placa-base"/>
            <CardCategoria
                img="https://sologamerbolivia.com/cdn/shop/files/Asus-ProArt-Display-PA328QV-31.5inch-Monitors-7-600x600.webp?v=1730299915&width=533"
                name="Monitores" url="Monitor"/>
            <CardCategoria
                img="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzgxMTU4fGltYWdlL3BuZ3xoMDMvaGM5LzE0MzIyOTk4OTAyODE0LnBuZ3xkNTExOTkzODA2NzViZGQwOTY1NDg5NDkzMWViYTFiYjMwMTk5ZWQyM2M5MDg5YzkwOTUwZDdhMjI3NGRiOGM2/lenovo-laptop-thinkpad-l15-intel-hero.png"
                name="Laptops" url="Laptop"/>
            <CardCategoria
                img="https://img.terabyteshop.com.br/archive/2886396546/colorful-rtx-2080-ti-12803-05.png"
                name="Tarjetas Graficas" url="GPU"/>

        </div>
    )
}

export default Categoria;