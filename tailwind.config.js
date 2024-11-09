module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        GrisOscuro: "#666666",
        Rojo: "#EE1D23",
        Verde: "#0C6638",
        HoverPrimario: "#094C2A",
        VerdeOscuro: "#06331C",
        Acento: "#63D199",
        CasiBlanco: "#E6E6E6",
        Blanco20: "#CEE0D7",
        Blanco10: "#E7F0EC",
      },
      backgroundImage: {
        VerdeNavbarradiente: "linear-gradient(to bottom, #06331C, #0C6638)",
        VerdeFooterGradiente: "linear-gradient(to bottom, #0C6638, #06331C)",
      },
    },
  },
  plugins: [],
};
