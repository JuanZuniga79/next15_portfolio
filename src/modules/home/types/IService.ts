import {JSX} from "react";

export default interface IService {
    icon: ()=> JSX.Element
    title: string;
    description: string;
}