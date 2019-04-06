import { iOccasion} from ".";

export interface iEvent {
    id: number,
    name: string,
    occasions: iOccasion[],
}