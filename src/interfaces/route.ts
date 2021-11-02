export default interface IRoute {
  path: string
  name: string
  exact: boolean
  component: any
  protected: boolean
  props?: any
}
