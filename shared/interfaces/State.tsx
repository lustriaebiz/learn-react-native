import { City } from "./City";
import { Province } from "./Province";

export interface State {
    loaded_province: boolean,
    loaded_city: boolean,
    loaded_courier: boolean,
    province:any,
    city: any
}