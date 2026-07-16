import { createClient } from "@supabase/supabase-js";

const url = "https://uczzccdrilyuafgudpwn.supabase.co";

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjenpjY2RyaWx5dWFmZ3VkcHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxNTQwMzcsImV4cCI6MjA5OTczMDAzN30.2w31VE3B-saOfEzwfgAOmnf6i-dpzyrz8k1guZkfSrQ";

const supabase = createClient(url, key);

export default async function mediaUpload(file) {
  if (!file) {
    throw new Error("No file has selected");
  }

  const newName = Date.now() +"-"+file.name;

  const { data, error } = await supabase.storage
    .from("images")
    .upload(newName, file, {
      upsert: false,
      cacheControl: "3600",
    });

  if (error) {
    throw error;
  }

  const publicUrl = supabase.storage.from("images").getPublicUrl(newName)
    .data.publicUrl;

  return publicUrl;
}
