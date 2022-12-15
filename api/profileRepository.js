export default () => (baseURL) => ({
  async index() {
    const { data: profiles } = await useFetch(`${baseURL}/profiles`, {
      method: "GET",
    });
    return profiles;
  },
  async getAuthenticatedProfiles() {
    const { data: profiles } = await useFetch(
      `${baseURL}/profiles/authenticated`
    );
    return profiles;
  },
  async create(payload) {
    var form_data = new FormData();

    Object.keys(payload).forEach((key) => form_data.append(key, payload[key]));

    return await fetch(`${baseURL}`, {
      method: "POST",
      body: form_data,
    });
  },
  async show(id) {
    const { data: profile } = await useFetch(`${baseURL}/${id}`, {
      method: "GET",
    });
    return profile;
  },
  async showByName(profileName) {
    const { data: profile } = await useFetch(
      `${baseURL}/profiles/${profileName}`,
      { method: "get", initialCache: false }
    );
    return profile;
  },
  async update(payload, id) {
    var form_data = new FormData();

    Object.keys(payload).forEach((key) => form_data.append(key, payload[key]));

    return await fetch(`${baseURL}/${id}`, {
      method: "PUT",
      body: form_data,
    });
  },
  async delete(id) {
    return await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });
  },
});
