export default {
  name: 'post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'featuredImage',
      type: 'image',
      options: { hotspot: true },
    }
  ],
};

