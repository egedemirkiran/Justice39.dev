import type { IconType } from 'react-icons'

interface socialAccount {
    data: {
        siteName: string;
        color: string;
        username: string;
        url: string;
    }
    Icon: IconType
}

interface propsType {
    index: number;
    label: string;
    children: any;
    props?: any;
    id?: string;
}

interface Pages {
    name: string;
    href: string;
}
