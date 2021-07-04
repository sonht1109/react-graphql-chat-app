import { Redirect, Route } from 'react-router'

interface IRouteProps {
  path: string;
  exact?: boolean;
  component: any;
}

const RouteChecking = ({children}: {children: any}) => {
  if(!localStorage.getItem('token')){
    return <Redirect to="/login" />
  }
  return children
}

export default function ProtectedRoute({path, component, exact = false}: IRouteProps) {
  return (
    <RouteChecking>
      <Route {...{exact, component, path}} />
    </RouteChecking>
  )
}
