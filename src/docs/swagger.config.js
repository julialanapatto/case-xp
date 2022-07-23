const swaggerConfig = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Investimentos API",
      description: "Api simples, simulando transações bancárias e investimentos",
      version: "1.0"
    },
    servers: [{
      url: "https://casexpinvestimentos.herokuapp.com/docs/",
      description: "heroku application"
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ["routes.js"]

}

module.exports = swaggerConfig;