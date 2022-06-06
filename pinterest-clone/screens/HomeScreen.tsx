import { StyleSheet, Image, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Pin from '../components/Pin';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
   
    <ScrollView contentContainerStyle={styles.container}>
     
    <Pin
      pin={{ //pin is the object
        image: "https://picsum.photos/200/300?grayscale",
        title: "Title 1",
      }}
      />

<Pin
      pin={{ //pin is the object
        image: "https://picsum.photos/seed/picsum/200/300",
        title: "Title 1",
      }}
      />
   
   
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});
