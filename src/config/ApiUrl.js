const ApiUrl = (process.env.NODE_ENV === 'production') ?
{
  getLive: "./api/getLive",
  getSchedule: "./api/getSchedule",
  getUrl: "./api/getUrl",
  getDateHistory: "./api/getDateHistory",
}
:
{
  getLive: "http://localhost:7171/48showroom/api/getLive",
  getSchedule: "http://localhost:7171/48showroom/api/getSchedule",
  getUrl: "http://localhost:7171/48showroom/api/getUrl",
  getDateHistory: "http://localhost:7171/48showroom/api/getDateHistory",
}

export default ApiUrl
