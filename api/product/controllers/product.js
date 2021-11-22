'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findByName: async (pObj) => {
        const { name } = pObj.params;
        const result = await strapi.query('product').search({ _q: name, _start: 0 }, ['product']);
        return result;
    }
};
