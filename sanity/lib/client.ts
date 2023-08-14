import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skyUIdvSVUFfzLfHjdEgGQuGTqbOeOku90KYuZuWxdv5lGlpkSSx3pEtqkw3AFKEYB8fP9MD1vnWdankqfx4OOS0YJ9UYXOuioAoWjP349KNRJo752EDFC3FOTNGxp6lMefMiUM9GgKEevuzQ4bRGXs94wQAtrjfuMC3oBC1jtZk0JZp22dy",
})
