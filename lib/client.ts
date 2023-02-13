import { createClient } from "microcms-js-sdk"
export const client=createClient({
  serviceDomain:"terusi-product",
  apiKey:process.env.API_KEY||'',
})
