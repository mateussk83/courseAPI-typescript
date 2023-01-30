import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async(host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === "test" ? "localhost":host,
      //process.env permite vc utilizar qualquer variavel que a aplicação ela vai ter
      database: process.env.NODE_ENV === 'rentx_test'
      ? "" : defaultOptions.database
    })
  )
}