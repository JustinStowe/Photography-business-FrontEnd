import { create } from "zustand";
import * as PhotoService from "../utilities/photoService";
export const usePhotoStore = create((set, get) => ({
  photos: [],
  getAllPhotos: async () => {
    try {
      const data = await PhotoService.getAllPhotos();
      // console.log("Get all Photos data:", data);
      set((state) => ({
        photos: data,
      }));
    } catch (error) {
      console.error("get all photos error:", error);
    }
  },
  getOnePhoto: async (id) => {
    try {
      const data = await PhotoService.getOnePhoto(id);
      return data;
    } catch (error) {
      console.error("get onePhoto error:", error);
    }
  },
  createNewPhoto: async (data) => {
    console.log("data @ photoStore", data);
    try {
      const { getAllPhotos } = get();

      await PhotoService.createPhoto(data);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
  updatePhoto: async (id) => {
    const { getAllPhotos } = get();
    try {
      await PhotoService.updatePhoto(id);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
  deletePhoto: async (id) => {
    const { getAllPhotos } = get();
    try {
      await PhotoService.deletePhoto(id);
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
}));
