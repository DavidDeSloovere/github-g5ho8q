export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log('got api call', query.source, query.locale);
  return {
    message: `Hello from Nitro ${new Date().toISOString()}`,
    echo_locale: query.locale ?? '(empty)',
  };
});
