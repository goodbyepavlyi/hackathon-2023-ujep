import config from "@/config.js";

module.exports = {
    fetchMeteorites: async function() {
        const response = await fetch(config.MeteoritesApiRoute);
        const data = await response.json();
        
        return data;
    },
    
    fetchAPOD: async function(date) {
        const response = await fetch(`${config.AstronomyPictureOfDayApiRoute}&date=${date || "today"}`);
        const data = await response.json();
        
        return data;
    }, 
    
    fetchEPICNatural: async function() {
        const response = await fetch(config.EpicCameraNaturalApiRoute);
        const data = await response.json();
        
        return data;
    },
}