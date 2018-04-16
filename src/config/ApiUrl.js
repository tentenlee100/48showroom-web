const ApiUrl = (process.env.NODE_ENV === 'production') ?
{
  getLive: "./api/getLive",
  getSchedule: "./api/getSchedule",
  getUrl: "./api/getUrl",
}
:
{
  getLive: "http://localhost:7171/48showroom/api/getLive",
  getSchedule: "http://localhost:7171/48showroom/api/getSchedule",
  getUrl: "http://localhost:7171/48showroom/api/getUrl",

}

export default ApiUrl
