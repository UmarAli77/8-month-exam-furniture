import PageComp from "../componets/page"
import axios from "axios";
import Image from "next/image";

interface Cart {
    _id: string;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    rate: number;
    price: number;
    size: string;
    color: string;
    __v: string;
  }