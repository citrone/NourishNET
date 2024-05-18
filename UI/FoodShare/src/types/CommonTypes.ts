type ClickHandler = (e: React.MouseEvent) => void

export interface IBeneficiary {
  id: number;
  name: string;
  cityName: string;
  address: string;
  capacity: number;
}

export interface IActions {
  actionName: string
  actionHandler: ClickHandler
}
