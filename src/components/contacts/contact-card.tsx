import * as React from 'react';
import { Card, CardHeader } from "../ui/card";
import { Avatar } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { getInitials } from '@/helpers/get-initials';
import Typography from '../ui/typography';
import { Link } from 'react-router-dom';
import { routeConstants } from '@/constants/route-const';


export type TContact = {
   _id: string;
   firstname: string;
   lastname: string;
   phone: number;
}

type TContactCardProps = {
   contacts: TContact
}

export const ContactCard: React.FC<TContactCardProps> = ({
   contacts
}) => {
   const { _id, firstname, lastname } = contacts

   return (
      <Link to={routeConstants.contactDetails.replace(':id', _id)}>
         <Card>
            <CardHeader className='grid grid-cols-[auto_1fr] items-center gap-2'>
               <Avatar className='font-semibold bg-muted'>
                  <AvatarFallback>
                     {getInitials(`${firstname} ${lastname}`)}
                  </AvatarFallback>
               </Avatar>

               <div>
                  <Typography className='text-xl'>
                     {firstname} {lastname}
                  </Typography>

                  {/* <Typography>
                     {phone}
                  </Typography> */}
               </div>

            </CardHeader>
         </Card>
      </Link>
   )
}