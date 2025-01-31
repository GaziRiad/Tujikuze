import createImageUrlBuilder from "@sanity/image-url";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: "83b0mzm8",
  dataset: "production",
});

export const urlFor = (source) => {
  return builder.image(source);
};
