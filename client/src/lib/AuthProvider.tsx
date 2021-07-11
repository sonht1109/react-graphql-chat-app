import { useQuery } from '@apollo/client'
import React, { ReactNode } from 'react'
import { useHistory } from 'react-router';
import LoadingScreen from '../components/LoadingScreen';
import { ME } from './queries'

export default function AuthProvider({children} : {children: ReactNode}) {

  const history = useHistory();

  // need to add expiration of token in server
  const {data, loading} = useQuery(ME, {
    onError(){
      localStorage.removeItem('token');
      history.replace('/login');
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
