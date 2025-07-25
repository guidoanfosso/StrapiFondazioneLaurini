module.exports = {
  async beforeCreate(event) {
    console.log('beforeCreate Titolo:', event.params.data.Titolo);
    if (typeof event.params.data.Titolo === 'string') {
      event.params.data.slug = await generateUniqueSlug(event, event.params.data.Titolo);
    }
  },

  async beforeUpdate(event) {
    console.log('beforeUpdate Titolo:', event.params.data.Titolo);
    if (typeof event.params.data.Titolo === 'string') {
      event.params.data.slug = await generateUniqueSlug(event, event.params.data.Titolo, event.params.where?.id);
    }
  },
};

async function generateUniqueSlug(event, title, ignoreId = null) {
  const baseSlug = slugify(title);
  let slug = baseSlug;
  let count = 1;

  async function slugExists(slug) {
    const filters = { slug };
    if (ignoreId) {
      filters.id = { $ne: ignoreId };
    }
    const found = await strapi.db.query('api::event.event').findOne({
      where: filters,
      select: ['id'],
    });
    return !!found;
  }

  while (await slugExists(slug)) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}