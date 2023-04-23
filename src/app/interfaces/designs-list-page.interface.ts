import { Design } from "./design.interface"

export interface DesignsListPage {
    "data": Design[],
    "nextCursor": string,
    "hasNextPage": boolean,
    "hasPreviousPage": boolean
}