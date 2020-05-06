import React, { useState, useEffect } from 'react'; 
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'; //Importando icones
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native'; //Importando componenetes do react-native
import api from '../../services/api'; //Importando a api do backend

import logoImg from '../../assets/logo.png'; //Importando logo
import styles from './styles'; //Importando estilo 

export default function Incidents(){

    const navigation = useNavigation();
    const [total, setTotal] = useState(0);
    const [incidents, setIncidents] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigationToDetail(incident){
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents(){

        if(loading){
            return;
        }

        if(total > 0 && incidents.length === total){
            return;
        }

        setLoading(true);

         const response = await api.get('incidents', {
             params: { page }
         });

         setIncidents([... incidents, ... response.data]);
         setTotal(response.headers['x-total-count']);
         setPage(page + 1);
         setLoading(false);
    }

    useEffect( () => { loadIncidents }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.herderText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos a baixo e salve o dia.</Text>

            <FlatList 
                style={styles.indentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item: incident}) => (
                    <View style={styles.incident}>

                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
                        </Text>
                        
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={ () => navigationToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>

                    </View>
                )}
            />  

        </View>
    );
}