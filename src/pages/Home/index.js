import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, ToastAndroid } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import FiguraHome from "../../../assets/svg/figuraHome";
import styles from "./styles";
import api from "../../services/api";

export default function Home({ route, navigation }) {
  const [stores, setStores] = useState([]);
  const [codigo, setCodigo] = useState("");

  useEffect(() => {
    (async () => {
      await api
        .post("/empresasCliente", {
          id_cliente: route.params.id,
        })
        .then((empresas) => {
          setStores(empresas.data);
        });
    })();
  }, []);

  async function resgate() {
    const hash = codigo.split(".");

    const res = await api.post("/resgatarCodigo", {
      hash: hash[2],
      id: route.params.id,
    });

    ToastAndroid.show(res.data, ToastAndroid.SHORT);
  }

  function logout() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.exitView}>
          <TouchableOpacity onPress={logout} style={styles.exitButton}>
            <Feather name="log-in" size={40} color="red" />
            <Text style={styles.exitText}>Sair</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rescuePoints}>
          <View style={styles.figura}>
            <FiguraHome />
          </View>
          <Text style={styles.text}>Resgatar Pontos!</Text>
          <TextInput
            value={codigo}
            onChangeText={(codigo) => setCodigo(codigo)}
            style={styles.inputBox}
            placeholder="Digite seu código aqui."
          />
          <TouchableOpacity onPress={resgate} style={styles.rescueButton}>
            <Text style={styles.rescueButtonText}>Resgatar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.myStoresBox}>
          <Text style={styles.storesBoxTitle}>Minhas Lojas</Text>
          {stores.length > 0 &&
            stores.map((store) => {
              return (
                <View style={styles.empresaBox}>
                  <Text style={styles.empresaTitle}>{store.nome}</Text>
                  <View style={styles.moeda}>
                    <Text style={styles.empresaPontos}>
                      Pontos: {store.pontos}
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
