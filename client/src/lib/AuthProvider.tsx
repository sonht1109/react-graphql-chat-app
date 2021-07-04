import { useQuery } from '@apollo/client'
import React, { ReactNode } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import { ME } from './queries'

export default function AuthProvider({children} : {children: ReactNode}) {

  // need to add expiration of token in server
  const {data, loading, error} = useQuery(ME, {
    onError(){
      localStorage.removeItem('token');
    }
  });

  console.log(data);

  if(loading) return <LoadingScreen />
  // if(error) return <></>

  return (
    <div>
      {children}
    </div>
  )
}
