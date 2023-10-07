import { SteamGameModel } from "./SteamGameModel";

export interface SteamGamesModel {
    game_count: number;
    games: SteamGameModel[];
}