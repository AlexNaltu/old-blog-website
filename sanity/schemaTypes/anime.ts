const schema = {
  name: "animeRecomandation",
  title: "Anime Recomandation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
  ],
};

export default schema;
