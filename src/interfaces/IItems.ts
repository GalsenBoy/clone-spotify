import IArtists from "./IArtists";

export default interface IItems {
    artists: IArtists[],
    external_urls: object,
    href: string,
    name: string
}