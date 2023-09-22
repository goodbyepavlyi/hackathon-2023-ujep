module.exports = class ApiResponse {
    static get Success() {
        return {
            code: 200, 
            message: "Success", 
        };
    }

    static get NotFound() {
        return {
            code: 404, 
            message: "Not found", 
        };
    }

    static get ServerError() {
        return {
            code: 500, 
            message: "Server error", 
        };
    }

    static get BadRequest() {
        return {
            code: 400, 
            message: "Bad request", 
        };
    }
}