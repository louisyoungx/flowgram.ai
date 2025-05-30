export type ContainerService = any;

export interface IContainer {
  get(key: string): ContainerService;
}
