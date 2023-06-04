'use strict';

/**
 * review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({ strapi }) => ({
  async create(ctx) {
      const user = ctx.state.user;

      const review = await strapi.entityService.create('api::review.review', {
        data: {
          description: ctx.request.body.description,
          users_permissions_user:user.id
        },
      });

      return this.transformResponse(review);
  }
  })
);
