document.addEventListener("DOMContentLoaded", () => {
    const motorcycles = [
        {
            name: "Harley-Davidson Street Glide",
            location: "Milwaukee, USA",
            year: 2023,
            price: "$21,999",
            imageUrl: "images/harley_street_glide.webp"
        },
        {
            name: "Ducati Panigale V4",
            location: "Bologna, Italy",
            year: 2022,
            price: "$28,395",
            imageUrl: "images/ducati_panigale_v4.webp"
        },
        {
            name: "Kawasaki Ninja ZX-10R",
            location: "Tokyo, Japan",
            year: 2023,
            price: "$17,399",
            imageUrl: "images/kawasaki_ninja_zx10r.webp"
        },
        {
            name: "BMW R 1250 GS",
            location: "Munich, Germany",
            year: 2022,
            price: "$17,995",
            imageUrl: "images/bmw_r1250gs.webp"
        },
        {
            name: "Yamaha YZF-R1",
            location: "Iwata, Japan",
            year: 2023,
            price: "$17,599",
            imageUrl: "images/yamaha_r1.webp"
        },
        {
            name: "Triumph Bonneville T120",
            location: "Hinckley, UK",
            year: 2022,
            price: "$12,695",
            imageUrl: "images/triumph_bonneville_t120.webp"
        },
        {
            name: "Royal Enfield Classic 350",
            location: "Chennai, India",
            year: 2023,
            price: "$4,599",
            imageUrl: "images/royal_enfield_classic_350.webp"
        },
        {
            name: "Moto Guzzi V7 Stone",
            location: "Mandello del Lario, Italy",
            year: 2022,
            price: "$9,190",
            imageUrl: "images/moto_guzzi_v7.webp"
        },
        {
            name: "Indian Chief Vintage",
            location: "Spirit Lake, USA",
            year: 2021,
            price: "$19,499",
            imageUrl: "images/indian_chief_vintage.webp"
        },
        {
            name: "Honda CB1100 EX",
            location: "Tokyo, Japan",
            year: 2021,
            price: "$12,999",
            imageUrl: "images/honda_cb1100_ex.webp"
        },
        {
            name: "Norton Commando 961",
            location: "Solihull, UK",
            year: 2022,
            price: "$18,000",
            imageUrl: "images/norton_commando_961.webp"
        },
        {
            name: "BSA Gold Star",
            location: "Birmingham, UK",
            year: 2023,
            price: "$8,000",
            imageUrl: "images/bsa_gold_star.webp"
        }
    ];
    
    
    function displayMotorcycles(filteredMotorcycles) {
        const container = document.getElementById("gallery-container");
        container.innerHTML = "";

        filteredMotorcycles.forEach(motorcycle => {
            const figure = document.createElement("figure");
            figure.innerHTML = `
                <img src="${motorcycle.imageUrl}" alt="${motorcycle.name}" loading="lazy">
                <figcaption>
                    <h2>${motorcycle.name}</h2>
                    <p>Location: ${motorcycle.location}</p>
                    <p>Year: ${motorcycle.year}</p>
                    <p>Price: ${motorcycle.price}</p>
                </figcaption>
            `;
            container.appendChild(figure);
        });
    }

    document.getElementById("all").addEventListener("click", () => displayMotorcycles(motorcycles));
    document.getElementById("new").addEventListener("click", () => displayMotorcycles(motorcycles.filter(m => m.year >= 2022)));
    document.getElementById("old").addEventListener("click", () => displayMotorcycles(motorcycles.filter(m => m.year < 2022)));
    document.getElementById("expensive").addEventListener("click", () => displayMotorcycles(motorcycles.filter(m => parseInt(m.price.replace(/[^0-9]/g, "")) > 20000)));
    document.getElementById("affordable").addEventListener("click", () => displayMotorcycles(motorcycles.filter(m => parseInt(m.price.replace(/[^0-9]/g, "")) <= 20000)));

    displayMotorcycles(motorcycles);
});