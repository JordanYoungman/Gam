import { SourceSystem } from "../enums/SourceSystem";
import { Category } from "../enums/Category";
import { IdentitiesOrValues } from "./IdentitiesOrValues";
// import { Platform } from "./platform";
import { GameStatus } from "../enums/GameStatus";
import { Theme } from "./ThemeDTO";
import { GenreDTO } from "./GenreDTO";
import { CoverDTO } from "./CoverDTO";
import { IdentityOrValue } from "./IdentityOrValue";

export interface GameDTO {
     sourceSystem: SourceSystem;
     id: number | null;
     name: string;
     slug: string;
     checksum: string;
     category: Category | null;
     storyline: string;
     summary: string;
     createdAt: string | null;
     firstReleaseDate: string | null;
     genres: IdentitiesOrValues<GenreDTO>;
     covers: IdentityOrValue<CoverDTO>
    //  platforms: IdentitiesOrValues<Platform>;
     rating: number | null;
     ratingCount: number | null;
     status: GameStatus | null;
     themes: IdentitiesOrValues<Theme>;
     totalRating: number | null;
     totalRatingCount: number | null;
     aggregatedRating: number | null;
     aggregatedRatingCount: number | null;
     updatedAt: string | null;
     url: string;
}