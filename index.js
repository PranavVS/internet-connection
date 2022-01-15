import fetch from "node-fetch";

export default async function internetConnected(
  url = "https://captive.apple.com/hotspot-detect.html"
) {
  const resp = await fetch(url);
  return resp.status == 200 && resp.status < 300;
}
