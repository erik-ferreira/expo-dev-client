## Expo Dev Client

O problema de adicionar uma biblioteca de código nativo no expo bare workflow, é que ao tentar rodar com expo go, não vai funcionar, mas posso utilizar o expo-dev-client

- Fluxos de trabalho com expo
  - Manage workflow
    - Se atentar a utilizar bibliotecas que tem disponível no expo
  - Bare workflow

## Exemplo com o React Native Firebase

1. Configurar no console do firebase o app android e o app ios
2. Adicionar os arquivos na raiz do projeto
3. Seguir as instruções abaixo:

```json
{
  "expo": {
    "android": {
      "googleServicesFile": "./google-services.json"
    },
    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/perf",
      "@react-native-firebase/crashlytics"
    ]
  }
}
```

4. Executar `expo prebuild --clean`
   4.1 Isso vai me dar acesso a pasta android e ios e vai fazer toda a configuração nativa

5. Mesmo após fazer todas as configurações, ao tentar utilizar um serviço do React Native Firebase, resultará em error, então o que deve ser feito é utilizar o expo-dev-client

6. Primeiro eu preciso compilar a aplicação no dispositivo, e depois basta executar com a flag do expo-dev-client
   6.1 `npx expo run:android` - Para compilar dentro do dispositivo
   6.2 `npx expo start --dev-client` - Para executar dentro do expo
