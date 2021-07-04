import { InMemoryCache, makeVar } from "@apollo/client";

const infoVar = makeVar<any>(null);

const cache = new InMemoryCache({
  typePolicies: { 
    Product: {
      fields: { // Field policy map 
        infoClient: {
          read(){
            return infoVar();
          }
        }
      }
    }
  }
});

export default cache