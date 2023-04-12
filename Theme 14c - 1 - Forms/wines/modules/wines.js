import { API_KEY, ENDPOINT } from "./config.js";

export function get() {
  fetch(ENDPOINT, {
    method: "get",
    headers: {
      apikey: API_KEY,
    },
  })
    .then(e => e.json())
    .then(data => {
      const t = document.querySelector("template").content;
      document.querySelector("main").innerHTML = "";
      data.forEach(wine => {
        const copy = t.cloneNode(true);
        copy.querySelector("h2").textContent = wine.name;
        copy.querySelector("button.delete").addEventListener("click", () => {
          deleteWine(wine.id);
        });
        copy.querySelector("button.update").addEventListener("click", () => {
          patch(wine.id);
        });
        document.querySelector("main").appendChild(copy);
      });
    });
}
get();

export function post() {
  const newWine = {
    name: name,
    grapes: ["pinor lightblue"],
    year: 1986,
    type: "white",
    origin: {
      country: "Denmark",
      region: "Nordsjælland",
    },
    isGood: false,
  };

  fetch(ENDPOINT, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: API_KEY,
    },
    body: JSON.stringify(newWine),
  })
    .then(e => e.json())
    .then(e => get());
}

export function deleteWine(id) {
  fetch("https://acvoueouddjxhosatjlf.supabase.co/rest/v1/wines?id=eq." + id, {
    method: "delete",

    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: API_KEY,
    },
  })
    .then(e => e.json())
    .then(e => get());
}

export function patch(id) {
  const updates = {
    name: "Daddy's Wine",
    isGood: true,
  };

  fetch("https://acvoueouddjxhosatjlf.supabase.co/rest/v1/wines?id=eq." + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: API_KEY,
    },
    body: JSON.stringify(updates),
  })
    .then(e => e.json())
    .then(e => get());
}
