import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import styles from "./styles";

import LogoSVG from "../../../assets/svg/logo";
import api from "../../services/api";

export default function Login({ navigation }) {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  async function login() {
    const res = await api.post("/loginCliente", {
      cpf: cpf,
      senha: senha,
    });

    if (res.data.msg) {
      ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
      return;
    }

    const obj = {
      nome: res.data.nome,
      senha: res.data.senha,
      id: res.data.id,
    };
    navigation.push("Home", obj);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <LogoSVG />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>CPF</Text>
        <TextInput
          value={cpf}
          onChangeText={(cpf) => setCpf(cpf)}
          style={styles.input}
        />

        <Text style={styles.text}>Senha</Text>
        <TextInput
          value={senha}
          onChangeText={(senha) => setSenha(senha)}
          style={styles.input}
        />

        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBottom}>
          <Text style={styles.buttonBottomText}>Não tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
