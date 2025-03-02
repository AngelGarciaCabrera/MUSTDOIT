import { createClient } from "@supabase/supabase-js";

const supaURL = import.meta.env.VITE_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_KEY;

console.log("supaURL:", supaURL, "supabaseKey:", supabaseKey);

if (!supaURL || !supabaseKey) {
  throw new Error("Las variables de entorno no están definidas correctamente");
}

const supaConetion = createClient(supaURL, supabaseKey);

export default supaConetion;
