import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import GuardarScreen from "../screens/GuardarScreen";
import LeerScreen from "../screens/LeerScreen";
import EditarScreen from "../screens/EditarScreen";
import EliminarScreen from "../screens/EliminarScreen";

import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Guardar" component={GuardarScreen}
            options={{ tabBarIcon: ()=> 
                <Entypo name="save" size={30} color="#5a74c8ff" />
             }}

            />


            <Tab.Screen name="Leer" component={LeerScreen}/>
            <Tab.Screen name="Editar" component={EditarScreen}/>
            <Tab.Screen name="Eliminar" component={EliminarScreen}/>
        </Tab.Navigator>
    )
}

export default function MainNav(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}