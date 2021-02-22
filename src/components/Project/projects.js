import React from "react";

const projects = {
    candyCrush: {
        title: "Candy Crush 🎮",
        projectType: "game development",
        description: <div>
            Versión reducida del clásico juego Candy Crush.
        </div>,
        github: "https://github.com/lvittor/Candy-Crush",
        code: "",
        "tech": [
            "Java",
            "JavaFX",
        ],
        hasImageBorder: true,
        "img_src": [
            "project-candy-crush-01"
        ],
    },
    tree: {
        title: "Tree Analysis 🌲",
        projectType: "data analysis",
        description: <div>
           Procesamiento de datos de árboles en el espacio público de una ciudad.
        </div>,
        github: "https://github.com/lvittor/tree-analysis",
        code: "",
        "tech": [
            "C"
        ],
        hasImageBorder: true,
        "img_src": [
            "project-tree-analysis-01"
        ],
    },
    weatherStatus: {
        title: "Weather Status ☁️",
        projectType: "data analysis",
        description: <div>
            Página web de las condiciones climáticas actuales entre varias ciudades, separadas por país.
        </div>,
        github: "https://github.com/lvittor/weather-status",
        code: "",
        "tech": [
            "XSLT",
            "CSS",
            "XQuery",
            "Shell"
        ],
        hasImageBorder: true,
        "img_src": [
            "project-weather-status-01"
        ],
    },
};

export default projects;
