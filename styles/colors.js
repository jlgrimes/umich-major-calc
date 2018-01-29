let colorIndex = 0;

function getColor()
{
    let temp = colorIndex;

    if (colorIndex < colors.length - 1)
        colorIndex++;

    return (colors[temp]);
}

function primary()
{
    return getColor().primary;
}

function light()
{
    return getColor().light;
}

function dark()
{
    return getColor().dark;
}

let colors = [
    // pulled from https://material.io/color/
    // colors go from darkest to lightest
    // all different shades of blue because go blue!
    {
        primary: "#0d47a1",
        light: "#5472d3",
        dark: "#002171"
    },
    {
        primary: "#1565c0",
        light: "#5e92f3",
        dark: "#003c8f"
    },
    {
        primary: "#1976d2",
        light: "#63a4ff",
        dark: "#004ba0",
    },
    {
        primary: "#1e88e5",
        light: "#6ab7ff",
        dark: "#005cb2"
    },
    {
        primary: "#2196f3",
        light: "#6ec6ff",
        dark: "0069c0"
    },
    {
        primary: "#42a5f5",
        light: "#80d6ff",
        dark: "0077c2"
    },
    {
        primary: "#64b5f6",
        light: "#9be7ff",
        dark: "#2286c3"
    },
    {
        primary: "#90caf9",
        light: "#c3fdff",
        dark: "#5d99c6"
    },
    {
        primary:"#bbdefb",
        light: "#eeffff",
        dark: "#8aacc8"
    },
    {
        primary: "#e3f2fd",
        light: "#ffffff",
        dark: "#b1bfca"
    }
];