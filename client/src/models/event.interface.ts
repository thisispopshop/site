import { iOccasion} from ".";

export interface iEvent {
    id: number,
    name: string,
    description: string,
    occasions: iOccasion[],
}