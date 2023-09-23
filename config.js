const config = {
    Environment: "DEVELOPMENT",
    ApiKey: "pXyAQ1imOu9JXwa6RnCCqT21ZZ5lTAD7eOK54Zyp", 

    ApiRoutes: {
        Meteorites: "https://data.nasa.gov/resource/gh4g-9sfh.json",
        AstronomyPictureOfDay: "https://api.nasa.gov/planetary/apod",
        EpicCameraNatural: "https://epic.gsfc.nasa.gov/api/natural",
    }
}

module.exports = class Config {
    static get ApiKey() {
        return config.ApiKey;
    }

    static get getEnvironment() {
        return config.Environment;
    }

    static get InProduction() {
        return config.Environment == "PRODUCTION";
    }

    static get MeteoritesApiRoute() {
        return config.ApiRoutes.Meteorites;
    }
    
    static get AstronomyPictureOfDayApiRoute() {
        return `${config.ApiRoutes.AstronomyPictureOfDay}?api_key=${config.ApiKey}`;
    }
    
    static get EpicCameraNaturalApiRoute() {
        return config.ApiRoutes.EpicCameraNatural;
    }
}