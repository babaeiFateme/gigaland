import { TSocialItems } from "@/types";
import Link from "next/link"
interface SocialLinkProps {
    socialArray: TSocialItems[];
  }
const SocialLink = ({socialArray}:SocialLinkProps) => {
    return (
        <ul>
            {socialArray.map((item , index)=>(
               <li key={item.id} className='mb-3 text-gray-400 hover:text-primary-400'>
               <Link href={item.route} >
                   {item.name}
               </Link>
           </li>
            ))}
        </ul>
    )
}

export default SocialLink