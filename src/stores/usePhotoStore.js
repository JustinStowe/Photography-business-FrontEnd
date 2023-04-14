import { create } from "zustand";
import * as PhotoService from "../utilities/photoService";
export const usePhotoStore = create((set, get) => ({
  photos: [],
  getAllPhotos: async () => {
    try {
      const data = await PhotoService.getAllPhotos();
      console.log("Get all Photos data:", data);
      set((state) => ({
        photos: data,
      }));
    } catch (error) {
      console.error("get all photos error:", error);
    }
  },
  createNewPhoto: async (data) => {
    console.log("data @ photoStore", data);
    try {
      const { getAllPhotos } = get();

      await PhotoService.create(data);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
  updatePhoto: async (id, photoData) => {
    const { getAllPhotos } = get();
    try {
      await PhotoService.update(id, photoData);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
  deletePhoto: async (id) => {
    const { getAllPhotos } = get();
    try {
      await PhotoService.delete(id);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
}));
