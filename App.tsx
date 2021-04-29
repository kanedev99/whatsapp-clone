import Amplify, { graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import config from './src/aws-exports';
import {
  Auth,
  API
} from 'aws-amplify';
import { getUser } from './src/graphql/queries';
import { createUser, updateUser } from './src/graphql/mutations';
Amplify.configure(config)


function App() {
  const isLoadingComplete = useCachedResources();

  const avtListUri = [
    "https://hieumobile.com/wp-content/uploads/avatar-among-us-1.jpg",
    "https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg",
    "https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg",
    "https://hieumobile.com/wp-content/uploads/avatar-among-us-5.jpg",
    "https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg",
    "https://hieumobile.com/wp-content/uploads/avatar-among-us-7.jpg",
    "https://hieumobile.com/wp-content/uploads/avatar-among-us-8.jpg",
    "https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg",
]

  useEffect(() => {
    const fetchUser = async () => {
      // Get authenticated from Auth
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});

      if (userInfo) {
        // Get the user from Backend with the user Id from Auth
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
          )
        )

        if (userData) {
          console.log("User already registerd!");
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: avtListUri[Math.floor(Math.random()*9)],
          status: "Hey, I am using WhatsApp"
        }

        // If there is no user in Db with the Id, then create one
        await API.graphql(
          graphqlOperation(
            createUser,
            {input: newUser}
          )
        )
      }
    }
    fetchUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)