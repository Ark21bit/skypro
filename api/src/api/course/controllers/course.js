'use strict';

/**
 * course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) => ({
  async lessons(ctx) {
    const user = ctx.state.user;

    ctx.query.filters = {
        ...(ctx.query.filters || {}),
        users: user.id
    };

    return super.find(ctx);
},

  async find(ctx) {
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const { results, pagination } =await strapi.service('api::course.course').find();

    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, { pagination });
  },
  async findOne(ctx) {
    const entry = await strapi.entityService.findOne('api::course.course', ctx.request.params.id);

    return this.transformResponse(entry);
  },
  async lessonsOne(ctx) {
    const user = ctx.state.user;

    const entry = await strapi.db.query('api::course.course').findOne({
      where: { id:ctx.request.params.id, users: user.id },
      populate:{lessons:true}
    });

    return this.transformResponse(entry);
  },

}) );
