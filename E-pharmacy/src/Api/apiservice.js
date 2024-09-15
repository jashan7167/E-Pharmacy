import { apiClient } from "./apiclient";

export const executeJwtAuthenticationService = (username, password) =>
  apiClient.post(`/authenticate`, { username, password });

export const registerUser = (formData) => {
  return apiClient.post(`/register`, formData);
};
