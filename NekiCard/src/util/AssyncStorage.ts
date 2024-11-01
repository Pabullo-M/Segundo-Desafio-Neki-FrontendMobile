import AsyncStorage  from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`Item salvo, AsyncStorage: chave ${key} valor ${value} `);
  } catch (error) {
    console.error('Erro ao salvar AsyncStorage:', error, `chave ${key} valor ${value}`);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('item recuperado com sucesso:', value);
      return value;
    } else {
      console.log('item não encontrado');
      return null;
    }
  } catch (error) {
    console.error('flaha ao recuperar item:', error);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('exclusão do item com sucesso');
  } catch (error) {
    console.error('Falha ao excluir o item', error);
  }
};