import { SourceSystem } from "../enums/SourceSystem";

export interface GameDTO {
     sourceSystem: SourceSystem;
     appID: number;
     name: string;
     releaseDate: string;
     headerImage: string;
     developers: string;
     publishers: string;
     categories: string;
     genres: string;
     tags: string;
}