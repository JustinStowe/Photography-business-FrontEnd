import {} from "cloudinary";

function showUploadWidget() {
  cloudinary.openUploadWidget(
    {
      cloudName: "dgs9byfnn",
      uploadPreset: "ml_default",
      sources: ["local", "url"],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: true,
      cropping: false,
      multiple: true,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#0078FF",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#0078FF",
          action: "#FF620C",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1",
        },
        fonts: {
          default: null,
          "'Fira Sans', sans-serif": {
            url: "https://fonts.googleapis.com/css?family=Fira+Sans",
            active: true,
          },
        },
      },
    },
    (err, info) => {
      if (!err) {
        console.log("Upload Widget event - ", info);
      }
    }
  );
}
