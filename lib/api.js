const qs = require("querystring");

async function fetchAPI(id, query) {
  for (let q in query) {
    if (!query[q]) {
      delete query[q];
    }
  }
  const params = qs.stringify(query);
  const url =
    process.env.API_URL +
    process.env.SERVICE_ID +
    (id ? "/" + id : "") +
    (params ? '?'+params : "");
  const data = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.API_KEY,
    },
  }).then((res) => res.json());
  return data;
}

export async function getPreviewPostByID(id, draftKey) {
  const data = await fetchAPI(id, draftKey ? { draftKey: draftKey } : '');
  return data;
}

export async function getAllPostsWithID() {
  const data = fetchAPI('',{ fields: "id" });
  return data.contents;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI();
  return data.contents;
}

export async function getPostByID(id, draftKey) {
  const data = await fetchAPI(id, draftKey ? { draftKey: draftKey } : '');
  return data;
}
export async function getMorePosts(id) {
  const data = await fetchAPI('', { filters: "id[not_equals]" + id });
  return data.contents;
}
