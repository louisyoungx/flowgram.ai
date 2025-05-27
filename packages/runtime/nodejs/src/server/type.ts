export interface ServerParams {
  dev?: boolean;
  port?: number;
  prefix?: string;
}

export interface ServerInfo {
  name: string;
  runtime: string;
  version: string;
  time?: string;
}
