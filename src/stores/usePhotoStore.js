import { create } from "zustand";
import { photoService } from "../services/photoService";

export const usePhotoStore = create((set, get) => ({
  photos: [],
  getAllPhotos: async () => {
    try {
      const data = await photoService.getAllPhotos();
      console.log("Get all Photos data:", data);
      set((state) => ({
        photos: data,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  createNewPhoto: async (photo) => {
    try {
      const { getAllPhotos } = get();

      await photoService.create(photo);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
  updatePhoto: async (photo) => {
    const { getAllPhotos } = get();
    try {
      await photoService.update(photo);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
  deletePhoto: async (id) => {
    const { getAllPhotos } = get();
    try {
      await photoService.delete(id);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
}));
