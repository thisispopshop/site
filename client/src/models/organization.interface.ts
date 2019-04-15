import { iEvent, iOrgImage} from ".";

export interface iOrganization {
    id: number,
    name: string,
    subdomain: string,
    images: iOrgImage[];
    events: iEvent[],
}