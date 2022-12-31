export interface ApiConfig {
  baseUrl: string;
}
const config: ApiConfig = {
  baseUrl: 'http://localhost:3001/',
};
export default { ...config };
