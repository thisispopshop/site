import { iEvent} from ".";

export interface iOrganization {
    id: number,
    name: string,
    subdomain: string,
    events: iEvent[],
}