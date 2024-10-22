export const getEnv = (key: string, defaultValue = null) =>
   import.meta.env[key] || defaultValue;
