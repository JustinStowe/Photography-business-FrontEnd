class PhotoService {
  constructor() {
    this.baseUrl = "http://localhost:3001";
  }

  async getAllPhotos() {
    const response = await fetch(`${this.baseUrl}/photos`);
    const data = await response.json();
    return data;
  }

  async getOnePhoto(id) {
    const response = await fetch(`${this.baseUrl}/photos/${id}`);
    const data = await response.json();
    return data;
  }

  async create(photo) {
    const response = await fetch(`${this.baseUrl}/photos/`, {
      method: "POST",
      body: JSON.stringify(photo),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  }

  async updatePhoto(photo) {
    const response = await fetch(`${this.baseUrl}/photos/${photo.id}`, {
      method: "PUT",
      body: JSON.stringify(photo),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  }

  async delete(id) {
    const response = await fetch(`${this.baseUrl}/photos/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  }
}

export const photoService = new PhotoService();
