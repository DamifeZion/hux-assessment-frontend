import packageJson from "../../package.json";

type TAppConstant = {
   appName: string;
   appVersion: string;
};

export const appConstant: TAppConstant = {
   appName: "Contactly",
   appVersion: packageJson.version,
};
