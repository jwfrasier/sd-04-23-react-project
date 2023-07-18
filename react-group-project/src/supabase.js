import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mxakcphctxajogkuteth.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
