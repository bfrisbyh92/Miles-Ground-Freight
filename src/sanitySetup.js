import sanityClient from "@sanity/client"
export default sanityClient({
    projectId: j7has8tc,
    dataset: production,
    useCdn: true
});