import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material"

export const FORMFIELD = [
    {id:1,
    label:'First Name',
    name:'firstName',
    type:'text',
    multiline:false,},

    {id:2,
    name:'lastName',
    label:'Last Name',
    type:'text',
    multiline:false,},

    {id:3,
    name:'user_email',
    label:'Email Address',
    type:'email',
    multiline:false,},

    {id:4,
    label:'Your Message',
    name:'message',
    type:'text',
    rows:5,
    multiline:true}
]

export const SOCIALS = [
    {id:1,
    icon:<Instagram/>,
    link:'https://instagram.com/noah_mydn'},

    {id:1,
    icon:<Twitter/>,
    link:'https://twitter.com/noah_mydn'},

    {id:1,
    icon:<GitHub/>,
    link:'https://github.com/noah-mydn'},

    {id:1,
    icon:<LinkedIn/>,
    link:'https://www.linkedin.com/in/may-yadanar-noah-8a95131bb/'},

]