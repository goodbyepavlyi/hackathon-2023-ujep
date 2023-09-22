const config = {
    Environment: "DEVELOPMENT",

    ApiRoutes: {
        Meteorites: "https://data.nasa.gov/resource/gh4g-9sfh.json",
    }
}

module.exports = class Config {
    static get getEnvironment() {
        return config.Environment;
    }

    static get InProduction() {
        return config.Environment == "PRODUCTION";
    }

    static get MeteoritesApiRoute() {
        return config.ApiRoutes.Meteorites;
    }
}