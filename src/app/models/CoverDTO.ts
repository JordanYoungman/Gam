import { GameDTO } from "./GameDTO";
import { IdentityOrValue } from "./IdentityOrValue";

export interface CoverDTO {
     alphaChannel: boolean | null;
     animated: boolean | null;
     checksum: string;
     game: IdentityOrValue<GameDTO>;
     id: number | null;
     height: number | null;
     imageId: string;
     url: string;
     width: number | null;
}