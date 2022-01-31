module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5023b77f5eacf2785a4a596684451231'),
  },
});
