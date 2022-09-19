export default {
  name: 'banner',
  title: 'banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'subtitle',
      type: 'string',
    },
    {
      name: 'bannerimage',
      title: 'banne-image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // },
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image',
  //   },
  // },
}
