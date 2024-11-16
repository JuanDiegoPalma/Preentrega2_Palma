import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products =[
    {
        id: "DT2324",
        name: "BMX Sunday Forecaster 20.75tt",
        description: "Diseñada para los amantes del freestyle y el park riding. Con un cuadro robusto y ligero, esta BMX ofrece una geometría optimizada para maniobras y saltos.Ideal para quienes buscan diversión y durabilidad en cada sesión.",
        stock: 5,
        price: 700,
        image: "/img/sunday-forecaster-siemon.webp",
        category: "Bmx-Completas"
    },
    {
        id: "DT2325",
        name: "BMX Sunday Forecaster 20.50tt",
        description: "Es una bicicleta versátil y ágil, perfecta para riders que buscan un equilibrio entre estilo y rendimiento. Su cuadro ligero y duradero, junto con una geometría diseñada para el freestyle, permite realizar trucos y maniobras con facilidad.",
        stock: 2,
        price: 725,
        image: "/img/Sunday-Forecaster-Silva.webp",
        category: "Bmx-Completas"
    },
    {
        id: "DT2326",
        name: "BMX Kink Cloud 21.00 Matte",
        description: "Perfecta para riders más altos que buscan un equilibrio entre estilo y rendimiento. Su cuadro ligero y duradero, junto con una geometría diseñada para el freestyle, permite realizar trucos y maniobras con facilidad.",
        stock: 6,
        price: 825,
        image: "/img/Kink-Cloud-21.00-Matte.webp",
        category: "Bmx-Completas"
    },
    {
        id: "FT1214",
        name: "Cubierta Odyssey 20 x 2.40",
        description: "Es una opción robusta y confiable para bicicletas BMX, diseñada para ofrecer un excelente agarre y durabilidad en diversos terrenos. Su ancho proporciona una mayor estabilidad y control, ideal para maniobras en el park o en la calle.",
        stock: 6,
        price: 30,
        image: "/img/cubierta-odyssey.webp",
        category: "Bmx-Parts"
    },
    {
        id: "FT1213",
        name: "Horquilla Odyssey R25",
        description: "Es una opción robusta y mítica para todos los riders. Su offset proporciona una mayor estabilidad y control, ideal para maniobras en el park o en la calle.",
        stock: 6,
        price: 50,
        image: "/img/Horquilla_odyssey.webp",
        category: "Bmx-Parts"
    },
    {
        id: "FT3453",
        name: "Pedales Odyssey Twisted Pro Negro",
        description: "Son la elección perfecta para los riders que buscan durabilidad y estilo. Con una construcción robusta de nylon y un diseño ligero, ofrecen un excelente agarre gracias a sus amplias plataformas y los pines de tracción.",
        stock: 15,
        price: 20,
        image: "/img/pedales-odyssey.webp",
        category: "Bmx-Parts"
    },
    {
        id: "SK7856",
        name: "Skate ÁREA Tyb White",
        description: "Es una patineta elegante y funcional, ideal para skaters de todos los niveles. Con una tabla resistente y un diseño llamativo en blanco, combina estilo y rendimiento en cada truco. Sus ruedas suaves y duraderas proporcionan un deslizamiento fluido en diversas superficies, mientras que los ejes de alta calidad aseguran estabilidad y control. Perfecta para el street y el park",
        stock: 7,
        price: 48,
        image: "/img/skate1.webp",
        category: "Skate"
    },
    {
        id: "SK856",
        name: "Skate Element Section",
        description: "Es una patineta diseñada para ofrecer un rendimiento excepcional y durabilidad. Con una tabla de madera de alta calidad, presenta un diseño moderno y atractivo que destaca en cualquier entorno.",
        stock: 7,
        price: 100,
        image: "/img/skate2.webp",
        category: "Skate"
    },
    {
        id: "SK858",
        name: "Tabla Element Out There Nick García",
        description: "Es una patineta diseñada para ofrecer un rendimiento excepcional y durabilidad. Con una tabla de madera de alta calidad, presenta un diseño moderno y atractivo que destaca en cualquier entorno.",
        stock: 7,
        price: 65,
        image: "/img/element-out-there.webp",
        category: "Skate"
    },
    {
        id: "IN200",
        name: "Vans Slip-On Mn BMX Dakota Roche",
        description: "Son unas zapatillas icónicas que combinan estilo y funcionalidad, diseñadas especialmente para los amantes del BMX. Con una parte superior de lona resistente y un diseño sin cordones, ofrecen una comodidad excepcional y un ajuste seguro. La suela de goma con el famoso patrón de waffle proporciona un excelente agarre en los pedales, mientras que su estética llamativa refleja la personalidad del rider.",
        stock: 10,
        price: 60,
        image: "/img/vans1.webp",
        category: "Indumentaria"
    },
    {
        id: "IN420",
        name: "Remera Vans X Dan Lacey Off Black",
        description: "Es una prenda que fusiona estilo y comodidad, perfecta para los amantes del BMX y la cultura urbana. Con un diseño minimalista en un tono negro clásico, cuenta con gráficos únicos que rinden homenaje al famoso rider Dan Lacey.",
        stock: 10,
        price: 25,
        image: "/img/vans-dan-lacey.webp",
        category: "Indumentaria"
    },
    {
        id: "IN500",
        name: "Zapatillas Vans X ",
        description: " están diseñadas para ofrecer un excelente rendimiento y confort en la práctica del BMX. Generalmente, cuentan con una suela de goma resistente con el característico sello Waffle de Vans, que proporciona un agarre superior en los pedales. .",
        stock: 10,
        price: 55,
        image: "/img/vans-bmx.webp",
        category: "Indumentaria"
    }
]

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( { id, ...dataProduct } )=> {
        addDoc(productsRef, dataProduct)
    })


    console.log("productos subidos")
    return
}
seedProducts()