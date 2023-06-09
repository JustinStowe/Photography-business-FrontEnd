import { create } from "zustand";
import * as PhotoService from "../utilities/photoService";
import * as userService from "../utilities/user-service";

export const usePhotoStore = create((set, get) => ({
  photos: [],
  user: userService.getUser(),
  getAllPhotos: async () => {
    try {
      const data = await PhotoService.getAllPhotos();
      console.log("Get all Photos data:", data);
      set((state) => ({
        photos: data,
      }));
      return data;
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
  userLogin: async (credentials) => {
    try {
      const { getAllPhotos } = get();
      const user = await userService.login(credentials);
      set((state) => ({
        user: {
          name: user.name,
          email: user.email,
          photos: user.photos,
          projectId: user.projectId,
          token: userService.getUser(),
          isAdmin: user.isAdmin,
        },
      }));
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
  userSignUp: async (data) => {
    try {
      const { getAllPhotos } = get();
      const user = await userService.signUp(data);
      set((state) => ({
        user: {
          name: user.name,
          email: user.email,
          photos: user.photos,
          projectId: user.projectId,
          token: userService.getUser(),
        },
      }));
      await getAllPhotos();
    } catch (error) {
      console.error(error);
    }
  },
  userLogout: async () => {
    try {
      userService.logOut();
      set((state) => ({
        user: null,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  changeUserDetails: async () => {
    try {
      await userService.changeDetails();
      set((state) => ({
        user: {
          name: user.name,
          email: user.email,
          photos: user.photos,
          projectId: user.projectId,
        },
      }));
    } catch (error) {}
  },
}));
