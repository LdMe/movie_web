import { datos } from "./datos.js";
import { createCardsFromResponse } from "./cards.js";
import { startFilter } from "./filter.js";

createCardsFromResponse(datos)
startFilter("#search-bar form")

