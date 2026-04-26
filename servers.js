const path = require('path');
const fastify = require('fastify')({ logger: true });
const fastifyStatic = require('fastify-static');

// Раздача статики из папки public
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
});

// Обработка GET-запроса на /api
fastify.get('/api', async (request, reply) => {
  return 'Запрос прошел успешно';
});

// Запуск сервера
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Сервер запущен на http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();