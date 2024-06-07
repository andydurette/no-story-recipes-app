import * as dotenv from "dotenv";
dotenv.config();

export default ({ config }) => {
  return {
    ...config,
    name: "noStoryRecipes",
    slug: "no-story-recipes",
    owner: "andydurette",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },
    assetBundlePatterns: ["**/*"],
    plugins: [],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.andydurette.nostoryrecipes",
    },
    android: {
      androidStatusBar: {
        backgroundColor: "#FFF",
        translucent: false,
      },
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.andydurette.nostoryrecipes",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "2f40afe6-abe5-4288-a51c-0c609e6051f2",
      },
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
  };
};
