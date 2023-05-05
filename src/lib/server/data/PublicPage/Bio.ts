

import { z } from "zod";


export const bio = {
    pfp : "",
    username : "Username",
    body : "About me 👋",
}


const Bio = z.object({
    pfp : z.string(),
    username : z.string(),
    body : z.string().max(120),
});
  