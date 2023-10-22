import bootstrap from './bootstrap';

(async function () {
  await bootstrap();
})().catch(err => console.error(err));
