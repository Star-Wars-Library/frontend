const apiUrl = `http://starwarslibrary-env.eba-pjw3m5ax.us-east-1.elasticbeanstalk.com`;

export const apiActions = {
  get: async ({ commit }, collection) => {
    try {
      const res = await fetch(`${apiUrl}/${collection}`);
      const items = await res.json();
      commit("empty");
      items.forEach((item) => commit("load", item));
    } catch (err) {
      return console.error(err);
    }
  },
  post: async ({ commit }, { collection, item }) => {
    try {
      console.log({ collection, item });
      const res = await fetch(`${apiUrl}/${collection}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      const newItem = await res.json();
      !newItem.errorCode && commit("load", newItem);
    } catch (err) {
      return console.error(err);
    }
  },
  del: async ({ commit }, { collection, id }) => {
    try {
      await fetch(`${apiUrl}/${collection}/${id}`, {
        method: "DELETE",
      });
      commit("remove", id);
    } catch (err) {
      return console.error(err);
    }
  },
};
